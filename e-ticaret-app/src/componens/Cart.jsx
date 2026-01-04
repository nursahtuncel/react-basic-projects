import React from 'react'
import "./cart.css"

const Cart = ({item}) => {

   
  return (
    <div className="product-card" key={item.id}>
        <img src={item.thumbnail} alt={item.title} />
        <div className="card-body">
          <h3>{item.title}</h3> <span>{"⭐".repeat(item.rating)}</span>
          <p>{item.description.slice(0, 60)}...</p>
         
          <span className="price">${item.price}</span>

          <button>Sepete Ekle</button>
        </div>
      </div>
  )
}

export default Cart
