import  { useState } from 'react'
import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import scissors from "../assets/icon-scissors.svg";
import {  useMark } from '../Context.tsx/ChooseMark';
import Result from './Result';
import { useReset } from './Home';
import { gradientOverWinner } from '../utilities/GradOverWinner';

type choiceProps = { 
    choice : number
}

const Game = ({choice}:choiceProps) => {
    const { changeHouseMark} = useMark();
    const [ShowPCMark, setShowPCMark] = useState(false);
    const [ShowResult, setShowResult] = useState(false);
    const [state, setstate] = useState("");
    const {humanMark} = useReset();
    setTimeout(() => { 
        setShowPCMark(true);
    }, 3000);
    setTimeout(() => { 
        setShowResult(true);
    }, 4000);

    // const arr = [0, "scissors", "rock"];
    changeHouseMark(choice);

    if (state == "") { 
        if (humanMark == 0) { 
            if (choice == 2) { 
                setstate("win");
                
            }
            else if (choice == 0) { 
                setstate("draw");
            }
            else if (choice == 1) { 
                setstate("lose");
                
            }
        }
        else if (humanMark == 1) { 
            if (choice == 2) { 
                setstate("lose");
                
            }
            else if (choice == 0) { 
                setstate("win");
                
            }
            else if (choice == 1) { 
                setstate("draw");
            }
        }
        // you are rock
        else if (humanMark == 2) { 
            if (choice == 2) { 
                setstate("draw");
            }
            else if (choice == 0) { 
                setstate("lose");
                
            }
            else if (choice == 1) { 
                setstate("win");
                
            }
        }
    }
    const resetState = () => { 
        setstate("");
    }
  return (
    <div className='flex flex-col gap-20 min-[400px]:gap-5'>
        <div className='flex items-center mt-auto lg:my-0 justify-center lg:justify-around gap-4  lg:gap-10'>
            {/* Your choice */}
            <div className='flex lg:flex-col flex-col-reverse gap-10 lg:gap-16 items-center'>
                <p className=' text-white text-xl tracking-widest font-[700] uppercase z-10'>You picked</p>
                <div className={`  group   trans ${humanMark == 0 ? "shadow-paperShadow bg-paper-back" : humanMark == 1 ? "bg-scissors-back shadow-scissorsShadow" : "bg-rock-back shadow-rockShadow"}   rounded-full w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center  ${state == "win" && ShowResult == true ? "lg:shadow-winnerShadow shadow-winnerShadowSM -z-10" : "z-20"} `}>
                    <div className='flex items-center  trans shadow-btns justify-center  bg-white   rounded-full lg:w-48 lg:h-48  w-28 h-28 '>
                        <img src={humanMark == 0 ? paper : humanMark == 1 ? scissors : rock} className='w-16' alt="" />
                    </div>
                </div>
            </div>
        
        
            {<div className={`${ShowResult == true ? "block" : "hidden"} max-lg:hidden text-center z-20  `}>
                <Result st={state} resetState={resetState} housemark= {choice} />
            </div>}
        
        
            {/* house choice */}
            <div className= {`flex lg:flex-col flex-col-reverse gap-10 lg:gap-16 items-center`} >
                <p className=' text-white text-xl tracking-widest  font-[700] uppercase w-full z-20 text-center'>House picked</p>
                <div>
                    {ShowPCMark == false && <div className='  group  trans animate-pulse  bg-black opacity-10  rounded-full lg:w-64 lg:h-64 w-40 h-40 flex items-center justify-center  '>
                    </div>}
        
                    {ShowPCMark == true && <div className={`  group  trans   ${choice == 0 ? "shadow-paperShadow bg-paper-back" : choice == 1 ? "bg-scissors-back shadow-scissorsShadow" : "bg-rock-back shadow-rockShadow"} rounded-full w-40 h-40 lg:w-64 lg:h-64 flex items-center justify-center ${state == "lose" && ShowResult == true ? "lg:shadow-winnerShadow shadow-winnerShadowSM -z-10" : "z-50"}  `}>
                        <div className='flex items-center  trans shadow-btns justify-center  bg-white   rounded-full lg:w-48 lg:h-48  w-28 h-28 '>
                        <img src={choice == 0 ? paper : choice == 1 ? scissors : rock} className='w-16' alt="" />
                        </div>
                    </div>}
                </div>
            </div>
        </div>
        {<div className={`${ShowResult == true ? "block" : "hidden"} lg:hidden text-center z-20 mx-auto  `}>
            <Result st={state} resetState={resetState} housemark= {choice} />
        </div>}
    </div>
  )
}

export default Game