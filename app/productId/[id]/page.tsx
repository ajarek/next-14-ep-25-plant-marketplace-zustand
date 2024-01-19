import React from 'react'
import data from '@/public/data.json'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Price from '@/components/Price'

const ProductId = ({ params }: { params: { id: string } }) => {
  const id = Number(params.id)
  if (isNaN(id)) {
    return notFound()
  }
  const itemId = data.find((item) => item.id === Number(id))
  if (!itemId) {
    return notFound()
  }
  return (
    <main className='min-h-[calc(100vh-80px)]  grid grid-cols-2 max-lg:grid-cols-1 gap-4 px-24 py-12 max-lg:px-6'>
      <div className=' flex items-center justify-center '>
        <Image
          src={itemId.src}
          alt={itemId.name}
          width={360}
          height={360}
          style={{
            width: '360px',
            height: '360px',
            objectFit: 'cover',
          }}
        />
      </div>
      <div className='flex flex-col items-start justify-between p-4 '>
        <div className='text-2xl'>{itemId.name}</div>
        <div>{itemId.description}</div>
        
        <Price product={itemId} />
        
      </div>
    </main>
  )
}

export default ProductId
