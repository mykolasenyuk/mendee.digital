import { useState } from 'react'
import AppBar from '../components/AppBar/AppBar'
import Background from '../components/Background/Background'
import Hero from '../components/Hero/Hero'
import s from '../styles/index.module.scss'

const Home = () => {
	const [isActive, setActive] = useState(false)
	const [bgColor, setBgColor] = useState<'normal' | 'dark' | 'light'>('normal')
	const [open, setOpen] = useState<string>('100%')

	return (
		<div
			className={`${s.index} ${bgColor === 'dark' ? s['index_darkMode'] : ''}`}>
			<Background bgColor={bgColor} open={open}>
				<AppBar
					isActive={isActive}
					setActive={setActive}
					bgColor={bgColor}
					setBgColor={setBgColor}
					setOpen={setOpen}
				/>
				{!isActive && open === '100%' && <Hero />}
			</Background>
		</div>
	)
}

export default Home
