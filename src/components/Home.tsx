
import Choose from './Choose'
import Game from './Game'
import { useMark } from '../Context.tsx/ChooseMark';
import { createContext, useContext, useState } from 'react';
export type resetType = { 
  resetMark: () => void
  humanMark: number
}

const cont = createContext({} as resetType);

export function useReset() { 
  return useContext(cont);
}

const Home = () => {
  
  const {getGenerateOrNot, falsenGenerateOrNot, changeN, n} = useMark();
  const [humanMark, sethumanMark] = useState(-1);

  function receiveMark(mark:number) { 
    sethumanMark(mark);
  }
  
  if (getGenerateOrNot() == true) { 
    falsenGenerateOrNot();
     changeN(Math.floor(Math.random() * 3)) ;
   }
  function resetMark() { 
    sethumanMark(-1);
   }
  return (
    <cont.Provider value={{resetMark, humanMark}}>
        {humanMark == -1 && <Choose sendMark={receiveMark} />}
        {humanMark != -1 && <Game choice={n}/>}
        
    </cont.Provider>
  )
}

export default Home