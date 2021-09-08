import 'tailwindcss/tailwind.css'
import App from 'next/app'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => ({ ...await
App.getInitialProps(appContext)})

export default appWithTranslation(MyApp)
