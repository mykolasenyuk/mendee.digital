import { ReactNode } from 'react'
import s from './Container.module.scss'

interface LayoutProps {
  children: ReactNode
}

export default function Container({ children }: LayoutProps) {
  return <div className={s.container}>{children}</div>
}
