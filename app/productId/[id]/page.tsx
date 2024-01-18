import React from 'react'
import data from '@/public/data.json'
import { notFound } from 'next/navigation'

const ProductId = ({ params }: { params: { id: string } }) => {
  const id = Number(params.id)
  if (isNaN(id)) {
    return notFound()
  }
  const item = data.find((item) => item.id === id)
  if (!item) {
    return notFound()
  }
  return (
    <main className='flex min-h-screen flex-col items-center justify-start px-24 py-12'>
      <div>{item.name}</div>
    </main>
  )
}

export default ProductId
