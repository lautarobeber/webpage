import React from 'react';
import { useOrder } from '../../hooks/useOrder';

const OrderTable = () => {
  const { orders } = useOrder()
  
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Usuario</th>
            <th className="px-4 py-2">Producto</th>
            <th className="px-4 py-2">Cantidad</th>
            <th className="px-4 py-2">Dirección</th>
            <th className="px-4 py-2">Cantidad</th>
            <th className="px-4 py-2">Enviado</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{order.user}</td>
              <td className="border px-4 py-2">{order.product}</td>
              <td className="border px-4 py-2">{order.amount}</td>
              <td className="border px-4 py-2">{order.adress}</td>
              <td className="border px-4 py-2">{order.quantity}</td>
              <td className="border px-4 py-2">{order.shipping ? 'Sí' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;