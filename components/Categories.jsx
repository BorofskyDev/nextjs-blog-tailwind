import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className='bg-slate-100 shadow-lg rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-xl mb-87 font-semibold border-b border-orange-700 pb-4'>Categories</h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='cursor-pointer capitalize text-stone-900 mt-4 hover:text-orange-700 hover:transition-all duration-200 ease-in-out block pb-3 mb-3'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
