import { Dispatch, FC, MouseEvent, SetStateAction, useState } from 'react'
import Sprite from '../Sprite/Sprite'
import s from './AppBar.module.scss'

interface Props {
	isActive: boolean
	setActive: Dispatch<SetStateAction<boolean>>
	bgColor: 'normal' | 'dark'
	setBgColor: Dispatch<SetStateAction<'normal' | 'dark'>>
	setOpen: Dispatch<SetStateAction<string>>
	isServicesOpen: boolean
	setServicesOpen: Dispatch<SetStateAction<boolean>>
	isAboutUsOpen: boolean
	setAboutUsOpen: Dispatch<SetStateAction<boolean>>
	isContactOpen: boolean
	setContactOpen: Dispatch<SetStateAction<boolean>>
}

const AppBar: FC<Props> = ({
	isActive,
	setActive,
	bgColor,
	setBgColor,
	setOpen,
	isServicesOpen,
	setServicesOpen,
	isAboutUsOpen,
	setAboutUsOpen,
	isContactOpen,
	setContactOpen,
}) => {
	const toggleClass = () => {
		setActive(!isActive)
	}

	const onMenuItemClickHandler = (e: MouseEvent<HTMLLIElement>) => {
		const { textContent } = e.currentTarget
		if (textContent === 'SERVICES') {
			setServicesOpen(!isServicesOpen)
			setAboutUsOpen(false)
			setContactOpen(false)
			setBgColor('normal')
			setOpen('100%')
			setActive(false)
			if (!isServicesOpen) {
				setBgColor('normal')
				setOpen('60%')
			}
		}
		if (textContent === 'ABOUT US') {
			setAboutUsOpen(!isAboutUsOpen)
			setServicesOpen(false)
			setContactOpen(false)
			setBgColor('normal')
			setOpen('100%')
			setActive(false)

			if (!isAboutUsOpen) {
				setBgColor('normal')
				setOpen('60%')
			}
		}
		if (textContent === 'CONTACT') {
			setContactOpen(!isContactOpen)
			setAboutUsOpen(false)
			setServicesOpen(false)
			setBgColor('normal')
			setOpen('100%')
			setActive(false)
			if (!isContactOpen) {
				setBgColor('dark')
				setOpen('50%')
			}
		}
	}

	return (
		<header className={s.header}>
			<div className={s.headerContainer}>
				<nav className={s.navBar}>
					<div>
						<Sprite
							id={`icon-logoName${bgColor === 'dark' ? '-darkMode' : ''}`}
							width={285}
							height={48}
						/>
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
								className={`${s.navBarListItem} ${
									bgColor === 'dark' ? s['navBarListItem_darkMode'] : ''
								}`}
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
								className={`${s.navBarListItem} ${
									bgColor === 'dark' ? s['navBarListItem_darkMode'] : ''
								}`}
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
								className={`${s.navBarListItem} ${
									bgColor === 'dark' ? s['navBarListItem_darkMode'] : ''
								}`}
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
