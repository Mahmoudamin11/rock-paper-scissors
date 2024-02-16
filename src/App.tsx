
import { useState } from "react"
import  ChooseMark  from "./Context.tsx/ChooseMark"
import Home from "./components/Home"
import Rules from "./components/Rules"
import Score from "./components/Score"



function App() {

  const [rulesToggler, setrulesToggler] = useState(false)
  const toggleRules = () => { 
    if (rulesToggler == true) { 
      setrulesToggler(false);
    }
    else { 
      setrulesToggler(true);
    }
  }

  return (
    
      <ChooseMark>
        <div className="w-full md:w-3/4 lg:w-1/2  mx-auto mt-8 flex flex-col gap-16 relative">
          <Score />
          <Home />
        </div>
        
        <div onClick={toggleRules}  className='absolute bottom-8 md:right-16 right-1/2 max-md:translate-x-1/2  text-white border-2 border-solid border-white cursor-pointer text-md  py-2 px-8 rounded-md uppercase tracking-[0.2em] trans hover:opacity-85 hover:bg-white hover:text-dark-text'>
          Rules
        </div>
        { <Rules rulesShow={rulesToggler} closeRules = {toggleRules}/>}
      </ChooseMark>
  )
}

export default App
