import React, { useState } from 'react'
import Navbar from './Navbar'
import IntroPage from './IntroPage'
import AudioInput from './AudioInput'
import VideoInput from './VideoInput'


const Home = () => {
  const [Back , setBack] = useState(false)
  const [AudioIp , setAudioIp] = useState(true)
  return (
    <div className=' w-[100vw] h-[100vh] '>
      <Navbar Back={Back} setBack = {setBack}/>
      {(Back) ? ((AudioIp) ? (<AudioInput></AudioInput>) : (<VideoInput></VideoInput>)) : (<IntroPage Back={Back} setBack = {setBack} AudioIp={AudioIp} setAudioIp={setAudioIp}></IntroPage>)}
    </div>
  )

  
}

export default Home