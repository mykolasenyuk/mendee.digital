import { FC, ReactNode } from 'react'
import s from './Background.module.scss'

interface Props {
  children: ReactNode
  bgColor: 'normal' | 'dark' | 'light'
  // open: string
}

const Background: FC<Props> = ({ children, bgColor }) => {
  const testColor = () => {
    if (bgColor === 'normal') {
      return s.circles
    }
    if (bgColor === 'dark') {
      return s.circlesDark
    }
    return s.circlesLight
  }

  return (
    <>
      <div className={s.area}>
        <ul className={testColor()}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className={s.container}>{children}</div>
    </>
  )
}

export default Background
