import Image from 'next/image'
import data from '@/public/data.json'
import CardItems from '@/components/CardItems'
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start px-24 py-12 max-lg:px-6'>
      <h1 className='mb-4 text-2xl'>The Plant Marketplace</h1>
      <div className='w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4'>
        <CardItems items={data} />
      </div>
    </main>
  )
}
