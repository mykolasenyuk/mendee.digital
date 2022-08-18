import { ReactNode } from 'react'
import s from './Background.module.scss'

interface LayoutProps {
  children: ReactNode
}
export default function Background({ children }: LayoutProps) {
  return (
    <>
      <div className={s.area}>
        <ul className={s.circles}>
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
