import LayoutAnimation from "../../../public/Components/LayoutButton/page"
import * as motion from "motion/react-client";
import Image from "next/image";
import React from 'react'

export default function Llm(){

  const CompanyLogoData = [
    { name: "Framer Motion", image: "/Images/icon/framer.png" },
    { name: "AWS", image: "/Images/icon/aws.png" },
    { name: "Redis", image: "/Images/icon/redis.png" },
    { name: "Vercel", image: "/Images/icon/vercel.png" },
    { name: "GitHub", image: "/Images/icon/github.png" },
    { name: "Tailwind CSS", image: "/Images/icon/tailwind.png" },
    { name: "Docker", image: "/Images/icon/docker.png" },
];


    return(
        <div className=" border-x-2 border-l-gray-300 border-dotted mb-2 overflow-auto border-b-[1px] border-[rgb(229 229 229)]">
    <div className="w-full lg:w-1/2 py-8 float-none lg:float-left relative border-r-[1px] border-b-gray-300">
        <div className="px-8">

        <h2 className=" text-xl lg:text-2xl lg:font-semibold pb-2 text-black">We support every single LLM</h2>
        <p className="text-sm lg:text-[16px]">Whether it's OpenAI, GroQ or Your Mom's</p>
        <p className="text-sm lg:text-[16px]">Basement LLM, we support everything.</p>
        </div>
        
        <div className=" h-full shadow-2xl w-5/6 lg:w-2/3 m-auto mt-8 py-4 rounded-md">
            
            <div className="px-4 w-full border-b-[1px] pb-4 mb-4">
            <div className="flex items-center justify-between overflow-auto">
                <div className=" float-left font-semibold">Add LLM</div>
                <div className=" float-right"><div className=" border border-[#e5e7eb] rounded-md px-3 shadow-md py-[2px]">+ Add</div></div>
            </div>
            </div>
            <div className="px-4 w-full *:mb-2">
            <div className=" w-full overflow-auto">
                <div className=" float-left border border-[#cdcfd1] rounded-md px-2 shadow-sm py-[2px] text-sm mr-2">Groq LLM</div>
                <div className=" float-left py-[2px]">23rd March</div>
                <div className=" float-right flex py-[2px]"><LayoutAnimation />
                    <div className="flex *:w-[3px] *:h-[3px] *:bg-gray-500 *:ml-[4px] *:rounded-full items-center ml-[4px]">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

            <div className=" w-full overflow-auto">
                <div className=" float-left border border-[#cdcfd1] rounded-md px-2 shadow-sm py-[2px] text-sm mr-2">OpenAI GPT0</div>
                <div className=" float-left py-[2px]">21st March</div>
                <div className=" float-right flex py-[2px]"><LayoutAnimation />
                    <div className="flex *:w-[3px] *:h-[3px] *:bg-gray-500 *:ml-[4px] *:rounded-full items-center ml-[4px]">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

            <div className=" w-full overflow-auto">
                <div className=" float-left border border-[#cdcfd1] rounded-md px-2 shadow-sm py-[2px] text-sm mr-2">Stable DIffusion</div>
                <div className=" float-left py-[2px]">3rd May</div>
                <div className=" float-right flex py-[2px]"><LayoutAnimation />
                    <div className="flex *:w-[3px] *:h-[3px] *:bg-gray-500 *:ml-[4px] *:rounded-full items-center ml-[4px]">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

            <div className=" w-full overflow-auto">
                <div className=" float-left border border-[#cdcfd1] rounded-md px-2 shadow-sm py-[2px] text-sm mr-2">Llama 2</div>
                <div className=" float-left py-[2px]">1st April</div>
                <div className=" float-right flex py-[2px]"><LayoutAnimation />
                    <div className="flex *:w-[3px] *:h-[3px] *:bg-gray-500 *:ml-[4px] *:rounded-full items-center ml-[4px]">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
</div>

        </div>
        <div className="bg-gradient-to-b h-24 absolute bottom-0 w-full from-transparent via-white to-white"></div>
    </div>
    <div className="w-full lg:w-1/2 py-8 float-none lg:float-right">
    <div className="px-8">
    <h2 className=" text-xl lg:text-2xl lg:font-semibold pb-2 text-black">Deploy in seconds</h2>
        <p className="text-sm lg:text-[16px]">With our blazing fast, state of the art, cutting</p>
        <p className="text-sm lg:text-[16px]">edge, we are so back cloud servies (read</p>
        <p className="text-sm lg:text-[16px]">AWS) - you can deploy your model in seconds.</p>

       </div>

        
    <div className="my-12 flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 after:absolute after:right-0 after:top-0 after:h-full after:w-10">
                  <motion.div
                    transition={{
                      duration: 10,
                      ease: 'easeIn',
                      repeat: Infinity,
                    }}
                    initial={{ translateX: 0 }}
                    animate={{ translateX: '-50%' }}
                    className="flex flex-none gap-2"
                  >
                    {[...new Array(2)].fill(0).map((_, index) => (
                      <React.Fragment key={index}>
                      {CompanyLogoData.map((obj,index2) => (<div className="flex-none text-center ml-2 w-[130px] py-[2px] text-sm border border-[#cdcfd1] rounded-md shadow-xl bg-white" key={index2}><div className="flex flex-wrap place-content-center"><Image src={obj.image} alt="" width="20" height="0" className=" mr-2" />{obj.name}</div></div>))}
                      </React.Fragment>
                    ))}
                  </motion.div>
                </div>



                <div className="mb-12 flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 after:absolute after:right-0 after:top-0 after:h-full after:w-10">
                  <motion.div
                    transition={{
                      duration: 20,
                      ease: 'easeIn',
                      repeat: Infinity,
                    }}
                    initial={{ translateX: '-50%' }}
                    animate={{ translateX: 0 }}
                    className="flex flex-none gap-2"
                  >
                    {[...new Array(2)].fill(0).map((_, index) => (
                    <React.Fragment key={index}>
                        {CompanyLogoData.map((obj,index2) => (<div className="flex-none text-center ml-2 w-[130px] py-[2px] text-sm border border-[#cdcfd1] rounded-md shadow-xl bg-white" key={index2}><div className="flex flex-wrap place-content-center"><Image src={obj.image} alt="" width="20" height="0" className=" mr-2"/>{obj.name}</div></div>))}
                        </React.Fragment>
                        ))}
                  </motion.div>
                </div>

                <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 after:absolute after:right-0 after:top-0 after:h-full after:w-10">
                  <motion.div
                    transition={{
                      duration: 20,
                      ease: 'easeIn',
                      repeat: Infinity,
                    }}
                    initial={{ translateX: 0 }}
                    animate={{ translateX: '-50%' }}
                    className="flex flex-none gap-2"
                  >
                    {[...new Array(2)].fill(0).map((_, index) => (
                      <React.Fragment key={index}>
                      {CompanyLogoData.map((obj,index2) => (<div className="flex-none text-center ml-2 w-[130px] py-[2px] text-sm border border-[#cdcfd1] rounded-md shadow-xl bg-white" key={index2}><div className="flex flex-wrap place-content-center"><Image src={obj.image} alt="" width="20" height="0" className=" mr-2"/>{obj.name}</div></div>))}
                      </React.Fragment>
                    ))}
                  </motion.div>
                </div>
        </div>

    </div>

    )
}