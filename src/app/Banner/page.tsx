import { GoChevronRight,GoArrowRight } from 'react-icons/go';
import * as motion from 'motion/react-client';
export default function Banner(){
    return(
    <motion.div initial={{y:100,opacity:0}} animate={{ y: 0,opacity:1 }}
    transition={{ duration: 0.8,ease: "easeOut" }} className=" py-10 lg:py-20 px-10 text-center place-content-center w-full p-4 items-center content-center">
        <p className="bg-[#f5f5f5] rounded-2xl px-4 py-1 inline-flex items-center justify-center text-[12px] lg:text-lg">We've raised $69M seed funding <GoChevronRight className=" ml-2" /></p>
        <h1 className=" text-xl lg:text-8xl font-bold py-6">
         Generate Images, Text and Videos with AI
        </h1>
        <p className=" text-sm lg:text-lg pb-8">
        Everything AI seamlessly integrated all the modern AI generation tools<br /> into one platform so that you can generate content with a single click.
        </p>
        <div className=" flex justify-center gap-x-4">
          <button className=" text-white bg-black rounded-3xl px-3 py-1.5">Get started</button>
          <button className=" hover:bg-gray-200 rounded-3xl px-3 py-1.5 inline-flex justify-center items-center">Contact us <GoArrowRight className=" ml-2" /></button>
        </div>
    </motion.div>
    )
    
}