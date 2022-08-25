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
        <ul className={s.socialList}>
          <li>
            <a className={s.socialLink}>
              <Sprite id="icon-instagram" height={30} />
            </a>
          </li>
          <li>
            <a className={s.socialLink}>
              <Sprite id="icon-twitter" height={30} />
            </a>
          </li>

          <li>
            <a className={s.socialLink}>
              <Sprite id="icon-facebook" height={30} />
            </a>
          </li>
          <li>
            <a className={s.socialLink}>
              <Sprite id="icon-linkdn" height={30} />
            </a>
          </li>
          <li>
            <a className={s.socialLink}>
              <Sprite id="icon-mail" height={30} />
            </a>
          </li>
          <li>
            <a className={s.socialLink}>
              <Sprite id="icon-phone" height={30} />
            </a>
          </li>
        </ul>
        <div className={s.subscribeContainer}>
          <p>Subscribe for our monthly newsletter</p>
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
