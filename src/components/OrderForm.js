import React, { useState, useEffect } from "react";
import "./OrderForm.css";
function OrderForm({ HandleOrder, updateData }) {
  let [orderData, setorderData] = useState({
    name: "",
    price: "",
    description: ""
  });

  let [erros, setErrors] = useState([]);

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
      <h4>ORDER HERE...</h4>
      <fieldset>
        <form method="post" onSubmit={saveHandler}>
          <div className="order-form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              name="name"
              value={orderData.name}
              onChange={e =>
                setorderData({ ...orderData, name: e.target.value })
              }
              required
            />
          </div>

          <div className="order-form-group">
            <label for="name">Price:</label>
            <input
              type="text"
              name="price"
              value={orderData.price}
              required
              onChange={e =>
                setorderData({ ...orderData, price: e.target.value })
              }
            />
          </div>
          <div className="order-form-group">
            <label for="name">Description:</label>

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
          </div>
          <div className="order-form-group">
            <input type="submit" value={updateData.id ? "Update" : "Create"} />
          </div>
        </form>
      </fieldset>
      <hr />
    </div>
  );
}

export default OrderForm;
