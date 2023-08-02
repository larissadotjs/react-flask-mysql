import React from "react";

const Card = ({ item }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
      <p className="text-gray-600 mb-4">{item.prod_description}</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-medium text-gray-600">
            Instrumento Financeiro
          </p>
          <p className="text-sm text-gray-800">{item.financial_instrument}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">
            Prazo para pagamento
          </p>
          <p className="text-sm text-gray-800">{item.payment_deadline}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">
            Rentabilidade ao ano
          </p>
          <p className="text-sm text-gray-800">{item.yearly_return}</p>
        </div>
      </div>
    </div>
  );
};

const Cards = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {data && data.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
};

export default Cards;
