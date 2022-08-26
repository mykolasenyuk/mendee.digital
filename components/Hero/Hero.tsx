import { FC } from 'react'
import s from './Hero.module.scss'

interface Props {
  bgColor: 'normal' | 'dark'
}
const Hero: FC<Props> = ({ bgColor }) => {
  return (
    <div className={s.container}>
      <h1 className={bgColor !== 'dark' ? s.title : s.titleDark}>
        branding and web development studio with a social impact
      </h1>
    </div>
  )
}

export default Hero
