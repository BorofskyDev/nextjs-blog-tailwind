import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
import FeaturedPosts from '../sections/FeaturedPosts'
import { getPosts } from '../services'

export default function Home({ posts }) {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <FeaturedPosts />
      <Head>
        <title>BorofskyDev</title>
        <meta
          name='description'
          content='A frontend developer\s\ exploration of development. Tutorials, helpful advice, and sometimes just general ranting will be found here. Oh, and a lot of web design, CSS, and ThreeJS.'
        />
        <link rel='icon' href='images/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='images/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='images/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='images/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='images/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='images/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='images/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='images/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='images/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='images/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='images/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='images/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='images/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='images/favicon-16x16.png'
        />
        <link rel='manifest' href='images/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta
          name='msapplication-TileImage'
          content='images/ms-icon-144x144.png'
        />
        <meta name='theme-color' content='#ffffff' />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 '>
        <div className='lg:col-span-8 col-span-1 '>
          {posts.map((post, index) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sitcky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}
