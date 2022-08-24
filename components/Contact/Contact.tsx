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
      <h1>HEllo Contact</h1>
    </aside>
  )
}

export default Contact
