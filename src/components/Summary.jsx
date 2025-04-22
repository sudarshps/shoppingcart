import React, { useEffect } from 'react'
import { PRODUCTS, FREE_GIFT, THRESHOLD } from '../data'

const Summary = ({ total,applyGift }) => {
    const sum = PRODUCTS.reduce((acc, val) => {
        const exist = total.find((i) => i.id === val.id)

        if (exist) {
            return acc += val.price * exist.qty
        }
        return acc
    }, 0)

    useEffect(()=>{        
        if(sum>=THRESHOLD){            
            applyGift(FREE_GIFT)
        }else{
            applyGift(undefined)
        }
    },[sum])

    const progress = (sum / THRESHOLD) * 100

    return (
        <div className='space-y-4'>
            <h1 className='font-semibold text-xl'>Cart Summary</h1>
            <div className='bg-white space-y-2 shadow-md rounded-lg p-4'>
                <div className='flex justify-between'>
                    <div>
                        <h1>Subtotal: </h1>
                    </div>
                    <div>
                    ₹{sum}
                    </div>
                </div>
                <hr className='border' />
                <div className='bg-blue-50 h-16 flex flex-col px-4 justify-center rounded-lg'>
                    {sum >= THRESHOLD ? (
                        <>
                            <h1>You got a free mouse!</h1>
                        </>
                    ) : (
                        <>
                            <h1>Add ₹{THRESHOLD - sum} more to get free wireless mouse!</h1>
                            <div className='w-full bg-gray-200 h-4 rounded-xl'>
                                <div className='bg-blue-500 h-full rounded-xl' style={{ width: `${progress}%` }}>

                                </div>
                            </div>
                        </>

                    )}

                </div>
            </div>
        </div>
    )
}

export default Summary