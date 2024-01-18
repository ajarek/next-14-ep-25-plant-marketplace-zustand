import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
type Props = {
  id: number
  src: string
  name: string
  price: number
}

const CardItems = ({ items }: { items: Props[] }) => {
  return (
    <>
      {items.map((item) => (
        <Link href={`/productId/${item.id}`} key={item.id}>
        <Card key={item.id}>
          <CardHeader className='flex justify-center items-center'>
            <CardTitle>
              <Image
                src={item.src}
                alt={item.name}
                width={200}
                height={200}
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className='text-xl flex justify-center items-center'>{item.name}</h2>
          </CardContent>
          <CardFooter className='justify-between'>
            <p>⭐⭐⭐⭐⭐</p>
            <p className='text-xl '>{item.price.toFixed(2)} $</p>
          </CardFooter>
        </Card>
        </Link>
      ))}
    </>
  )
}

export default CardItems
