import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => (
	<Html>
		<Head>
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
			<link
				href='https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&family=Source+Code+Pro:ital,wght@0,400;0,500;1,400;1,500&display=swap'
				rel='stylesheet'
			/>
		</Head>
		<body>
			<Main />
			<NextScript />
		</body>
	</Html>
)

export default Document