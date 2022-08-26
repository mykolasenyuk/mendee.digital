import { FC, useState } from 'react'
import ServicesItem from '../ServicesItem'
import s from './Services.module.scss'
import { leastsData } from './utils'

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
