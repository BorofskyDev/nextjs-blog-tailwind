import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { graphCMSImageLoader } from '../utils'
import { getRecentPosts, getSimilarPosts } from '../services'
import Image from 'next/image'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      )
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result))
    }
  }, [slug, categories])

  return (
    <div className='bg-slate-100 shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-87 font-semibold border-b pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className='flex items-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <Image
              loader={graphCMSImageLoader}
              alt={post.title}
              height="60"
              width='60'
              unoptimized
              className='align-middle rounded-full'
              src={post.featuredImage.url}
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-slate-500 font-xs'>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link
              href={`/post/${post.slug}`}
              key={post.title}
              className='text-md hover:text-orange-700 transition-colors duration-300'
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
