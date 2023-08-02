import time
import pymysql
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

while True:
    try:
        db = pymysql.connect(host='mysql-db', user='root', password='password')
        break
    except Exception as e:
        print("Unable to connect to MySQL, retrying in 5 seconds...")
        time.sleep(5)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:password@mysql-db:3306/products'
db = SQLAlchemy(app)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    financial_instrument = db.Column(db.String(200), nullable=False)
    prod_description = db.Column(db.String(200), nullable=False)
    yearly_return = db.Column(db.String(200), nullable=False)
    payment_deadline = db.Column(db.String(120), nullable=False)

    def as_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'financial_instrument': self.financial_instrument,
            'prod_description': self.prod_description,
            'yearly_return': self.yearly_return,
            'payment_deadline': self.payment_deadline,
        }

    def __repr__(self):
        return f'<Product {self.name} - {self.financial_instrument}>'
    
    def json(self):
        return {'id': self.id,'name': self.name, 'financial_instrument': self.financial_instrument, 'prod_description': self.prod_description, 'yearly_return': self.yearly_return, 'payment_deadline': self.payment_deadline}

@app.route('/', methods=['GET'])
def hello():
  return jsonify({'message': 'hello bloxs!'})
    
@app.route('/api/data', methods=['GET'])
def get_products():
    products = Product.query.all()
    product_list = [product.as_dict() for product in products]
    return jsonify(product_list)

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    with app.app_context():
        product1 = Product(name='RendaFixa+ 2023', financial_instrument='Debênture', prod_description='Debênture emitida por uma empresa de energia renovável para financiar a construção de novos parques eólicos. A debênture possui garantia real e oferece uma taxa de juros fixa.', yearly_return='8.5%', payment_deadline='5 anos')
        product2 = Product(name='DiversiAção Global', financial_instrument='Fundo de Investimento em Ações', prod_description='Fundo que investe em ações de empresas de diversos setores ao redor do mundo, buscando maximizar o retorno por meio da valorização dos papéis e também distribuindo parte dos lucros aos cotistas.', yearly_return='12.8%', payment_deadline='Indeterminado (recomendado para investimento de médio a longo prazo)')

        db.session.add_all([product1, product2])
        db.session.commit()
        db.session.close()
    app.run(host='0.0.0.0', port=5000)