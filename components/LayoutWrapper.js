import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import Image from 'next/image'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <SectionContainer>
        <div className="-mt-3 flex h-screen flex-col justify-between md:mt-0">
          <header className="flex items-center justify-between py-10">
            <div>
              <Link href="/" aria-label={siteMetadata.headerTitle}>
                <div className="flex items-center justify-between">
                  <div className="-mb-4 mr-1.5">
                    <Image
                      width={35}
                      height={35}
                      src="/static/images/logo.png"
                      alt="logo"
                    />
                  </div>
                  <div className="h-6 text-2xl font-extrabold">Imagi</div>
                  <span className="-mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-2xl font-extrabold text-transparent">
                    Web.
                  </span>
                </div>
              </Link>
            </div>
            <div className="flex items-center text-base leading-5">
              <div className="hidden sm:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <ThemeSwitch />
              <MobileNav />
            </div>
          </header>
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
