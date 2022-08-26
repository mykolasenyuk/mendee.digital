import { Dispatch, FC, SetStateAction } from 'react'
import Sprite from '../Sprite/Sprite'
import s from '../Services/Services.module.scss'

interface Props {
  isLeastOneOpen: string
  setLeastOneOpen: Dispatch<SetStateAction<string>>
  title: string
  paragraph: string
}

const ServicesItem: FC<Props> = ({
  isLeastOneOpen,
  setLeastOneOpen,
  title,
  paragraph,
}) => {
  return (
    <div
      className={`${s.servicesNavItem} ${
        isLeastOneOpen === title ? s.servicesNavItemActive : ''
      }`}
      onClick={(e) => {
        const newText = e.currentTarget.childNodes[0].childNodes[0].textContent!

        setLeastOneOpen(newText)

        if (isLeastOneOpen === newText) {
          setLeastOneOpen('')
        }
      }}
    >
      <div className={s.servicesNavItemTitle}>
        <div>{title}</div>
        <div
          style={{
            transition: '250ms',
            display: 'flex',
            marginLeft: '15px',
            rotate: isLeastOneOpen === title ? '-180deg' : '',
          }}
        >
          <Sprite
            id="icon-rowDown"
            height={16}
            width={24}
            fill={isLeastOneOpen === title ? '#fff' : '#232323'}
          />
        </div>
      </div>
      <p className={s.servicesNavItemHidden}>{paragraph}</p>
    </div>
  )
}

export default ServicesItem
