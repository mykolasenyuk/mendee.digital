import { useState } from 'react'
import AppBar from '../components/AppBar/AppBar'
import Background from '../components/Background/Background'
import Hero from '../components/Hero/Hero'

const Home = () => {
  const [isActive, setActive] = useState(false)

  return (
    <>
      <Background>
        <AppBar isActive={isActive} setActive={setActive} />
        {!isActive ? <Hero /> : <></>}
      </Background>
    </>
  )
}

export default Home
