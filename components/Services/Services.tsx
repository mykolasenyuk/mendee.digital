import { FC, useState, Dispatch, SetStateAction } from 'react'
import Sprite from '../Sprite/Sprite'
import s from './Services.module.scss'

const leastsData = [
  { title: 'WEBSITE DESIGN AND CODE', paragraph: 'We love a good code' },
  { title: 'UX DESIGN', paragraph: 'User friendly and converting' },
  {
    title: 'WEBSITE AUDIT',
    paragraph: 'We will locate your problems and find solutions',
  },
  {
    title: 'BRANDING AND VISUAL IDENTITY',
    paragraph: 'Logos, colours, TOV, brand guidelines',
  },
  {
    title: 'NFT AND BLOCKCHAIN DEVELOPMENT',
    paragraph: 'Solana with RUST programming language ',
  },
  { title: 'GRAPHIC DESIGN', paragraph: 'From print to all things digital' },
  {
    title: 'MOTION GRAPHICS',
    paragraph:
      'If a static is worth a thousand words, a motion is worth a million',
  },
]

interface ServicesItemProps {
  isLeastOneOpen: string
  setLeastOneOpen: Dispatch<SetStateAction<string>>
  title: string
  paragraph: string
}

const ServicesItem: FC<ServicesItemProps> = ({
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
            width={28}
            fill={isLeastOneOpen === title ? '#fff' : '#232323'}
          />
        </div>
      </div>
      <p className={s.servicesNavItemHidden}>{paragraph}</p>
    </div>
  )
}

interface Props {
  isServicesOpen: boolean
}

const Services: FC<Props> = ({ isServicesOpen }) => {
  const [openLeast, setOpenLeast] = useState<string>('')

  return (
    <aside
      className={`${s.services} ${isServicesOpen ? s['services_active'] : ''}`}
    >
      <nav className={s.servicesNav}>
        {leastsData.map((data, i) => (
          <ServicesItem
            key={i}
            title={data.title}
            paragraph={data.paragraph}
            isLeastOneOpen={openLeast}
            setLeastOneOpen={setOpenLeast}
          />
        ))}
      </nav>
    </aside>
  )
}

export default Services
