import { Dispatch, FC, MouseEvent, SetStateAction, useState } from 'react'
import Sprite from '../Sprite/Sprite'
import s from './AppBar.module.scss'

interface Props {
	isActive: boolean
	setActive: Dispatch<SetStateAction<boolean>>
}

const AppBar: FC<Props> = ({ isActive, setActive }) => {
	const [isServicesOpen, setServicesOpen] = useState<boolean>(false)
	const [isAboutUsOpen, setAboutUsOpen] = useState<boolean>(false)
	const [isContactOpen, setContactOpen] = useState<boolean>(false)

	const toggleClass = () => {
		setActive(!isActive)
	}

	const onMenuItemClickHandler = (e: MouseEvent<HTMLLIElement>) => {
		if (e.currentTarget.textContent === 'SERVICES') {
			setServicesOpen(!isServicesOpen)
			setAboutUsOpen(false)
			setContactOpen(false)
		}
		if (e.currentTarget.textContent === 'ABOUT US') {
			setAboutUsOpen(!isAboutUsOpen)
			setServicesOpen(false)
			setContactOpen(false)
		}
		if (e.currentTarget.textContent === 'CONTACT') {
			setContactOpen(!isContactOpen)
			setAboutUsOpen(false)
			setServicesOpen(false)
		}
	}

	return (
		<header className={s.header}>
			<div className={s.headerContainer}>
				<nav className={s.navBar}>
					<div>
						<Sprite id='icon-logoName' width={285} height={48} />
					</div>

					<button className={s.menuBtn} onClick={toggleClass}>
						<Sprite
							id={isActive ? 'icon-close' : 'icon-menu'}
							width={48}
							height={48}
						/>
					</button>

					<div className={isActive ? s.navMenuOpen : s.navMenu}>
						<ul className={s.navBarList}>
							<li
								style={
									isServicesOpen
										? {
												textDecoration: 'underline',
												color: '#ffa737',
										  }
										: {}
								}
								className={s.navBarListItem}
								onClick={onMenuItemClickHandler}>
								SERVICES
							</li>
							<li
								style={
									isAboutUsOpen
										? {
												textDecoration: 'underline',
												color: '#ffa737',
										  }
										: {}
								}
								className={s.navBarListItem}
								onClick={onMenuItemClickHandler}>
								ABOUT US
							</li>
							<li
								style={
									isContactOpen
										? {
												textDecoration: 'underline',
												color: '#ffa737',
										  }
										: {}
								}
								className={s.navBarListItem}
								onClick={onMenuItemClickHandler}>
								CONTACT
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default AppBar
