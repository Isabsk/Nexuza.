import Link from '@/components/Link'

import Image from 'next/image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'

export default function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent =
      frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue
      ? initialDisplayPosts
      : filteredBlogPosts

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 px-10 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <section className="body-font overflow-hidden text-gray-600">
          <div className="container mx-auto px-5 py-24">
            <ul className="-m-12 flex flex-wrap">
              {!filteredBlogPosts.length && 'No posts found.'}
              {displayPosts.map((frontMatter) => {
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
                    className="flex flex-col items-start p-12 md:w-1/2"
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
                      <span className="group mt-6 inline-flex h-9 items-center whitespace-nowrap rounded-full bg-slate-200 px-4 text-sm font-semibold text-slate-700 hover:bg-slate-300 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 dark:hover:text-slate-100">
                        <Link href={`/blog/${slug}`} legacyBehavior>
                          Learn More
                        </Link>
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
                    </div>
                  </li>
                )
              })}
            </ul>{' '}
          </div>
        </section>
      </div>{' '}
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      )}
    </>
  )
}
