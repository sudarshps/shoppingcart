import React, { useEffect, useState } from 'react'
import Products from './components/Products'
import Summary from './components/Summary'
import CartItems from './components/CartItems'

const App = () => {
  const [addedItems,setAddedItems] = useState([])
  const [addedGift,setAddedGift] = useState()
  const quantity = (method,id) => {
    setAddedItems(prev=>{
      return prev.map((it)=>{
        if(it.id === id){
          if(method === 'inc'){
            return{...it,qty:it.qty+1}
          }else{            
            return{...it,qty:it.qty-1}
          }
        }
        return it
      }).filter((it)=>it.qty>0)
      
    })
    
  }
  const handleItems = (id) => {
      setAddedItems(prev=>{ 
        const exist = prev.find((item)=>item.id === id)       
        if(!exist){
          return [...prev,{id,qty:1}]
        }
        return prev
      })
      
  }  

  const handleGift = (gift) => {
    setAddedGift(gift)
  }
  
  return (
    <div className='min-h-screen bg-gray-100 p-6 space-y-4'>
        <h1 className='font-bold text-2xl text-center'>Shopping Cart</h1>
        <Products addItems={handleItems}/>
        <Summary total={addedItems} applyGift={handleGift}/>
        <CartItems items={addedItems} handleQty={quantity} gift={addedGift}/>
    </div>
  )
}

export default App