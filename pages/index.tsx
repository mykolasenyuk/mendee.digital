import { useState } from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import AppBar from '../components/AppBar/AppBar'
import Background from '../components/Background/Background'
import Contact from '../components/Contact/Contact'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import s from '../styles/index.module.scss'
import 'animate.css'

const Home = () => {
  const [isActive, setActive] = useState(false)
  const [bgColor, setBgColor] = useState<'normal' | 'dark'>('normal')
  const [open, setOpen] = useState<boolean>(true)
  const [isServicesOpen, setServicesOpen] = useState<boolean>(false)
  const [isAboutUsOpen, setAboutUsOpen] = useState<boolean>(false)
  const [isContactOpen, setContactOpen] = useState<boolean>(false)

  return (
    <div
      className={`${s.index} ${bgColor === 'dark' ? s['index_darkMode'] : ''}`}
    >
      <Background bgColor={bgColor}>
        <AppBar
          isActive={isActive}
          setActive={setActive}
          bgColor={bgColor}
          setBgColor={setBgColor}
          setOpen={setOpen}
          isServicesOpen={isServicesOpen}
          setServicesOpen={setServicesOpen}
          isAboutUsOpen={isAboutUsOpen}
          setAboutUsOpen={setAboutUsOpen}
          isContactOpen={isContactOpen}
          setContactOpen={setContactOpen}
        />
        {!isActive && open && <Hero />}
      </Background>
      <Services isServicesOpen={isServicesOpen} />
      <AboutUs isAboutUsOpen={isAboutUsOpen} />
      <Contact isContactOpen={isContactOpen} />
    </div>
  )
}

export default Home
