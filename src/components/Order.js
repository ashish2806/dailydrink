import React from "react";
import "./Order.css";
function Order({ order, editHanlder, deleteHanlder }) {
  return (
    <tr>
    <td>{order.name}</td>
    <td>{order.price}</td>
    <td>{order.description}</td>
    <td> <button onClick={editHanlder}type="button">Edit</button></td>
    <td><button onClick={deleteHanlder} type="button">Delete</button></td>

</tr>
  );
}

export default Order;
