import Link from 'next/link'

const ThanksEmail = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  return (
    <div className='w-full min-h-[calc(100vh-80px)] flex items-center justify-center px-24 py-12 max-lg:px-6'>
      <div className='w-80 h-72  p-4 flex flex-col gap-4'>
        <p>
          Thanks for your message <strong>{searchParams.name}!</strong>{' '}
        </p>
        <p>
          We will respond immediately to the following address:{' '}
          <strong>{searchParams.email}</strong>
        </p>
        <p>Have a nice day!</p>
        <Link
          className='text-center py-2 rounded-sm bg-primary text-primary-foreground hover:bg-primary/90'
          href='/'
        >
          Back to Home page
        </Link>
      </div>
    </div>
  )
}

export default ThanksEmail
