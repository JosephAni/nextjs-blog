import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
<<<<<<< HEAD
<<<<<<< HEAD
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
=======
>>>>>>> 88556fb (packages)
=======
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
>>>>>>> 9524330 (files)

export default function Post({ postData }) {
  return (
    <Layout>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9524330 (files)
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
<<<<<<< HEAD
=======
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
>>>>>>> 88556fb (packages)
=======
>>>>>>> 9524330 (files)
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
<<<<<<< HEAD
<<<<<<< HEAD
  const postData = await getPostData(params.id)
=======
  const postData = getPostData(params.id)
>>>>>>> 88556fb (packages)
=======
  const postData = await getPostData(params.id)
>>>>>>> 9524330 (files)
  return {
    props: {
      postData,
    },
  }
}
