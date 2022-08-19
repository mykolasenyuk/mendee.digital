import { ReactNode, useState } from 'react'
import s from './Background.module.scss'

interface LayoutProps {
  children: ReactNode
}
export default function Background({ children }: LayoutProps) {
  const [bgColor, setBgColor] = useState<boolean>(true)
  const [open, setOpen] = useState<string>('100%')
  // const [dark, setDark] = useState<boolean>(false)

  const onBtnClick = () => {
    // setBgColor((prev) => !prev)
    if (open === '100%') {
      setOpen('60%')
    } else {
      setOpen('100%')
    }
  }
  const onClick = () => {
    setBgColor((prev) => !prev)
  }

  // console.log(bgColor)

  return (
    <>
      <div className={s.area}>
        <ul
          className={bgColor ? s.circles : s.circlesDark}
          style={{ width: open }}
        >
          <button className={s.btn} type="button" onClick={onBtnClick}>
            width
          </button>
          <button className={s.btn1} type="button" onClick={onClick}>
            Color
          </button>
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
