import { Dispatch, FC, MouseEvent, SetStateAction, useState } from 'react'
import Sprite from '../Sprite/Sprite'
import s from './AppBar.module.scss'
import 'animate.css'

interface Props {
  isActive: boolean
  setActive: Dispatch<SetStateAction<boolean>>
  bgColor: 'normal' | 'dark'
  setBgColor: Dispatch<SetStateAction<'normal' | 'dark'>>
  setOpen: Dispatch<SetStateAction<boolean>>
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
      setOpen(true)
      setActive(false)
      if (!isServicesOpen) {
        setBgColor('normal')
        setOpen(false)
      }
    }
    if (textContent === 'ABOUT US') {
      setAboutUsOpen(!isAboutUsOpen)
      setServicesOpen(false)
      setContactOpen(false)
      setBgColor('normal')
      setOpen(true)
      setActive(false)

      if (!isAboutUsOpen) {
        setBgColor('normal')
        setOpen(false)
      }
    }
    if (textContent === 'CONTACT') {
      setContactOpen(!isContactOpen)
      setAboutUsOpen(false)
      setServicesOpen(false)
      setBgColor('normal')
      setOpen(true)
      setActive(false)
      if (!isContactOpen) {
        setBgColor('dark')
        setOpen(false)
      }
    }
  }

  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <nav className={s.navBar}>
          <div>
            {bgColor !== 'dark' ? (
              <svg className={s.headerLogo}>
                <use href={`/sprite.svg#icon-logoName`} />
              </svg>
            ) : (
              <svg className={s.headerLogo}>
                <use href={`/sprite.svg#icon-logoName-darkMode`} />
              </svg>
            )}
            {/* <Sprite
              id={`icon-logoName${bgColor === 'dark' ? '-darkMode' : ''}`}
              width={285}
              height={48}
            /> */}
          </div>

          <button
            className={`${s.menuBtn} ${
              bgColor === 'dark' ? s['menuBtn_darkMode'] : ''
            } `}
            onClick={toggleClass}
          >
            <div
              style={{
                transition: '350ms cubic-bezier(0.4, 0, 0.2, 1)',
                rotate: isActive ? '-360deg' : '',
              }}
            >
              <Sprite
                id={isActive ? 'icon-close' : 'icon-menu'}
                width={48}
                height={48}
                fill={
                  isActive
                    ? '#ffa737'
                    : `${bgColor === 'dark' ? '#fff' : '#314172'}`
                }
              />
            </div>
          </button>

          <div
            className={
              isActive
                ? `${s.navMenuOpen} ${
                    bgColor === 'dark' ? s['navMenuOpen_darkMode'] : ''
                  } `
                : s.navMenu
            }
          >
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
                onClick={onMenuItemClickHandler}
              >
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
                onClick={onMenuItemClickHandler}
              >
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
                onClick={onMenuItemClickHandler}
              >
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
