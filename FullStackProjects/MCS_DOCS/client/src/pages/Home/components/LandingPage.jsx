import { Button, OutlinedInput, TextField } from '@mui/material'
import React from 'react'
import LeftImg from "../../../assets/Left.png"
import BackgroungImg from "../../../assets/bg.png";
import CuttingVector from "../../../assets/Vector.png";
import { useDispatch } from 'react-redux';
import { toggleEditOpt } from '../../../store/slices/personSlice';

const LandingPage = () => {
  const dispatch=useDispatch()
  const search=()=>{
    console.log("ghvvhg")
    dispatch(toggleEditOpt())
  }
  return (
    <div className='md:h-screen overflow-hidden flex flex-col md:flex-row'>
      <div>
        <img src={BackgroungImg} className='absolute w-screen h-screen overflow-hidden top-0 -z-10'/>
        <img src={CuttingVector} className='w-screen overflow-hidden absolute bottom-0 -z-10'/>
      </div>
        <div className='w-full md:w-[60%] flex flex-col justify-center px-6 gap-6 lg:gap-10 mt-14 p-6'>
          <p className='text-[2rem] sm:text-[3rem] lg:text-[4rem] font-bold leading-tight'>Find  Partners (CAs) available online</p>
           <p className='text-gray-500'><span className='font-bold'>CONNECT</span> with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
           <div className='w-[30rem]'>
             <div className='flex items-center'>
               <OutlinedInput placeholder='Search by name' sx={{ width:"20rem",height:"3rem", borderRadius:"0", border:"none", outline:"0"}}/>
               <Button variant="contained" sx={{width:"10rem",height:"3rem", borderRadius:"0"}} onClick={search}>Search</Button>
             </div>
             <div className='w-full bg-white'>
              <p className='p-2 border-b'>hello</p>
              <p className='p-2 border-b'>hello</p>
             </div>
           </div>
        </div>
        <div className='flex justify-center items-center p-4'>
          <img src={LeftImg}/>
        </div>
    </div>
  )
}

export default LandingPage