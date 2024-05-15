import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title={`Page Not Found - ${siteMetadata.title}`} />
      <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
            404
          </h1>
        </div>
        <div className="max-w-md">
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
            Sorry we couldn't find this page.
          </p>
          <p className="mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link href="/" legacyBehavior>
            <a className="text-md group relative inline-block inline-flex items-center justify-center overflow-hidden rounded-lg p-4 px-6 py-3 font-semibold text-indigo-600 shadow-xl">
              <span className="ease absolute left-0 top-0 -ml-3 -mt-10 h-40 w-60 rounded-full bg-blue-500 blur-md transition-all duration-700"></span>
              <span className="ease absolute inset-0 h-full w-full transition duration-700 group-hover:rotate-180">
                <span className="absolute bottom-0 left-0 -ml-10 h-24 w-24 rounded-full bg-cyan-400 blur-xl"></span>
                <span className="absolute bottom-0 right-0 -mr-10 h-24 w-24 rounded-full bg-blue-600 blur-xl"></span>
              </span>
              <span className="relative text-white">Go To Homepage</span>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
