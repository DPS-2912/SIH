import React from 'react'
import { FaArrowLeft, FaBars } from 'react-icons/fa'

const Navbar = ({Back,setBack}) => {
  return (
   

    <div className='mt-[15px] mx-[2vw] max-sm:mx-[3vw]  border-2 border-white rounded-[15px] px-[20px] py-[15px] flex justify-between items-center'>
        {Back ? (
        
        <div className='cursor-pointer flex items-center gap-x-[15px] border-2 border-[rgba(51,50,50)] px-[25px] py-[10px] rounded-[15px] hover:border-white' onClick={() => { setBack(false); }}>
            <FaArrowLeft></FaArrowLeft>
            <p>Back to home</p>
        </div>
        ) : (
            <div className='flex gap-x-[10px] items-center ' >
           <img src="./logo.jpeg" alt="" className='w-[50px] h-[50px] rounded-[50%]' />
           <p>Sign Language App</p>
           </div>)
        }
        
        <div className='flex max-sm:hidden  items-center gap-x-[30px]'>
        <button className='border-2 border-[rgba(51,50,50)] px-[25px] py-[10px] rounded-[15px] hover:border-white duration-700'>About-Us</button>
        <button className='border-2 border-[rgba(51,50,50)] px-[25px] py-[10px] rounded-[15px] hover:border-white duration-700'>Contact-Us</button>
        </div>
        <div className='hidden max-sm:flex border-2 border-[rgba(51,50,50)] px-[25px] py-[15px] rounded-[15px] hover:border-white duration-700'>
           <FaBars></FaBars>
        </div>
    </div>
  )
}

export default Navbar