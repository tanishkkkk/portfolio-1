import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import { Route } from '../Context'
function MyApp({ Component, pageProps }) {
  return (
    <Route>
      <Component {...pageProps} />
    </Route>
  )
}

export default MyApp
