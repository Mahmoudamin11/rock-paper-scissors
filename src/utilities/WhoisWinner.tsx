import { useMark } from "../Context.tsx/ChooseMark";

export function whoWon() { 
    const {state, mark, housemark, increaseScore, decreaseScore, setState} = useMark();
    setTimeout(() => { 
        // if (state == "") { 
            if (mark == "paper") { 
                if (housemark == "rock") { 
                    // increaseScore();
                    return "win";
                }
                else if (housemark == "paper") { 
                    return "draw";
                }
                else if (housemark == "scissors") { 
                    // decreaseScore();
                    return "lose";
                }
            }
            else if (mark == "scissors") { 
                if (housemark == "rock") { 
                    // decreaseScore();
                    return "lose";
                }
                else if (housemark == "paper") { 
                    // increaseScore();
                    return "win";
                }
                else if (housemark == "scissors") { 
                    return "draw";
                }
            }
            // you are rock
            else { 
                if (housemark == "rock") { 
                    return "draw";
                }
                else if (housemark == "paper") { 
                    // decreaseScore();
                    return "lose";
                }
                else if (housemark == "scissors") { 
                    // increaseScore();
                    return "win";
                }
            }
        // }
        
    }, 4000)
}