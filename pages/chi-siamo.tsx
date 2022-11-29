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
      <Layout aboutus={true}>
        <Head>
          <title>CTI Lissone</title>
        </Head>
        <Container>
          <Header />
          <h1>Chi siamo?</h1>
          Nata da una lunga tradizione teatrale sviluppatasi nel Cineteatro
          Excelsior di Lissone (MI) e dalle esperienze attorali e registiche di
          alcuni componenti anche a fianco di professionisti, la Compagnia
          Teatro Instabile, conosciuta anche come C.T.I., si è costituita
          associazione teatrale e culturale nel 1992.
          <br />
          <br />
          C.T.I. è una associazione senza scopo di lucro che ha posto tra i
          propri oggetti sociali la produzione di spettacoli e rassegne
          teatrali, riconoscendo al teatro una triplice funzione: estetica,
          pedagogica e culturale. In quest'ultima accezione il teatro viene
          scelto come ambito speciale di confronto e dibattito su temi di volta
          in volta definiti dall'associazione medesima, in particolare per i
          giovani di Lissone, in provincia di Milano, città in cui ha sede la
          compagnia.
          <br />
          <br />
          <h4>Per info e prenotazioni - Tel. +39 3515245768</h4>
          <br />
          <br />
        </Container>
      </Layout>
    </>
  )
}
