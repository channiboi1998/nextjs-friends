import type { AppProps } from 'next/app'
import SiteTheme from '../components/siteTheme'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SiteTheme>
            <Component {...pageProps} />
        </SiteTheme>
    )
}