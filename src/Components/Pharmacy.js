import React,{useState} from 'react'
import products from '../Data/Medicines'
import Item from './Item'
import './Pharmacy.css'
import cart from '../Asset/cart_logo.jpg'
import { Link } from 'react-router-dom'
import Cart from './Cart';

const Pharmacy = () => {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    
    console.log(`${item.name} added to cart.`);
  };
  console.log(cartItems);
  

    <Cart cartItems={cartItems}/>
  
  return (
    <> 
      <div className='head'>
        <h1 className='text-4xl text-red-400 text-center'>
        <strong>Pharmacy</strong>
          </h1>
         
          
          <img src={cart} alt="Cart" className='logo'  />
          
         
      
      </div> 
    <div className='product'>
    {products.map((item,i)=>{
      return <Item 
      key={i} 
      id={item.id} 
      name={item.name} 
      image={item.image} 
      price={item.price}
      addToCart={addToCart}
      />
    })}
  </div>
  <Cart cartItems={cartItems} />
    </>
   
  )
}

export default Pharmacy
