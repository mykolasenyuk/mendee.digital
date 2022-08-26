/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react'
import Sprite from '../Sprite/Sprite'
import s from './Contact.module.scss'

interface Props {
  isContactOpen: boolean
}
const Contact: FC<Props> = ({ isContactOpen }) => {
  return (
    <aside
      className={`${s.contact} ${isContactOpen ? s['contact_active'] : ''}`}
    >
      <div className={s.contactContainer}>
        <h1 className={s.title}>Contact</h1>
        <ul className={s.socialList}>
          <li>
            <a
              className={s.socialLink}
              href="https://www.linkedin.com/company/mendee/"
            >
              <Sprite id="icon-linkdn" height={30} />
            </a>
          </li>
          <li>
            <a
              className={s.socialLink}
              href="https://twitter.com/mendee_digital"
            >
              <Sprite id="icon-twitter" height={30} />
            </a>
          </li>

          <li>
            <a
              className={s.socialLink}
              href="https://www.facebook.com/mendee.digital/"
            >
              <Sprite id="icon-facebook" height={30} />
            </a>
          </li>
          <li>
            <a
              className={s.socialLink}
              href="https://www.instagram.com/mendee_digital/"
            >
              <Sprite id="icon-instagram" height={30} />
            </a>
          </li>

          <li>
            <a className={s.socialLink} href="mailto:hello@mendee.digital">
              <Sprite id="icon-mail" height={30} />
            </a>
          </li>
          {/* <li>
            <a className={s.socialLink}>
              <Sprite id="icon-phone" height={30} />
            </a>
          </li> */}
        </ul>
        <div className={s.subscribeContainer}>
          <p className={s.subcribeTitle}>
            Subscribe for our monthly newsletter
          </p>
          <div className={s.inputCont}>
            <input
              type="email"
              placeholder="ENTER E-MAIL"
              className={s.input}
            />
            <button className={s.btn}>SUBMIT</button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Contact
