import React from 'react'
import WinnerBoard from '../Logo/Winners board.svg';
import { useParams } from 'react-router-dom';
import LeftIcon from '../Logo/Frame 136.svg'
import rightIcon from '../Logo/Frame 137.svg'
import leftPres from '../Logo/Sketch-annotation-element-stroke-abstract-star-wink-sparkle-filled-7 (1).svg'
import rightPres from '../Logo/Sketch-annotation-element-stroke-abstract-star-wink-sparkle-filled-7.svg'
import Winner1 from '../Logo/image 3.svg'
import Winner3 from '../Logo/image 7.svg'
import Winner2 from '../Logo/image 8.svg'

function FinalResult() {
  const { id } = useParams();




  return (
    <div>
      <div className='flex items-center justify-center mt-10'>
        <img src={rightIcon} className='mr-6' alt="" />
         <img src={WinnerBoard} alt="" className='mt-10'/>
        <img src={LeftIcon} alt="" className='ml-6'/>
      </div>
      <div className='flex justify-between mx-20'>
        <img src={rightPres} alt="" />
       <div className='items-center flex flex-col'>
          <img className='mt-20' src={Winner1} alt="" />
          <h1 className='text-3xl font-bold m-2 '>
             ssssss
          </h1>
          <div className='px-6 py-2 mt-2 rounded-full bg-orangeCustom'>
             <h1 className='text-white text-2xl'>Score : 2</h1>
          </div>
       </div>
        <img src={leftPres} alt="" />


        <div className='items-center flex flex-col absolute top-64 left-64'>
          <img className='mt-20' src={Winner2} alt="" />
          <h1 className='text-3xl font-bold m-2 '>
             ssssss
          </h1>
          <div className='px-6 py-2 mt-2 rounded-full bg-greenCustom'>
             <h1 className='text-white text-2xl'>Score : 2</h1>
          </div>
       </div>


       <div className='items-center flex flex-col absolute top-64 right-64'>
          <img className='mt-20' src={Winner3} alt="" />
          <h1 className='text-3xl font-bold m-2 '>
             ssssss
          </h1>
          <div className='px-6 py-2 mt-2 rounded-full bg-customBlue'>
             <h1 className='text-white text-2xl'>Score : 2</h1>
          </div>
       </div>



      </div>
    </div> 
  )
}

export default FinalResult
