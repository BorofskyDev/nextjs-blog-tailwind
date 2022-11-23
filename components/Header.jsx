import React, { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Header = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-orange-700 py-4'>
        <div className='text-center md:float-left block'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-slate-100'>
              &#123; <span className='text-orange-700'>B</span>orofsky{' '}
              <span className='text-cyan-500'>D</span>ev &#125;
            </span>
          </Link>
          <a
            href='https://joelborofsky.com'
            target='_blank'
            rel='noreferrer'
            className='text-slate-100 capitalize md:ml-10 block md:inline md:mt-0 mt-5'
          >
            Visit main site
          </a>
        </div>

        <div className='hidden md:float-left md:contents'>
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className='md:float-right mt-2 align-middle text-slate-100 hover:text-orange-700 capitalize ml-4 font-semibold cursor-pointer'>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
