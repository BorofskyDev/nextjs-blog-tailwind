import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-stone-900 bg-opacity-20'>
      <div className='absolute left-0 right-0 -top-14'>
        <Image
          alt={author.name}
          unoptimized
          height='80'
          width='80'
          className='align-middle rounded-full mx-auto mb-2'
          src={author.photo.url}
        />
      </div>
      <h3 className='text-stone-50 my-4 text-xl font-bold'>{author.name}</h3>
      <p className='text-stone-50 text-lg'>{author.bio}</p>
    </div>
  )
}

export default Author
