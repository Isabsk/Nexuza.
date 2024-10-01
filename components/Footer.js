import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center rounded-tl-2xl rounded-tr-2xl bg-gradient-to-r from-blue-500 to-cyan-400 pt-5">
        <div className="mb-2 flex space-x-2 text-sm text-white dark:text-white">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">Nexuza.</Link>
        </div>
        <div className="mb-8 text-sm text-white dark:text-white">
          <Link
            href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
            legacyBehavior
          >
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
    </footer>
  )
}
