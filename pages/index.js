import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="relative divide-y divide-gray-200 dark:divide-gray-700">
        <div>

		 <div className="mx-auto max-w-6xl px-2 sm:px-2">
		  
         <div className="pt-10 pb-10 md:pt-10 md:pb-10">
		   
         <div className="pb-12 text-center md:pb-16">
		               <h1 
                       className="mb-4 text-5xl font-extrabold leading-tight tracking-tighter md:text-6xl" 
                       data-aos="zoom-y-out"
                       >
                       A {" "}
                       <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                       Creative
                       </span> {" "}
                       Blog Site for Developers {" "}
                       <span class="-mb-4 ml-0.5 h-2 w-2 rounded-full bg-cyan-400"></span></h1>
		               <div className="mx-auto max-w-3xl">
		                 <p className="text-xl text-gray-600 mb-8 dark:text-gray-100" data-aos="zoom-y-out" data-aos-delay="150">Here you can read numerous blog articles related to web development, which can guide you to code.</p>
		                 <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
<div>

		                   </div>
		            
		      
		         </div>
		    </div>
		 </div>
		   <div>
		
		 </div>
		               
		                       </div>
		               <h1 className="text-3xl mb-4 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-4xl">
            Latest Posts
          </h1>
		                     </div>
		                   </div>             
		
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
