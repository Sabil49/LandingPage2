'use client'
import {useState} from 'react';
import { GoSun, GoMoon } from 'react-icons/go';
import { FaBars,FaTimes  } from "react-icons/fa";
import Image from "next/image";

export default function Header(){

    const [show, setShow] = useState(false);

    const myFunction = () => {
        setShow(!show)
    }   

    return(        
        <div className={`container !w-[95%] m-auto sticky top-2 lg:top-4 lg:flex p-4 lg:items-center lg:content-center justify-between px-4 py-2 transition duration-200 bg-neutral-50 z-50 ${show ? '!absolute w-full h-full z-50 bg-white' : 'rounded-full'}`}>
            <div className=" w-1/12">
                <Image src='/Images/logo.png' width={40} height={20} alt="logo" />
            </div>
            <div className={`lg:w-8/12 my-4 lg:my-0 ${show ? 'visible' : 'hidden lg:block'}`}>
                <ul className="lg:*:ml-8 first:ml-0 lg:*:float-left">
                    <li>Pricing</li>
                    <li>Blog</li>
                    <li>Contact</li>                    
                </ul>
            </div>
            <div className={`lg:w-3/12 lg:justify-end ${show ? 'visible' : 'hidden lg:block'}`}>
                <ul className=" lg:float-right flex *:flex lg:*:ml-3 *:float-left **:data-button:p-2">                    
                    <li className="!hidden lg:invisible"><button className=" rounded-md px-3 py-1.5" data-button><GoSun /><GoMoon /></button></li>
                    <li>
                    <button className=" rounded-3xl lg:px-3 pr-3 py-1.5" data-button>Login</button>           
                    </li>
                    <li className=' items-center'>
                        <button className=" text-white bg-black rounded-3xl px-3 py-1.5" data-button>Sign Up</button>
                    </li>
                </ul>
            </div>
            <div className="absolute top-3.5 right-4 lg:hidden sm:max-lg:visible" onClick={myFunction}>
                {
                    show ? <FaTimes className="cursor-pointer" /> : <FaBars className="cursor-pointer" />
                }
                
                
            </div>
        </div>
    )
}