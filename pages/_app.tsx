import Head from 'next/head'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Tokenizer</title>
				<meta
					name='description'
					content='Utility application to generate random IDs or tokens.'
				/>
				<meta charSet='UTF-8'></meta>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				></meta>

				<meta property='og:title' content='Tokenizer' />
				<meta
					property='og:description'
					content='Utility application to generate random IDs or tokens.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:image' content='/favicon.png' />
				<meta property='og:image:width' content='1024' />
				<meta property='og:image:height' content='1024' />
				<meta property='og:site_name' content='Pratikraj_Rajput' />
				<link
					rel='icon'
					type='image/svg+xml'
					href='/favicon.svg'
				></link>
				<link rel='icon' type='image/png' href='/favicon.png'></link>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
