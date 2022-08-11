import s from './AppBar.module.scss'
import sprite from '../../images/icons/sprite.svg'
import Image from 'next/image'
import Logo from '../../images/icons/Logo'

export default function AppBar() {
  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <nav className={s.navBar}>
          <div className={s.headerLogo}>
            {/* <svg width="285px" height="48px">
              <use href={sprite + '#icon-logoName'} />
            </svg> */}
            {/* <Image
              src="../../images/icons/Logo.svg"
              height={30}
              width={30}
              alt="logo"
            /> */}
            {/* <svg
              width="579"
              height="329"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M325.687 0h-72.374v204.194L110.38 59.807l-51.176 51.697 142.929 144.385H0V329h579v-73.111H376.867l142.93-144.385-51.177-51.697-142.933 144.385V0Z"
                fill="#FFA837"
              />
            </svg> */}

            {/* <Logo /> */}
            <svg width="100" height="100">
              <symbol viewBox="0 0 186 32">
                <path
                  d="M325.687 0h-72.374v204.194L110.38 59.807l-51.176 51.697 142.929 144.385H0V329h579v-73.111H376.867l142.93-144.385-51.177-51.697-142.933 144.385V0Z"
                  fill="#FFA837"
                />
              </symbol>
            </svg>
          </div>
          <button className={s.menuBtn}>menu</button>
          <div className={s.navMenu}>
            <ul className={s.navBarList}>
              <li className={s.navBarListItem}>SERVICES</li>
              <li className={s.navBarListItem}>ABOUT US</li>
              <li className={s.navBarListItem}>CONTACT</li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
