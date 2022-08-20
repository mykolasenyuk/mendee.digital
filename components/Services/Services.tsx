import { FC, useState, Dispatch, SetStateAction } from 'react'
import Sprite from '../Sprite/Sprite'
import s from './Services.module.scss'

const leastsData = [
	{ title: 'WEBSITE DESIGN AND CODE', paragraph: 'we love a good code' },
	{ title: 'UX DESIGN', paragraph: 'we love a good code' },
	{ title: 'WEBSITE AUDIT', paragraph: 'we love a good code' },
	{ title: 'BRANDING AND VISUAL IDENTITY', paragraph: 'we love a good code' },
	{ title: 'NFT AND BLOCKCHAIN DEVELOPMENT', paragraph: 'we love a good code' },
	{ title: 'GRAPHIC DESIGN', paragraph: 'we love a good code' },
	{ title: 'MOTION GRAPHICS', paragraph: 'we love a good code' },
]

interface ServicesItemProps {
	isLeastOneOpen: string
	setLeastOneOpen: Dispatch<SetStateAction<string>>
	title: string
	paragraph: string
}

const ServicesItem: FC<ServicesItemProps> = ({
	isLeastOneOpen,
	setLeastOneOpen,
	title,
	paragraph,
}) => {
	return (
		<div
			className={`${s.servicesNavItem} ${
				isLeastOneOpen === title ? s.servicesNavItemActive : ''
			}`}
			onClick={e => {
				const newText = e.currentTarget.childNodes[0].childNodes[0].textContent!

				setLeastOneOpen(newText)

				if (isLeastOneOpen === newText) {
					setLeastOneOpen('')
				}
			}}>
			<div className={s.servicesNavItemTitle}>
				<div>{title}</div>
				<div
					style={{
						transition: '250ms',
						display: 'flex',
						marginLeft: '15px',
						rotate: isLeastOneOpen === title ? '-180deg' : '',
					}}>
					<Sprite
						id='icon-vector'
						height={16}
						width={28}
						fill={isLeastOneOpen === title ? '#fff' : '#232323'}
					/>
				</div>
			</div>
			<p className={s.servicesNavItemHidden}>{paragraph}</p>
		</div>
	)
}

interface Props {
	isServicesOpen: boolean
}

const Services: FC<Props> = ({ isServicesOpen }) => {
	const [openLeast, setOpenLeast] = useState<string>('')

	return (
		<aside
			className={`${s.services} ${isServicesOpen ? s['services_active'] : ''}`}>
			<nav className={s.servicesNav}>
				{leastsData.map((data, i) => (
					<ServicesItem
						key={i}
						title={data.title}
						paragraph={data.paragraph}
						isLeastOneOpen={openLeast}
						setLeastOneOpen={setOpenLeast}
					/>
				))}
			</nav>
		</aside>
	)
}

export default Services
