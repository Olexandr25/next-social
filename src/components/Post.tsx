import Image from 'next/image'
import Comments from './Comments'

const Post = () => {
  return (
    <div className='flex flex-col gap-4'>
      {/* USER */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Image
            src='https://images.pexels.com/photos/18749534/pexels-photo-18749534/free-photo-of-man-in-tank-top-throwing-basketball-ball.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt=''
            width={40}
            height={40}
            className='w-10 h-10 object-cover rounded-full'
          />
          <span className='font-medium'>John Doe</span>
        </div>
        <Image src='/more.png' alt='' width={16} height={16} />
      </div>
      {/* DESC */}
      <div className='flex flex-col gap-4'>
        <div className='w-full min-h-96 relative '>
          <Image
            src='https://images.pexels.com/photos/5945907/pexels-photo-5945907.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            fill
            className='object-cover rounded-md'
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          magni odit labore commodi reprehenderit quisquam sit recusandae nemo,
          voluptate harum quidem ab quaerat? Praesentium, animi suscipit illo
          veniam ipsa mollitia.
        </p>
      </div>
      {/* INTERACTION */}
      <div className='flex items-center justify-between text-sm my-4'>
        <div className='flex gap-8'>
          <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
            <Image
              src='/like.png'
              alt=''
              width={16}
              height={16}
              className='cursor-pointer'
            />
            <span className='text-gray-300'>|</span>
            <span className='text-gray-500'>
              123<span className='hidden md:inline'>Likes</span>
            </span>
          </div>
          <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
            <Image
              src='/comment.png'
              alt=''
              width={16}
              height={16}
              className='cursor-pointer'
            />
            <span className='text-gray-300'>|</span>
            <span className='text-gray-500'>
              123<span className='hidden md:inline'>Comments</span>
            </span>
          </div>
        </div>
        <div className=''>
          <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
            <Image
              src='/share.png'
              alt=''
              width={16}
              height={16}
              className='cursor-pointer'
            />
            <span className='text-gray-300'>|</span>
            <span className='text-gray-500'>
              123<span className='hidden md:inline'>Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  )
}

export default Post
