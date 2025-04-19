import React from 'react'
import { PRODUCTS } from '../data'

const Summary = ({ total }) => {
    const sum = PRODUCTS.reduce((acc, val) => {
        const exist = total.find((i) => i.id === val.id)

        if (exist) {
            return acc += val.price * exist.qty
        }
        return acc
    }, 0)


    return (
        <div className='space-y-4'>
            <h1 className='font-semibold text-xl'>Cart Summary</h1>
            <div className='bg-white space-y-2 shadow-md rounded-lg p-4'>
                <div className='flex justify-between'>
                    <div>
                        <h1>Subtotal: </h1>
                    </div>
                    <div>
                        {sum}
                    </div>
                </div>
                <hr className='border' />
                <div className='bg-gray-100 flex justify-center items-center rounded-lg'>
                    <h1>Add 0 more to get free wireless mouse!</h1>

                </div>
            </div>
        </div>
    )
}

export default Summary