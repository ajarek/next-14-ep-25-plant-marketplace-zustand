import Image from 'next/image'
import data from '@/public/data.json'
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start p-24'>
      <h1 className='mb-4'>The Plant Marketplace</h1>
      <div className='w-full grid grid-cols-3'>
        {data.map((item) => (
          <div key={item.id}>
            <Image
              src={item.src}
              alt={item.name}
              width={200}
              height={200}
              style={{ objectFit: 'cover' }}
            />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </main>
  )
}
