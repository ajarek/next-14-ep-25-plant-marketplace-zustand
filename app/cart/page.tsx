'use client'
import { useEffect } from 'react'
import { useCartStore } from '@/store/useCartStore'

import Image from 'next/image'
import Link from 'next/link'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const Cart = () => {
  const { products, removeFromCart } = useCartStore()

  useEffect(() => {
    useCartStore.persist.rehydrate()
  }, [])

  return (
    <div className='flex min-h-full flex-col  py-8 px-24 max-sm:px-2'>
      <h1 className='text-2xl max-sm:text-xl font-bold text-center'>Cart</h1>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='max-sm:hidden'>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className='text-center  w-[30px] m-0 p-0 '>
              Qty.
            </TableHead>
            <TableHead className='text-left'>Price $</TableHead>
            <TableHead className='text-left'>All </TableHead>
            <TableHead className='text-left w-[30px] m-0 p-0'>Del</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((item: any) => (
            <TableRow key={item.id}>
              <TableCell className='max-sm:hidden'>
                <Image
                  src={item.src}
                  alt='icon categories'
                  width={50}
                  height={50}
                  style={{
                    width: '50px',
                    height: '50px',
                    objectFit: 'cover',
                  }}
                  priority
                />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell className='text-center w-[30px] m-0 p-0 '>
                {item.count}
              </TableCell>
              <TableCell className='text-left'>
                {(+item.price).toFixed(2)}
              </TableCell>
              <TableCell className='text-left'>
                {(item.count * item.price).toFixed(2)}
              </TableCell>
              <TableCell className='text-left w-[30px] m-0 p-0'>
                <button
                  onClick={() => removeFromCart(item)}
                  className='text-2xl text-red-700 '
                >
                  🗑
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell
              colSpan={6}
              className=' text-right'
            >
              Total Price{' '}
              {[...products]
                .reduce(
                  (a: number, b: { price: number; count: number }) =>
                    a + b.price * b.count,
                  0
                )
                .toFixed(2)}{' '}
              $
            </TableCell>
          </TableRow>
          <TableRow >
            <TableCell  colSpan={6}   className='text-right '>
              
              <Link
                className=' uppercase  bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-12  rounded-sm'
                href={'/payment'}
              >
                Pay
              </Link>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

export default Cart