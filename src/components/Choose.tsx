import paper from '../assets/icon-paper.svg'
import scissors from '../assets/icon-scissors.svg'
import rock from '../assets/icon-rock.svg'
import {  useMark } from '../Context.tsx/ChooseMark'

const Choose = ({sendMark}:any) => {
  // const {changeMark} = useMark();
  return (
    <div className=' bg-triangle bg-cover w-72  mx-auto h-64 relative z-0 mt-24'>
        <div onClick={() => {sendMark(0)}} className=' shadow-paperShadow group hover:opacity-85 cursor-pointer trans absolute -top-10 -translate-x-1/4 left-0 bg-paper-back rounded-full w-32 h-32 flex items-center justify-center  '>
          <div className='flex items-center  trans shadow-btns justify-center  bg-white   rounded-full w-24 h-24 '>
            <img src={paper} alt="" />
          </div>
        </div>

        <div onClick={() => sendMark(1)} className=' shadow-scissorsShadow absolute group hover:opacity-85 cursor-pointer trans -top-10 translate-x-1/4 -right-0 bg-scissors-back rounded-full w-32 h-32 flex items-center justify-center  '>
          <div className='flex items-center shadow-btns  trans justify-center  bg-white   rounded-full w-24 h-24 '>
            <img src={scissors} alt="" />
          </div>
        </div>

        <div onClick={() => sendMark(2)} className=' shadow-rockShadow absolute bottom-0 group hover:opacity-85 cursor-pointer trans  -translate-x-1/2 left-1/2 bg-rock-back rounded-full w-32 h-32 flex items-center justify-center  '>
          <div className='flex items-center shadow-btns  trans justify-center  bg-white   rounded-full w-24 h-24 '>
            <img src={rock} alt="" />
          </div>
        </div>
        
    </div>
  )
}

export default Choose;