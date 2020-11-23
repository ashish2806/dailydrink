import React from 'react'

function Order({order,editHanlder,deleteHanlder}) {
    
    return (
        <div style={{display:'flex',alignItems: "center"}}>
          <ul>
              <li>{order.name}</li>
              <li>{order.price}</li>
              <li>{order.description}</li>
          </ul>
          <div style={{margin:20    }}>
              <button onClick={editHanlder}type="button">Edit</button>
              <button onClick={deleteHanlder} style={{marginLeft:10}} type="button">Delete</button>
          </div>
        </div>
    )
}

export default Order
