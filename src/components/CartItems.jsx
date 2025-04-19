import React from 'react'
import { PRODUCTS } from '../data'

const CartItems = ({ items,handleQty }) => {

    
    return (
        <div className='space-y-4'>
            <h1 className='font-semibold text-xl'>Cart Items</h1>
            <div className='bg-white space-y-2 shadow-md rounded-lg p-4'>
                {!items.length ? (
                    <div className='flex items-center justify-center'>
                        Cart is Empty!
                    </div>
                ) : (
                    <div>
                        {PRODUCTS.map((product) => {
                            const exist = items.find((i)=>i.id === product.id)
                            if (exist) {
                                return (
                                    <div key={product.id} className='bg-white flex justify-between space-y-2 shadow-md rounded-lg p-4'>
                                        <div>
                                           <p>{product.name}</p> 
                                           <p>{product.price} x {exist.qty} = {product.price * exist.qty}</p> 
                                            
                                        </div>
                                        <div className='flex'>
                                            <button onClick={()=>handleQty('inc',product.id)} className='bg-green-500 hover:cursor-pointer h-6 p-1 flex items-center text-white'>+</button>
                                            <p>{exist.qty}</p>
                                            <button onClick={()=>handleQty('dec',product.id)} className='bg-red-500 hover:cursor-pointer h-6 p-1 flex items-center text-white'>-</button>
                                        </div>
                                    </div>
                                )
                            }
                        }
                        )}
                    </div>
                )}
            </div>

        </div>
    )

}

export default CartItems