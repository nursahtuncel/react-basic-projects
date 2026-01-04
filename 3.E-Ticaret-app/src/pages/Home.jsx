import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../contexs/ProductContext'
import Cart from '../componens/Cart'

const Home = ({}) => {
  const {loading,error,products} =   useContext(ProductContext)
  console.log(loading ,error,products)
      {
    if(loading) return <h2>Yükleniyor..</h2>


    }
    if(error) return <h3>{error}</h3>

return (
  <div className="product-container">
    {products.map((item) => (
     <Cart key={item.id} item={item}/>
    ))}
  </div>
);

}

export default Home
