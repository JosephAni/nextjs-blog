import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link'
import Date from '../components/date'
=======
>>>>>>> 88556fb (packages)
=======
import Link from 'next/link'
import Date from '../components/date'
>>>>>>> 9524330 (files)

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
<<<<<<< HEAD
<<<<<<< HEAD
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
=======
              {title}
              <br />
              {id}
              <br />
              {date}
>>>>>>> 88556fb (packages)
=======
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
>>>>>>> 9524330 (files)
            </li>
          ))}
        </ul>
      </section>
    </Layout>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 88556fb (packages)
}
