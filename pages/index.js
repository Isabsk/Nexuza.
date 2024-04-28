import Image from '@/components/Image'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 6

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return {
    props: {
      posts,
    },
  }
}

export default function Home({ posts, authauthorDetailsorDetails }) {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />{' '}
     
    <div className="bg-transparent">
      

      <div className="relative isolate h-[84vh] px-6 pt-2 lg:px-2">
        <div
          className="absolute inset-x-0 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className=" left-[calc(50%-11rem)] aspect-[1155/378] w-[36.125rem] -translate-x-1/4 rotate-[30deg] bg-gradient-to-tr from-[#54FFFF] to-[#397DFF] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-3xl py-6 sm:py-14 lg:py-14">
          <div className="sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-gray-100 ring-1 ring-gray-900/10 dark:ring-gray-300 hover:ring-gray-900/20 dark:hover:ring-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl transition duration-300">
            Expand your coding universe with
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-400 text-transparent">
                    &nbsp;Nexuza.
                  </span>{' '}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Nexuza is the ultimate creative blog site for developers,
                    offering a plethora of programming and coding content.
                    Explore the fascinating intersection of astronomy and coding
                    to take your skills to new heights.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-[10px] bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-xl font-semibold leading-6 text-gray-900 dark:text-white">
                Learn more <span aria-hidden="true" >→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/478] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
           <div
            className="relative left-[calc(10%+3rem)] aspect-[1155/478] w-[36.125rem] translate-x-1/2 bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-30 sm:left-[calc(20%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

      </div>
      <div>
      <iframe src="https://embeds.beehiiv.com/f20489b7-f7a3-4510-8b35-20d76fdfd67c" data-test-id="beehiiv-embed" width="100%" height="320" frameborder="0" scrolling="no" style="border-radius: 4px; border: 2px solid #e5e7eb; margin: 0; background-color: transparent;"></iframe>
      </div>
    </div>
  
      <div className="relative" >
        <div className="">
          

          <h1 className="mb-4 mt-2 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
            Latest Posts{' '}
          </h1>
          <div className="md:w-30 mb-4 mt-1 h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 md:h-2"></div>
          <section className="body-font overflow-hidden text-gray-600">
            <div className="container mx-auto px-5 py-24">
              <ul className="-m-12 flex flex-wrap">
                {' '}
                {!posts.length && 'No posts found.'}{' '}
                {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
                  const {
                    slug,
                    date,
                    title,
                    summary,
                    tags,
                    author,
                    avatar,
                    thumbnail,
                  } = frontMatter
                  return (
                    <li
                      key={slug}
                      className="flex flex-col items-start p-12 md:w-1/2"
                    >
                      <div className="relative mb-5 w-full rounded-2xl pt-[60%] drop-shadow-md">
                        <Image
                          src={thumbnail}
                          alt="profile"
                          objectFit="cover"
                          layout="fill"
                          className="left-0 top-0 h-full w-full rounded-2xl object-cover"
                        />
                      </div>
                      <div className="flex flex-wrap">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}{' '}
                      </div>
                      <Link href={`/blog/${slug}`} legacyBehavior>
                        <h2 className="title-font mb-4 mt-4 text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">
                          {title}
                        </h2>
                      </Link>
                      <p className="mb-8 font-light text-gray-600 dark:text-gray-200">
                        {summary}
                      </p>
                      <div className="mb-4 mt-auto flex w-full flex-wrap items-center border-b-2 border-gray-100 pb-4">
                        <a className="inline-flex items-center text-cyan-500 dark:text-cyan-300">
                          <Link href={`/blog/${slug}`} legacyBehavior>
                            Learn More -->
                          </Link>
                        </a>
                        <span className="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-[12px] leading-none text-gray-600 dark:text-gray-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-calendar-event-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                          </svg>
                        </span>
                        <span className="inline-flex items-center text-[12px] leading-none text-gray-600 dark:text-gray-200">
                          <time dateTime={date}> {formatDate(date)} </time>
                        </span>
                      </div>
                      <a className="inline-flex items-center ">
                        <Image
                          alt="blog"
                          src={avatar}
                          height="45"
                          width="45"
                          className="h-11 w-11 flex-shrink-0 rounded-full object-cover object-center"
                        />
                        <span className="flex flex-grow flex-col pl-4">
                          <span className="title-font text-md font-medium text-gray-900 dark:text-white">
                            {author}
                          </span>
                          <p className="text-sm text-gray-600 dark:text-gray-200">
                            Developer
                          </p>
                        </span>
                      </a>
                    </li>
                  )
                })}{' '}
              </ul>{' '}
            </div>
          </section>
        </div>{' '}
        <div className="w-full text-center">
          <a className="mb-5 ml-auto mr-auto rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-2.5 text-center text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800">
            <Link href="/blog" aria-label="all posts" legacyBehavior>
              All Posts -->
            </Link>
          </a>
        </div>
      </div>{' '}
    </>
  )
}
