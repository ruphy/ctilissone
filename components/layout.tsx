import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  aboutus?: boolean
  shows?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, shows, aboutus, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} shows={shows} aboutus={aboutus} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
