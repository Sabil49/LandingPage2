import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";

export default function Testimonials(){    
    const CompanyLogoData = [
        {Name: 'Tina Arora',src: '/Images/girl.webp',Position:'Technology Strategist',Text:"The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs and improve our end product significantly."},
        {Name: 'Tina Arora',src: '/Images/girl.webp',Position:'Technology Strategist',Text:"The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs and improve our end product significantly."},
        {Name: 'Tina Arora',src: '/Images/girl.webp',Position:'Technology Strategist',Text:"The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs and improve our end product significantly."},
        {Name: 'Tina Arora',src: '/Images/girl.webp',Position:'Technology Strategist',Text:"The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs and improve our end product significantly."},
        {Name: 'Tina Arora',src: '/Images/girl.webp',Position:'Technology Strategist',Text:"The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs and improve our end product significantly."},
        {Name: 'Tina Arora',src: '/Images/girl.webp',Position:'Technology Strategist',Text:"The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs and improve our end product significantly."},
        {Name: 'Tina Arora',src: '/Images/girl.webp',Position:'Technology Strategist',Text:"The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs and improve our end product significantly."},
        {Name: 'Tina Arora',src: '/Images/girl.webp',Position:'Technology Strategist',Text:"The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs and improve our end product significantly."},
      ];

    return(
        <div className=" w-full">
          <div className=" text-center pt-20">
                
                <h3 className="text-3xl lg:text-5xl text-center font-semibold">Loved by people all over the universe</h3>
                <p className=" pt-4 text-sm lg:text-lg text-center">Every AI is used by millions of people around the globe.Our</p><p className="text-sm lg:text-lg text-center">APIs have fan bases and people fight for us over twitter.</p>

            </div>
            <div className=" w-full flex relative">
           <div className="w-full lg:w-1/3">
           <div className="my-12 h-[800px] px-4 relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 after:absolute after:right-0 after:top-0 after:h-full after:w-10">
                              <motion.div
                                transition={{
                                  duration: 30,
                                  ease: 'linear',
                                  repeat: Infinity,
                                }}
                                initial={{ translateY: 0 }}
                                animate={{ translateY: '-50%' }}
                                className=""
                              >
                                {[...new Array(2)].fill(0).map((_, index) => (
                                  <React.Fragment key={index}>
                                    {CompanyLogoData.map((obj,index2) => (
                                                      <div className="gap-2 mb-8 border-gray-100 shadow-lg animate-fade-in border rounded-3xl bg-transparent p-8 shadow-derek flex flex-col items-start" key={index2}>
                                                      <div className="flex gap-2">
                                                          <Image alt="" width="150" height="150" className="h-10 w-10 rounded-full" src={obj.src} />
                                                          <div>
                                                              <h3 className="text-sm  font-medium text-neutral-500 dark:text-neutral-300">{obj.Name}</h3>
                                                              <p className="text-sm font-normal text-neutral-500 dark:text-neutral-300">{obj.Position}</p>
                                                          </div>
                                                      </div>
                                                      <p className="text-base text-muted mt-4 dark:text-muted-dark">{obj.Text}</p>
                                                  </div>
                                                  
                                                    ))}
                                  </React.Fragment>
                                ))}
                              </motion.div>
                            </div>
           </div>

           <div className=" w-1/3 hidden lg:block">
           <div className="my-12 h-[700px] px-4 relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 after:absolute after:right-0 after:top-0 after:h-full after:w-10">
                              <motion.div
                                transition={{
                                  duration: 40,
                                  ease: 'easeIn',
                                  repeat: Infinity,
                                }}
                                initial={{ translateY: 0 }}
                                animate={{ translateY: '-50%' }}
                                className=""
                              >
                                {[...new Array(2)].fill(0).map((_, index) => (
                                  <React.Fragment key={index}>
                                    {CompanyLogoData.map((obj,index2) => (
                                                      <div className="gap-2 mb-8 border-gray-100 shadow-lg animate-fade-in border rounded-3xl bg-transparent p-8 shadow-derek flex flex-col items-start" key={index2}>
                                                      <div className="flex gap-2">
                                                          <Image alt="" width="150" height="150" className="h-10 w-10 rounded-full" src={obj.src} />
                                                          <div>
                                                              <h3 className="text-sm  font-medium text-neutral-500 dark:text-neutral-300">{obj.Name}</h3>
                                                              <p className="text-sm font-normal text-neutral-500 dark:text-neutral-300">{obj.Position}</p>
                                                          </div>
                                                      </div>
                                                      <p className="text-base text-muted mt-4 dark:text-muted-dark">{obj.Text}</p>
                                                  </div>
                                                  
                                                    ))}
                                  </React.Fragment>
                                ))}
                              </motion.div>
                            </div>
           </div>

           <div className=" w-1/3 hidden lg:block">
           <div className="my-12 h-[700px] px-4 relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 after:absolute after:right-0 after:top-0 after:h-full after:w-10">
                              <motion.div
                                transition={{
                                  duration: 20,
                                  ease: 'easeOut',
                                  repeat: Infinity,
                                }}
                                initial={{ translateY: 0 }}
                                animate={{ translateY: '-50%' }}
                                className=""
                              >
                                {[...new Array(2)].fill(0).map((_, index) => (
                                  <React.Fragment key={index}>
                                    {CompanyLogoData.map((obj,index2) => (
                                                      <div className="gap-2 mb-8 border-gray-100 shadow-lg animate-fade-in border rounded-3xl bg-transparent p-8 shadow-derek flex flex-col items-start" key={index2}>
                                                      <div className="flex gap-2">
                                                          <Image alt="" width="150" height="150" className="h-10 w-10 rounded-full" src={obj.src} />
                                                          <div>
                                                              <h3 className="text-sm  font-medium text-neutral-500 dark:text-neutral-300">{obj.Name}</h3>
                                                              <p className="text-sm font-normal text-neutral-500 dark:text-neutral-300">{obj.Position}</p>
                                                          </div>
                                                      </div>
                                                      <p className="text-base text-muted mt-4 dark:text-muted-dark">{obj.Text}</p>
                                                  </div>
                                                  
                                                    ))}
                                  </React.Fragment>
                                ))}
                              </motion.div>
                            </div>
           </div>
           <div className="bg-gradient-to-t h-52 absolute top-0 w-full from-transparent via-white to-white"></div>
           <div className="bg-gradient-to-b h-52 absolute bottom-0 w-full from-transparent via-white to-white"></div>
        </div></div>
    )
}