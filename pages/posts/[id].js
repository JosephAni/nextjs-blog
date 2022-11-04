import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
<<<<<<< HEAD
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
=======
>>>>>>> 88556fb (packages)

export default function Post({ postData }) {
  return (
    <Layout>
<<<<<<< HEAD
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
=======
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
>>>>>>> 88556fb (packages)
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
  const postData = await getPostData(params.id)
=======
  const postData = getPostData(params.id)
>>>>>>> 88556fb (packages)
  return {
    props: {
      postData,
    },
  }
}
