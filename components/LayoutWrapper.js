import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import Image from 'next/image'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  const newLocal =
    'sm:text-md group relative ml-4 inline-block inline-flex items-center justify-center overflow-hidden rounded-lg p-4 px-6 py-3 text-[15px] font-semibold text-indigo-600 shadow-xl'
  return (
    <>
      <SectionContainer>
        <div
          data-aos="fade"
          className="flex h-screen flex-col justify-between overflow-visible bg-white dark:bg-gray-900 md:-mt-3 md:mt-0"
        >
          <header className="flex items-center justify-between md:py-4">
            <div className="mt-3">
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
            <div className="mt-3 flex items-center justify-center text-base leading-5">
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
            <div className="mt-3 flex items-center justify-center text-base leading-5">
              <ThemeSwitch />
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSc0iUMeIdI3Uiw8spRsz_JzmM1yiTHZhOfz4fmldj_fDgYYJw/viewform?usp=sf_link"
                className={newLocal}
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
          <section className="mt-20">
            <div className="container mx-auto">
              <div className="relative z-10 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 px-8 py-12 md:p-[70px]">
                <div className="-mx-4 flex flex-wrap items-center">
                  <div className="w-full px-4 lg:w-2/3">
                    <span className="mb-4 block text-base font-medium text-white">
                      Join Our Newsletter
                    </span>
                    <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[40px]/[48px] lg:mb-0">
                      <span className="xs:block">
                        Get exclusive tips and updates{' '}
                      </span>
                      <span>straight to your inbox!</span>
                    </h2>
                  </div>
                  <div className="w-full px-4 lg:w-1/3">
                    <div className="flex flex-wrap lg:justify-end">
                      <a
                        href="https://newsletter.nexuza.com/"
                        className="hover:bg-shadow-1 text-primary my-1 mr-4 inline-flex rounded-md bg-gradient-to-r from-blue-200 to-cyan-100 px-7 py-3 font-medium text-gray-900 transition"
                      >
                        SUBSCRIBE NOW!!!
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="absolute left-0 top-0 z-[-1]">
                    <svg
                      width="189"
                      height="162"
                      viewBox="0 0 189 162"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="16"
                        cy="-16.5"
                        rx="173"
                        ry="178.5"
                        transform="rotate(180 16 -16.5)"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="-157"
                          y1="-107.754"
                          x2="98.5011"
                          y2="-106.425"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" stop-opacity="0.07" />
                          <stop
                            offset="1"
                            stop-color="white"
                            stop-opacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute bottom-0 right-0 z-[-1]">
                    <svg
                      width="191"
                      height="208"
                      viewBox="0 0 191 208"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="173"
                        cy="178.5"
                        rx="173"
                        ry="178.5"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="-3.27832e-05"
                          y1="87.2457"
                          x2="255.501"
                          y2="88.5747"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" stop-opacity="0.07" />
                          <stop
                            offset="1"
                            stop-color="white"
                            stop-opacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
