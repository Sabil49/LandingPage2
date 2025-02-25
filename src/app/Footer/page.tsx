import Image from "next/image";

export default function Footer(){
    return(
        <div className=" w-full pt-16 border-t-[1px] border-[#f1f1f1]">
            <div className="px-4 lg:px-0 max-w-[1280px] m-auto w-full overflow-auto text-sm text-gray-600">
            <div className="w-full lg:w-8/12 float-none lg:float-left">
                <ul className="*:mb-2">
                    <li><Image src='/Images/logo.png' width={25} height={15} alt="logo" /></li>
                    <li>Copyright © 2024 Every Labs</li>
                    <li>All rights reserved</li>
                </ul>
            </div>
            <div className="w-full mt-4 lg:mt-0 lg:w-4/12 float-none lg:float-right flex">
                <div className=" w-1/3">
                <ul className="*:mb-4">
                    <li>Pricing</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
                </div>
                <div className=" w-1/3">
                <ul className="*:mb-4">
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Refund Policy</li>
                </ul>
                </div>
                <div className=" w-1/3">
                <ul className="*:mb-4">
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                </ul>
                </div>
            </div>
           
        </div>
 <div className="max-w-[1280px] m-auto w-full text-center text-5xl lg:text-[275px] font-bold text-gray-200">
                EVERY AI
            </div>
        </div>
        
    )
}