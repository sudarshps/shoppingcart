import React from 'react'
import { PRODUCTS } from '../data'

const Products = ({addItems}) => {
    return (
        <div className='space-y-4'>
            <h1 className='font-semibold text-xl'>Products</h1>
            <div className='grid grid-cols-4'>
                {PRODUCTS.map((product) => (
                    <div key={product.id} className='bg-white shadow-md w-64 rounded-lg p-4'>
                        <h1>{product.name}</h1>
                        <h1>{product.price}</h1>
                        <button onClick={()=>addItems(product.id)} className='bg-blue-500 text-white rounded-lg p-2'>Add to cart</button>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Products