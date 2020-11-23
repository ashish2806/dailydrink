import "./App.css";
import React, { useState } from "react";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";
function App() {
  const orderData = [
    {
      id: 1,
      name: "ashish",
      price: 50,
      description: "surat"
    }
  ];

  const [order, setOrder] = useState(orderData);
  const [updateData, setUpdateData] = useState([]);

  //add or update order

  const HandleOrder = submitData => {
    let arrData= [];
    if (!submitData.id) {
      let newData = {
        id: Math.floor(Math.random() * 999),  // id generated randomally
        name: submitData.name,
        price: submitData.price,
        description: submitData.description
      };
      arrData = [...order, newData];
    } else {
      let data = [...order];
      let index = data.findIndex(obj => obj.id === submitData.id);
      data[index] = submitData;
      arrData = data;
    }
    setOrder(arrData);
    setUpdateData([]);
  };

  // to populate selected order in form
  const editHanlder = id => {
    setUpdateData(order.find(order => order.id === id));
  };

  // to delete order
  const deleteHanlder = id => {
    setOrder(order.filter(order => order.id !== id));
  };
  return (
    <div className="App">
      <OrderForm HandleOrder={HandleOrder} updateData={updateData} />
      <OrderList
        order={order}
        editHanlder={editHanlder}
        deleteHanlder={deleteHanlder}
      />
    </div>
  );
}

export default App;
