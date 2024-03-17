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
      <div className="relative">
        <div className="">
          <div className="mx-auto max-w-6xl bg-transparent bg-cover bg-center px-2 sm:bg-[url('/static/images/hero-bg-0.svg')] sm:px-2">
            <div className="pb-10 pt-10 md:pb-5 md:pt-5 ">
              <div className="pb-12 text-center md:pb-16">
                <h1
                  className="mb-4 text-[45px] font-extrabold leading-tight tracking-tighter md:text-5xl"
                  data-aos="zoom-y-out"
                >
                  Expand your coding universe with
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    &nbsp;Nexuza.
                  </span>{' '}
                  <span className="-mb-4 ml-0.5 h-2 w-2 rounded-full bg-cyan-400">
                    {' '}
                  </span>{' '}
                </h1>{' '}
                <div className="mx-auto max-w-3xl">
                  <p
                    className="mb-8 text-[16px] font-light text-gray-600 dark:text-gray-100"
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                  >
                    {' '}
                    Nexuza is the ultimate creative blog site for developers,
                    offering a plethora of programming and coding content.
                    Explore the fascinating intersection of astronomy and coding
                    to take your skills to new heights.{' '}
                  </p>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>

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
                        <Link href={`/blog/${slug}`} className="inline-flex items-center text-cyan-500 dark:text-cyan-300" legacyBehavior>
                          
                            Learn More -->
                          
                        </Link>
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
          <Link
            href="/blog"
            className="mb-5 ml-auto mr-auto rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-2.5 text-center text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
            aria-label="all posts" legacyBehavior
          >
            All Posts -->
          </Link>
        </div>
      </div>{' '}
    </>
  )
}
