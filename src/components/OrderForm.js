import React, { useState, useEffect } from "react";
import  "./OrderForm.css";
function OrderForm({ HandleOrder, updateData }) {
  let [orderData, setorderData] = useState({
    name: "",
    price: "",
    description: ""
  });

  let [erros ,setErrors] = useState([]);

  let saveHandler = e => {
    e.preventDefault();
    HandleOrder(orderData);
  };
  useEffect(() => {
    setorderData({
      id: updateData.id ? updateData.id : null,
      name: updateData.name ? updateData.name : "",
      price: updateData.price ? updateData.price : "",
      description: updateData.description ? updateData.description : ""
    });
    return () => {};
  }, [updateData]);

  return (
    <div className="container">
      <fieldset>
        <form  method="post" onSubmit={saveHandler}>
          Username{" "}
          <input
            type="text"
            name="name"
            value={orderData.name}
            onChange={e => setorderData({ ...orderData, name: e.target.value })}
            required
          />
          <br />
          Price
          <input
            type="text"
            name="price"
            value={orderData.price}
            required
            onChange={e =>
              setorderData({ ...orderData, price: e.target.value })
            }
          />
          <br />
          Description
          <br />
          <textarea
            className="form__textarea"
            name="description"
            cols="20"
            rows="5"
            value={orderData.description}
            required
            onChange={e =>
              setorderData({ ...orderData, description: e.target.value })
            }
          ></textarea>
          <br />
          <input type="submit" value={updateData.id ? 'Update' : 'Create'} />
        </form>
      </fieldset>
      <hr />
    </div>
  );
}

export default OrderForm;
