
import { useMark } from '../Context.tsx/ChooseMark'
import gameName from '../assets/logo.svg'
const Score = () => {
  const {score} = useMark();
  
  return (
    <div className='flex mx-auto max-md:w-11/12 md:mx-0 justify-between border-4 border-solid border-header-outline rounded-xl md:rounded-2xl p-3 md:p-6 '>
        <img src={gameName} alt="" />

        <div className='flex flex-col gap-1 items-center justify-center bg-white rounded-md py-2 px-2 w-24 md:w-28'>
            <span className='uppercase tracking-widest text-score-text text-md'>Score</span>
            {/* Make it dynamic */}
            <span className='uppercase font-[700] text-dark-text text-6xl'>{score}</span>
        </div>
    </div>
  )
}

export default Score