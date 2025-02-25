import MobileFeature from "./MobileFeature";
import Image from "next/image";

export default function Features(){
    return(        
        <div className=" w-full">
            <div className=" text-center pt-20 pb-10 border-b-2 border-b-gray-300 border-dotted">
                               
                <h3 className="text-3xl lg:text-5xl text-center font-semibold">Packed with thousands of features</h3>
                <p className=" pt-4 text-sm lg:text-lg text-center">From Image generation to video generation, Everything AI has APIs</p><p className="text-sm lg:text-lg text-center">for literally everything. It can even create this website copy for you.</p>

            </div>
            <div className="  border-x-2 lg:pl-4 border-l-gray-300 border-dotted overflow-auto border-b-[1px] border-[rgb(229 229 229)]">
       <div className="w-full lg:w-8/12 border-b-[1px] lg:border-b-[0px] border-[rgb(229 229 229)] float-none lg:float-left pt-8">
       <div className=" pl-4">
       <h2 className=" text-xl lg:text-2xl lg:font-bold pb-2 text-black">Generate images with text</h2>
        <p className="text-sm lg:text-[16px]">Generate images from a text prompt, a video,</p>
        <p className="text-sm lg:text-[16px]">or a video segment in bulk at the speed of light.</p>
       </div>
        
        
        <div className=" h-[670px] lg:h-[820px] mt-8 relative select-none [&>:not(:first-child):not(:last-child)]:opacity-[0.4]">
        <div className="bg-gradient-to-b z-50 h-40 absolute bottom-0 w-full from-transparent via-white to-white"></div>
            <div className=" h-[600px] lg:h-[750px] shadow-2xl w-10/12 lg:w-9/12 m-auto *:pb-3 p-6">
                <div className=" flex items-center">
                    <div className="w-1/12"><Image className="rounded-full mr-2" src="/Images/photo.png" width={32} height={30} alt="logo" /></div>
                    <div className="w-11/12"><p>I want to generate an image of two people, fighting outside a bar. They fight to the core. Once they're done, they sit down and drink beer.</p></div>
                    
                    
                </div>
                <div className=" flex items-center">
                <div className="w-1/12"><div className=" bg-gradient-to-r mr-2 from-pink-500 to-violet-500 rounded-full w-8 h-8"></div></div>
                <div className="w-11/12"><p>Certainly, I'm generating this picture for you in a while. BTW are you talking about THAT movie?</p></div>
                    
                    
                </div>

                <div className=" flex items-center">
                <div className="w-1/12"><Image className="rounded-full mr-2" src="/Images/photo.png" width={32} height={30} alt="logo" /></div>
                <div className="w-11/12"><p>I don't know what you're talking about.</p></div>
                    
                    
                </div>
                <div className=" flex items-center">
                <div className="w-1/12"><div className=" bg-gradient-to-r mr-2 from-pink-500 to-violet-500 rounded-full w-8 h-8"></div></div>
                <div className="w-11/12"><p>Are you sure?</p></div>
                    
                    
                </div>

                <div className=" flex items-center">
                <div className="w-1/12"><Image className="rounded-full mr-2" src="/Images/photo.png" width={32} height={30} alt="logo" /></div>
                <div className="w-11/12"><p>Yes, I'm sure. But if you're generating that scene, make sure the fighters have clown shoes and rubber chickens instead of fists!</p></div>
                    
                    
                </div>
                <div className=" flex items-center">
                <div className="w-1/12"><div className=" bg-gradient-to-r mr-2 from-pink-500 to-violet-500 rounded-full w-8 h-8"></div></div>
                <div className="w-11/12"><p>Affirmative, here's your image.</p></div>
                    
                    
                </div>
            </div>

            <div className="bg-gradient-to-t h-10 absolute top-0 w-full from-transparent via-white to-white"></div>
            

            <div className=" w-8/12 lg:w-5/12 absolute top-0 left-[16.67%] lg:left-[29.17%] data-image">
            <div className=" p-2 rounded-3xl bg-[#f5f5f5] border border-[rgb(229 229 229)]">
                <div className="w-full rounded-3xl bg-white p-2 border border-[rgb(229 229 229)]">
                    <div className="w-full bg-[#fafafa] rounded-3xl">
                        <Image className="rounded-3xl" sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/Images/skeleton-one.webp" width={0} height={0} alt="logo" />
                    </div>
                </div>
            </div>
            
            <div className=" mt-4 p-2 rounded-3xl bg-[#f5f5f5] border border-[rgb(229 229 229)]">
                <div className="w-full rounded-3xl bg-white p-2 border border-[rgb(229 229 229)]">
                    <div className="w-full bg-[#fafafa] rounded-3xl">
                        <Image className="rounded-3xl"  sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/Images/tyler.webp" width={0} height={0} alt="logo" />
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    </div>
    <div className="w-full lg:w-4/12 float-none lg:float-right p-8 pt-8 lg:border-l-[1px] border-[rgb(229 229 229)]">
        <MobileFeature />
    </div>
    </div>
</div>

    )
}