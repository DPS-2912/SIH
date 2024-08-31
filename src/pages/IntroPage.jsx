import React from 'react'

const IntroPage = ({Back,setBack,AudioIp,setAudioIp}) => {
  return (
    <div className='mx-[2vw] max-sm:mx-[3vw] max-sm:pb-[100px] mt-[20px] pt-[20px]'>
      <h1 className='w-[100%] text-center font-bold text-[30px] mb-[20px]'>WHAT WE OFFER ?</h1>
      <div className = ' flex justify-center gap-x-[20vw] flex-wrap items-center pt-[10px] gap-y-[30px]'>
        <div className='relative flex justify-center cursor-pointer' onClick={()=>{setBack(true); setAudioIp(true)}}>
        <img src="./Audio-to-video.png" alt="" className='w-[275px] rounded-[20px]'/>
        <p className='w-[80%]  flex items-center justify-center font-semibold   text-[25px]  absolute top-[4%] rounded-[20px]'>Audio to Video</p>
        </div>
        <div className='relative flex justify-center cursor-pointer' onClick={()=>{setBack(true); setAudioIp(false)}}>
        <img src="./video-to-audio.png" alt="" className='w-[275px] rounded-[20px]'/>
        <p className='w-[80%]  flex items-center justify-center font-semibold   text-[25px]  absolute top-[4%] rounded-[20px]'>Video to Audio</p>
        </div>
      </div> 
      </div>
  )
}

export default IntroPage