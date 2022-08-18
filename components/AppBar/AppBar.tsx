import { Dispatch, FC, SetStateAction, useState } from 'react'
import s from './AppBar.module.scss'

interface Props {
  isActive: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const AppBar: FC<Props> = ({ isActive, setActive }) => {
  const toggleClass = () => {
    setActive(!isActive)
  }
  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <nav className={s.navBar}>
          <div>
            <svg className={s.headerLogo}>
              <use href={'/sprite.svg#icon-logoName'} />
            </svg>
          </div>

          <button className={s.menuBtn} onClick={toggleClass}>
            <svg width="48px" height="48px">
              {isActive ? (
                <use className={s.iconMenu} href={'/sprite.svg#icon-close'} />
              ) : (
                <use className={s.iconMenu} href={'/sprite.svg#icon-menu'} />
              )}
            </svg>
          </button>

          <div className={isActive ? s.navMenuOpen : s.navMenu}>
            <ul className={s.navBarList}>
              <li className={s.navBarListItem}>
                <a>SERVICES</a>
              </li>
              <li className={s.navBarListItem}>ABOUT US</li>
              <li className={s.navBarListItem}>CONTACT</li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default AppBar
