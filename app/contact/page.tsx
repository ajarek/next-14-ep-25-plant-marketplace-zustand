import FormClient from '@/components/FormClient'
import { redirect } from 'next/navigation'

export default function Contact() {
  async function create(formData: FormData) {
    'use server'
    const messageUser = {
      name: formData.get('name') as string,
      email: formData.get('image') as string,
      message: formData.get('message') as string,
    }
    if (!messageUser.name || !messageUser.email || !messageUser.message) {
      return { message: 'Form data is not valid' }
    }
    try {
      console.log(messageUser)
    } catch (error) {
      console.log(error)
    } finally {
      redirect(`/${messageUser.name}`)
    }
  }

  return (
    <div className='w-full min-h-[calc(100vh-80px)] px-24 py-4 max-sm:px-4 '>
      <h2 className='text-3xl text-center my-2'> Contact Us</h2>

      <FormClient create={create} />
    </div>
  )
}
