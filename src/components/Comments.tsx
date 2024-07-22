import Image from 'next/image'

const Comments = () => {
  return (
    <div className=''>
      {/* WRITE */}
      <div className='flex items-center gap-4'>
        <Image
          src='https://images.pexels.com/photos/4114144/pexels-photo-4114144.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt=''
          width={32}
          height={32}
          className='w-8 h-8 rounded-full'
        />
        <div className='flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
          <input
            type='text'
            placeholder='Write a comment...'
            className='bg-transparent outline-none flex-1'
          />
          <Image
            src='/emoji.png'
            alt=''
            width={16}
            height={16}
            className='cursor-pointer'
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className=''>
        {/* COMMENT */}
        <div className='flex gap-4 justify-between mt-6'>
          {/* AVATAR */}
          <Image
            src='https://images.pexels.com/photos/4114144/pexels-photo-4114144.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            width={40}
            height={40}
            className='w-10 h-10 rounded-full'
          />
          <div className='flex flex-col gap-2 flex-1'>
            {/* DESCRIPTION */}
            <span className='font-medium'>Bernie Spencer</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque
              tempora libero ad commodi recusandae harum corporis quod aperiam,
              repellat dignissimos consectetur eaque voluptate dolorem eos illum
              aut laborum enim?
            </p>
            <div className='flex items-center gap-8 text-xs text-gray-500'>
              <div className='flex items-center gap-4'>
                <Image
                  src='/like.png'
                  alt=''
                  width={12}
                  height={12}
                  className='cursor-pointer'
                />
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>123 Likes</span>
              </div>
              <div className=''>Reply</div>
            </div>
          </div>
          <div className=''>
            {/* ICON */}
            <Image
              src='/more.png'
              alt=''
              width={16}
              height={16}
              className='cursor-pointer'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments
