import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <>
      <span className="me-2 mr-2 mt-2 rounded-full border-2 border-sky-500 bg-gradient-to-r from-sky-100 to-cyan-100 px-4 py-1 text-[13px] font-medium uppercase text-sky-600 dark:border-sky-200 dark:from-blue-900 dark:to-blue-900 dark:text-sky-200 ">
        <Link href={`/tags/${kebabCase(text)}`} legacyBehavior>
          {text.split(' ').join('-')}
        </Link>
      </span>
    </>
  )
}

export default Tag
