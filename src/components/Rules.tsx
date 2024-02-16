import close from '../assets/icon-close.svg';
import rules from '../assets/image-rules.svg';

const Rules = ({ rulesShow,closeRules}:any) => {
  return (
    <div className={` transition-opacity z-50  ease-in-out duration-150  ${rulesShow == true ? "opacity-100 pointer-events-auto " : "opacity-0 invisible"} `}>
        <div className='z-20 trans absolute max-md:w-full max-md:h-full top-0 left-0 justify-evenly md:top-1/2 md:left-1/2 md:-translate-x-1/2   md:gap-8 items-center md:-translate-y-1/2 bg-white md:rounded-xl flex flex-col p-10'>
            <div className=' flex justify-center md:justify-between w-72 items-center'>
                <h1 className=' uppercase text-dark-text text-3xl font-[700] cursor-default'>Rules</h1>
                <img onClick={closeRules} src={close} alt="close-icon" className=' h-6 max-md:hidden cursor-pointer trans hover:opacity-50 ' />
            </div>

            <img src={rules} alt="rules-image" className=' w-72 md:w-64  '  />

            <img onClick={closeRules} src={close} alt="close-icon" className=' h-6 md:hidden cursor-pointer trans hover:opacity-50 ' />
        </div>
        
        {/* Black cover */}
            <div className=' absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10'>

          </div>
          
    </div>
  )
}

export default Rules