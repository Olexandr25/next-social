import Image from 'next/image'
import Link from 'next/link'

const FriendRequests = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
      {/* TOP */}
      <div className='flex justify-between items-center font-medium'>
        <span className='text-gray-500'>Friend Requests</span>
        <Link href='/' className='text-sm text-blue-500'>
          See all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Image
            src='https://images.pexels.com/photos/27202476/pexels-photo-27202476/free-photo-of-a-woman-walking-her-dog-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt=''
            width={40}
            height={40}
            className='w-10 h-10 rounded-full object-cover'
          />
          <span className='font-semibold'>Wayne Burton</span>
        </div>
        <div className='flex gap-4 justify-end'>
          <Image
            src='/accept.png'
            alt=''
            width={20}
            height={20}
            className='cursor-pointer'
          />
          <Image
            src='/reject.png'
            alt=''
            width={20}
            height={20}
            className='cursor-pointer'
          />
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Image
            src='https://images.pexels.com/photos/27202476/pexels-photo-27202476/free-photo-of-a-woman-walking-her-dog-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt=''
            width={40}
            height={40}
            className='w-10 h-10 rounded-full object-cover'
          />
          <span className='font-semibold'>Wayne Burton</span>
        </div>
        <div className='flex gap-4 justify-end'>
          <Image
            src='/accept.png'
            alt=''
            width={20}
            height={20}
            className='cursor-pointer'
          />
          <Image
            src='/reject.png'
            alt=''
            width={20}
            height={20}
            className='cursor-pointer'
          />
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Image
            src='https://images.pexels.com/photos/27202476/pexels-photo-27202476/free-photo-of-a-woman-walking-her-dog-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt=''
            width={40}
            height={40}
            className='w-10 h-10 rounded-full object-cover'
          />
          <span className='font-semibold'>Wayne Burton</span>
        </div>
        <div className='flex gap-4 justify-end'>
          <Image
            src='/accept.png'
            alt=''
            width={20}
            height={20}
            className='cursor-pointer'
          />
          <Image
            src='/reject.png'
            alt=''
            width={20}
            height={20}
            className='cursor-pointer'
          />
        </div>
      </div>
    </div>
  )
}

export default FriendRequests
