'use client'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/navigation'
import { useCartStore } from '@/store/useCartStore'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
const Payment = () => {
  const router = useRouter()
  let { products, removeFromCart } = useCartStore()
  const notifySuccess = () => {
    toast.success(`Thank  you for your payment ${allPayValue} $!`, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })
  }
  const handleSubmit = (e:any) => {
    e.preventDefault()
    
    notifySuccess();
    [...products].map((item:any)=>removeFromCart(item));
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }
const allPayValue=([...products]?.reduce((a: number,b: { price: number; count: number })=>a+b.price*b.count,0)).toFixed(2)
  return (
    <div className=' w-full min-h-[calc(100vh-80px)]  flex flex-col justify-center items-center  '>
      <ToastContainer />
      <form onSubmit={handleSubmit} className='w-[360px] max-sm:w-full bg-gray-200 p-12 max-sm:p-2 rounded-lg shadow-lg'>
        <div className='flex'>

     
        </div>
        <div className='w-100%'>
          <Label htmlFor='cardNumber'>Do zapłaty</Label>
          <Input
            type='text'
            value={allPayValue}
            required

          />
        </div>

        <div className='w-100%'>
          <Label htmlFor='cardNumber'>Numer Karty</Label>
          <Input
            type='text'
            placeholder='1234 5678 9012 3456'
            required
            pattern='^(?:\d{4} ){3}\d{4}$'
          />
        </div>
        <div className='w-100% '>
          <Label htmlFor='expiryDate'>Data Ważności</Label>
          <Input
            type='text'
            placeholder='MM/YYYY'
            required
            pattern='^(0[1-9]|1[0-2])\/20[2-9][4-9]$'
          />
        </div>

        <div className='w-100%'>
          <Label htmlFor='cvv'>CVV</Label>
          <Input
            type='text'
            placeholder='123'
            required
            pattern='^[0-9]{3}$'
          />
        </div>

        <div className='w-100% py-4 flex justify-end'>
          <Button
            type='submit'
          
          >
            I pay by card
          </Button>
        </div>
      </form>
     
    </div>
  )
}

export default Payment