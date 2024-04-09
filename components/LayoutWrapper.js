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
        <div className="-mt-3 flex h-screen flex-col justify-between md:mt-0">
          <header className="flex items-center justify-between py-10 z-999999">
            <div>
              <Link
                href="/"
                aria-label={siteMetadata.headerTitle}
                legacyBehavior
              >
                <div className="flex items-center justify-between">
                  <div className="relative mb-1 mr-1.5 block dark:hidden">
                    <Image
                      width={165}
                      height={55}
                      src="/static/images/logo.svg"
                      alt="logo"
                    />
                  </div>
                  <div className="relative mb-1 mr-1.5 hidden dark:block">
                    <Image
                      width={165}
                      height={55}
                      src="/static/images/logo-dark.svg"
                      alt="logo"
                    />
                  </div>
                  <div className="h-6 text-2xl font-extrabold"></div>
                </div>
              </Link>
            </div>
            <div className="flex items-center text-base leading-5">
              <div className="hidden sm:block">
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
              <ThemeSwitch />
              <MobileNav />
            </div>
          </header>
          <main className="mb-auto">{children}</main>
          <NewsLetter lazy load={true} />
          <Footer />
        </div>
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
