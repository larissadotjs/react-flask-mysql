import React from "react";

const Table = ({ data }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded my-8">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Produto</th>
            <th className="py-3 px-6 text-left">Instrumento Financeiro</th>
            <th className="py-3 px-6 text-left">Prazo para pagamento</th>
            <th className="py-3 px-6 text-left">Descrição</th>
            <th className="py-3 px-6 text-left">Rentabilidade ao ano</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data &&
            data.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{item.name}</td>
                <td className="py-3 px-6 text-left">
                  {item.financial_instrument}
                </td>
                <td className="py-3 px-6 text-left">{item.payment_deadline}</td>
                <td className="py-3 px-6 text-left">{item.prod_description}</td>
                <td className="py-3 px-6 text-left">{item.yearly_return}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
