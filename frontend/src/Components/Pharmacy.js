import React from 'react'
import products from '../Data/Medicines'
import Item from './Item'
import './Pharmacy.css'

const Pharmacy = () => {
  return (
    <div className='product'>
      {products.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
      })}
    </div>
  )
}

export default Pharmacy
