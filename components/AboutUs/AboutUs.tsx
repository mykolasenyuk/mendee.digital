import { FC } from 'react'
import Sprite from '../Sprite/Sprite'
import s from './AboutUs.module.scss'

interface Props {
	isAboutUsOpen: boolean
}
const AboutUs: FC<Props> = ({ isAboutUsOpen }) => {
	return (
		<aside
			className={`${s.aboutUs} ${isAboutUsOpen ? s['aboutUs_active'] : ''}`}>
			<h1 className={s.title}>About Us</h1>
			<div className={s.mendeeDescr}>
				<p>Mendee.Digital is a web development studio with a social impact.</p>
				We are an international community who believe that the internet should
				be a place where everyone can contribute and be valued for their talents
				and skills, regardless of their location or circumstances.
			</div>
			<div className={s.descr}>
				<div className={s.logo}>
					<Sprite id='icon-Logo' height={24} width={51} fill='#fff' />
				</div>

				<p>
					We've got amazing people from the UK, Poland, Ukraine, Turkey and
					Mongolia right now, but we're always looking for more!
				</p>
				<p>
					If you would like to work with us on our mission to bring more
					fairness and opportunity online, please get in touch!
				</p>
			</div>
		</aside>
	)
}

export default AboutUs
