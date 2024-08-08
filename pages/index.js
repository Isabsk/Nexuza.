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
        <div className="relative isolate h-[86vh] px-6 pt-2 lg:px-6">
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
          <div className="mx-auto max-w-3xl py-6 sm:py-10 lg:py-14">
            <div className="sm:mb-8 sm:flex sm:justify-center">
              <div
                data-aos="fade"
                data-aos-delay="1200"
                data-aos-duration="800"
                className="relative hidden rounded-full py-1.5 pl-1.5 pr-3 leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-gray-100 dark:ring-gray-500 dark:hover:ring-gray-300 sm:block md:text-sm"
              >
                <span className="animate-text mr-3 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 px-4 py-1.5 text-xs font-bold text-white">
                  New
                </span>{' '}
                Elevate Your Tech Skills With Nexuza Tuts.{' '}
                <a
                  target="_blank"
                  href="https://tuts.nexuza.com/"
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text font-semibold text-transparent"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Visit Now -->
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1
                data-aos="fade"
                data-aos-delay="300"
                data-aos-duration="1200"
                className="text-4xl font-extrabold tracking-tight text-gray-900 transition duration-300 dark:text-white sm:text-6xl lg:text-7xl"
              >
                Expand your coding universe with
                <span
                  data-aos="slide-up"
                  className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
                >
                  &nbsp;Nexuza.
                </span>{' '}
              </h1>
              <p
                className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300"
                data-aos="fade"
                data-aos-delay="1200"
                data-aos-duration="800"
              >
                Nexuza is the ultimate creative blog site for developers,
                offering a plethora of programming and coding content. Explore
                the fascinating intersection of astronomy and coding to take
                your skills to new heights.
              </p>
              <div
                className="mt-10 flex items-center justify-center gap-x-6"
                data-aos="fade"
                data-aos-delay="1200"
                data-aos-duration="800"
              >
                <a
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc0iUMeIdI3Uiw8spRsz_JzmM1yiTHZhOfz4fmldj_fDgYYJw/viewform?usp=sf_link"
                  className="group relative inline-block inline-flex items-center justify-center overflow-hidden rounded-lg p-4 px-6 py-3 text-[15px] font-semibold text-indigo-600 shadow-xl sm:text-xl"
                >
                  <span className="ease absolute left-0 top-0 -ml-3 -mt-10 h-40 w-60 rounded-full bg-blue-500 blur-md transition-all duration-700"></span>
                  <span className="ease absolute inset-0 h-full w-full transition duration-700 group-hover:rotate-180">
                    <span className="absolute bottom-0 left-0 -ml-10 h-24 w-24 rounded-full bg-cyan-400 blur-xl"></span>
                    <span className="absolute bottom-0 right-0 -mr-10 h-24 w-24 rounded-full bg-blue-600 blur-xl"></span>
                  </span>
                  <span className="relative text-white">Write For Us</span>
                </a>
                <a
                  href="#"
                  className="text-[15px] font-semibold leading-6 text-gray-900 dark:text-white sm:text-xl"
                >
                  <Link href="/blog" aria-label="all posts" legacyBehavior>
                    All Posts -->
                  </Link>
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
        <div></div>
      </div>
      <div className="relative">
        <div className="">
          <h1
            data-aos="fade"
            className="mb-4 mt-2 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl"
          >
            Latest Posts{' '}
          </h1>
          <div
            data-aos="fade"
            className="md:w-30 mb-4 mt-1 h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 md:h-2"
          ></div>
          <section className="body-font overflow-hidden text-gray-600">
            <div className="container mx-auto px-5 py-10 sm:py-24">
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
                      data-aos="fade-up"
                      key={slug}
                      className="flex flex-col items-start px-12 py-8 sm:py-12 md:w-1/2"
                    >
                      <div className="relative mb-5 w-full rounded-2xl bg-gray-200 pt-[60%] drop-shadow-md">
                        <Image
                          src={thumbnail}
                          alt="profile"
                          objectFit="cover"
                          layout="fill"
                          className="left-0 top-0 h-full w-full rounded-t-2xl object-cover"
                        />
                      </div>
                      <div className="flex flex-wrap">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}{' '}
                      </div>
                      <Link href={`/blog/${slug}`} legacyBehavior>
                        <h2 className="title-font mb-4 mt-6 text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">
                          {title}
                        </h2>
                      </Link>
                      <p className="mb-2 font-light text-gray-600 dark:text-gray-200">
                        {summary}
                      </p>
                      <div className=" mt-auto flex w-full flex-wrap items-center border-gray-100">
                        <Link href={`/blog/${slug}`} legacyBehavior>
                          <span className="group mt-6 inline-flex h-9 items-center whitespace-nowrap rounded-full bg-slate-200 px-4 text-sm font-semibold text-slate-700 hover:bg-slate-300 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 dark:hover:text-slate-100">
                            Learn More
                            <svg
                              className="ml-3 overflow-visible text-slate-500 group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-slate-200"
                              width="3"
                              height="6"
                              viewBox="0 0 3 6"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M0 0L3 3L0 6"></path>
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </li>
                  )
                })}{' '}
              </ul>{' '}
            </div>
          </section>
        </div>{' '}
        <div className="w-full text-center">
          <a className="group relative inline-block inline-flex items-center justify-center overflow-hidden rounded-lg p-4 px-6 py-3 text-xl font-semibold text-indigo-600 shadow-xl">
            <span className="ease absolute left-0 top-0 -ml-3 -mt-10 h-40 w-60 rounded-full bg-blue-500 blur-md transition-all duration-700"></span>
            <span className="ease absolute inset-0 h-full w-full transition duration-700 group-hover:rotate-180">
              <span className="absolute bottom-0 left-0 -ml-10 h-24 w-24 rounded-full bg-cyan-400 blur-xl"></span>
              <span className="absolute bottom-0 right-0 -mr-10 h-24 w-24 rounded-full bg-blue-600 blur-xl"></span>
            </span>
            <span className="relative text-white">
              <Link href="/blog" aria-label="all posts" legacyBehavior>
                All Posts -->
              </Link>
            </span>
          </a>
        </div>
      </div>{' '}
    </>
  )
}
