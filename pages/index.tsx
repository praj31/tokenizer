import type { NextPage } from 'next'
import { Field } from '../components/Field'
import { Navbar } from '../components/Navbar'
import { fieldsDataArray } from '../data'

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<main className='container'>
				{fieldsDataArray.map((field, index) => (
					<Field
						key={index}
						title={field.title}
						generate={field.generate}
					/>
				))}
			</main>
		</>
	)
}

export default Home
