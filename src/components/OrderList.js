import React from "react";
import Order from "./Order";
import "./OrderList.css";

function OrderList({ order, editHanlder, deleteHanlder }) {
  let renderData = <span className="container__empty">No Orders Found...</span>;
  if (order.length > 0) {
    renderData = (
      <div>
        <h4>ORDER LIST</h4>
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Note</th>
            <th colSpan="2">Actions</th>
          </tr>
          {order.map(item => (
            <Order
              order={item}
              key={item.id}
              deleteHanlder={() => deleteHanlder(item.id)}
              editHanlder={() => editHanlder(item.id)}
            />
          ))}
        </table>
      </div>
    );
  }
  return <div className="container">{renderData}</div>;
}

export default OrderList;
