import React from "react";
import Order from "./Order";

function OrderList({ order, editHanlder, deleteHanlder }) {
  return (
    <div>
      {order.map(item => (
        <Order
          order={item}
          key={item.id}
          deleteHanlder={() => deleteHanlder(item.id)}
          editHanlder={() => editHanlder(item.id)}
        />
      ))}
    </div>
  );
}

export default OrderList;
