import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <>
    <a className="mr-2 mt-2 inline-block rounded bg-gray-100 bg-gradient-to-br from-blue-500 to-cyan-400 px-3 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white">
      <Link
        href={`/tags/${kebabCase(text)}`}
        legacyBehavior
      >
        {text.split(' ').join('-')}
      </Link></a>
    </>
  )
}

export default Tag
