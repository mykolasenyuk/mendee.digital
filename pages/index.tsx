import { useState } from 'react'
import AppBar from '../components/AppBar/AppBar'
import Background from '../components/Background/Background'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import s from '../styles/index.module.scss'

const Home = () => {
	const [isActive, setActive] = useState(false)
	const [bgColor, setBgColor] = useState<'normal' | 'dark' | 'light'>('normal')
	const [open, setOpen] = useState<string>('100%')
	const [isServicesOpen, setServicesOpen] = useState<boolean>(false)
	const [isAboutUsOpen, setAboutUsOpen] = useState<boolean>(false)
	const [isContactOpen, setContactOpen] = useState<boolean>(false)

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
					isServicesOpen={isServicesOpen}
					setServicesOpen={setServicesOpen}
					isAboutUsOpen={isAboutUsOpen}
					setAboutUsOpen={setAboutUsOpen}
					isContactOpen={isContactOpen}
					setContactOpen={setContactOpen}
				/>
				{!isActive && open === '100%' && <Hero />}
			</Background>
			<Services isServicesOpen={isServicesOpen} />
		</div>
	)
}

export default Home
