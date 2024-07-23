import Image from 'next/image'

const Ad = ({ size }: { size: 'sm' | 'md' | 'lg' }) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm lex flex-col gap-4'>
      {/* TOP */}
      <div className='flex items-center justify-between text-gray-500 font-medium'>
        <span>Sponsored Ads</span>
        <Image src='/more.png' alt='' width={16} height={16} />
      </div>
      {/* BOTTOM */}
      <div
        className={`flex flex-col mt-4 ${size === 'sm' ? 'gap-2' : 'gap-4'}`}>
        <div
          className={`relative w-full ${
            size === 'sm' ? 'h-24' : size === 'md' ? 'h-36' : 'h-48'
          }`}>
          <Image
            src='https://images.pexels.com/photos/27162858/pexels-photo-27162858/free-photo-of-a-view-of-the-ocean-from-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt=''
            fill
            className='rounded-lg object-cover'
          />
        </div>
        <div className='flex items-center gap-4'>
          <Image
            src='https://images.pexels.com/photos/20432032/pexels-photo-20432032/free-photo-of-yellow-flower-mimosa-flower-falling-mimosa-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            width={24}
            height={24}
            className='w-6 h-6 rounded-full object-cover'
          />
          <span className='text-blue-500 font-medium'>BigChef Lounge</span>
        </div>
        <p className={size === 'sm' ? 'text-xs' : 'text-sm'}>
          {size === 'sm'
            ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            : size === 'md'
            ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.'
            : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Nullam nec purus eget sapien.'}
        </p>
        <button className='bg-gray-200 text-gray-500 p-2 text-xs rounded-lg'>
          Learn more
        </button>
      </div>
    </div>
  )
}

export default Ad
