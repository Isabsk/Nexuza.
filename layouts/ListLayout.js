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
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
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
                    key={slug}
                    className="flex flex-col items-start p-12 md:w-1/2"
                  >
                    <div className="relative mb-5 w-full pt-[60%]">
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
                    <Link href={`/blog/${slug}`}>
                      <h2 className="title-font mb-4 mt-4 text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">
                        {title}
                      </h2>
                    </Link>
                    <p className="mb-8 font-light text-gray-600 dark:text-gray-200">
                      {summary}
                    </p>
                    <div className="mb-4 mt-auto flex w-full flex-wrap items-center border-b-2 border-gray-100 pb-4">
                      <Link href={`/blog/${slug}`}>
                        <a className="inline-flex items-center text-cyan-500 dark:text-cyan-300">
                          Learn More -->
                        </a>
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
