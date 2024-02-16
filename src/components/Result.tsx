import { useContext, useEffect } from 'react';
import { useMark } from '../Context.tsx/ChooseMark'
import { getWinnerColor } from '../utilities/GetWinnerColor';
import { useReset } from './Home';

const Result = ({st, resetState, housemark}:any) => {
    const {mark,  changeMark, increaseScore, keepScore, 
            decreaseScore, setState, trueGenerateOrNot} = useMark(); 
    const {resetMark, humanMark} = useReset();
    
    useEffect(() => { 
        setTimeout(() => { 
                if (st == "win") { 
                    increaseScore();
                }
                else if (st == "lose") { 
                        decreaseScore();
                }
                else {
                    keepScore();
                }
        }, 4000)
    }, [st])


  return (
    <div className='flex flex-col gap-5 items-center justify-center w-[350px] z-0'>
        <h1 className=' uppercase font-[700] text-5xl text-white tracking-widest'>You {st}</h1>
        <button onClick={() => { resetMark(), resetState(),trueGenerateOrNot()}} className= {` uppercase font-[600] tracking-[0.3em] bg-white w-10/12 p-2 rounded-lg trans ${st == "win" ? getWinnerColor(humanMark) : st== "lose" ? getWinnerColor(housemark): getWinnerColor(housemark)}`}>
            Play again
        </button>
    </div>
  )

}

export default Result;