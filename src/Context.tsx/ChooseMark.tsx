import { ReactNode, createContext, useContext, useState } from "react"

type markType = { 
    children: ReactNode;
}

export type passedParam = { 
    mark: string 
    housemark: number
    changeMark:(mark:string) => void
    // getMark:() => string | null // returns string or null 
    changeHouseMark:(mark:number) => void
    // getHouseMark:() => string | null // returns string or null 
    increaseScore:() => void
    decreaseScore:() => void
    score:number
    setState:(state:string) => void
    state: string
    randomNumber: number
    calcRandom: () => void
    generateOrNot: boolean
    falsenGenerateOrNot: () => void
    trueGenerateOrNot: () => void
    getGenerateOrNot: () => boolean
    n : number
    changeN: (rand:number) => void
    keepScore: () => void
}
const MarkChosenContext = createContext({}as passedParam);

export function useMark() { 
    return useContext(MarkChosenContext);
}





function ChooseMark ({children}:markType) {
    const [n, setN] = useState(0);
    const [mark, setMark] = useState("");
    const [state, setstate] = useState("");
    const [housemark, sethouseMark] = useState(-1);
    const [generateOrNot, setgenerateOrNot] = useState(true);
    const [score, setscore] = useState(0);
    
    let randomNumber = Math.floor(Math.random() * 3);

    function calcRandom() { 
        randomNumber = Math.floor(Math.random() * 3);
    }

    function falsenGenerateOrNot() { 
        setgenerateOrNot(false);
    }
    function trueGenerateOrNot() { 
        setgenerateOrNot(true);
    }
    
    function changeMark(str:string) { 
        setMark(str);
    }

    function getGenerateOrNot() { 
        return generateOrNot ;
    }
    function changeN(rand:number) { 
        setN(rand);
    }

    // function getMark() { 
    //     if (mark != "") console.log("Mark : " + mark);
    //     if (mark == null) { 
    //         return null;
    //     }
    //     else { 
    //         return mark;
    //     }
    // }
    function changeHouseMark(num:number) { 
        sethouseMark(num);
    }
    // function getHouseMark() { 
    //     if (housemark != "") console.log("Housemark : " + housemark);
    //     if (housemark == null) { 
    //         return null;
    //     }
    //     else { 
    //         return housemark;
    //     }
    // }

    
    function increaseScore() { 
        
            setscore(getScore() + 1);
    }
    
    function keepScore() { 
        
            setscore(score);
    }
    
    function decreaseScore() { 
        if(score > 0) { 
            
                setscore(score - 1);
        }
    }
    
    function getScore() { 
        return score ;
    }
    function setState(st:string) { 
        setstate(st);
    }
    // function getState() { 
    //     return state ;
    // }
  return (//, increaseScore, decreaseScore, getScore
    <MarkChosenContext.Provider value={{mark, n,changeN,  housemark, changeMark,   changeHouseMark, increaseScore, decreaseScore, score, state,
        setState, randomNumber, calcRandom,keepScore, getGenerateOrNot, falsenGenerateOrNot, generateOrNot, trueGenerateOrNot}}>
        {children}
    </MarkChosenContext.Provider>
  )
}

export default ChooseMark;
