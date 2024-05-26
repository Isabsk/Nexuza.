import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import Image from 'next/image'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import NewsLetter from './NewsLetter'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <SectionContainer>
        <div
          data-aos="fade"
          className="-mt-3 flex h-screen flex-col justify-between overflow-visible md:mt-0"
        >
          <header className="z-999999 flex items-center justify-between py-5">
            <div>
              <Link
                href="/"
                aria-label={siteMetadata.headerTitle}
                legacyBehavior
              >
                <div className="flex items-center justify-between">
                  <div className="relative mb-1 mr-1.5">
                    <Image
                      width={60}
                      height={60}
                      src="/static/favicons/favicon.png"
                      alt="logo"
                    />
                  </div>

                  <div className="h-6 text-2xl font-extrabold"></div>
                </div>
              </Link>
            </div>
            <div></div>
            <div className="flex items-center justify-center text-base leading-5">
              <div className="ml-0 hidden sm:block ">
                {headerNavLinks.map((link) => (
                  <a
                    key={link.title}
                    className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                  >
                    <Link key={link.title} href={link.href} legacyBehavior>
                      {link.title}
                    </Link>
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center text-base leading-5">
              <ThemeSwitch />
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSc0iUMeIdI3Uiw8spRsz_JzmM1yiTHZhOfz4fmldj_fDgYYJw/viewform?usp=sf_link"
                className="text-md group relative ml-4 inline-block inline-flex items-center justify-center overflow-hidden rounded-lg p-4 px-6 py-3 font-semibold text-indigo-600 shadow-xl"
              >
                <span className="ease absolute left-0 top-0 -ml-3 -mt-10 h-40 w-60 rounded-full bg-blue-500 blur-md transition-all duration-700"></span>
                <span className="ease absolute inset-0 h-full w-full transition duration-700 group-hover:rotate-180">
                  <span className="absolute bottom-0 left-0 -ml-10 h-24 w-24 rounded-full bg-cyan-400 blur-xl"></span>
                  <span className="absolute bottom-0 right-0 -mr-10 h-24 w-24 rounded-full bg-blue-600 blur-xl"></span>
                </span>
                <span className="relative text-white">Write For Us --></span>
              </a>
              <MobileNav />
            </div>
          </header>
          <main className="mb-auto">{children}</main>
          <NewsLetter />
          <Footer />
        </div>
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
