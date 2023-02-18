import Image from 'next/image'
import React from 'react'

const about = () => {
  return (
    <div className='absolute flex justify-between w-full h-screen my-40'>

        <div className=''>
            <p className='w-1/2'>helloo</p>

        </div>
        <div className='h-screen '>
            <Image src='/../public/try.jpg' className='w-1/2 h-screen'
            width={120}
            height={80}
            />
        </div>
      
    </div>
  )
}

export default about
