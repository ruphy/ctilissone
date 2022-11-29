import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const aboutus = true
  return (
    <>
      <Layout shows={true}>
        <Head>
          <title>CTI Lissone</title>
        </Head>
        <Container>
          <Header />

          <h1>I nostri spettacoli</h1>
          Lorem ipsum...
          <br />
          <br />
        </Container>
      </Layout>
    </>
  )
}
