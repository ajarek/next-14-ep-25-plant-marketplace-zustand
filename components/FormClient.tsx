'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const FormClient = ({ create }: { create: any }) => {
  return (
    <form
      action={create}
      className='   flex flex-col justify-evenly gap-4'
    >
      <Label htmlFor='image'>Email Address</Label>
      <Input
        type='text'
        name='image'
        required
        placeholder='john.doe@example.com'
      />
      <Label htmlFor='name'> Name</Label>
      <Input
        type='text'
        name='name'
        required
        placeholder='John Doe'
      />

      <Label htmlFor='rating'>Message Content</Label>
      <Textarea
        name='message'
        required
        placeholder='Lorem....'
        rows={8}
        cols={50}
      />
      <Button
        className='bg-primary text-primary-foreground hover:bg-primary/90'
        type='submit'
      >
        Submit
      </Button>
    </form>
  )
}

export default FormClient
