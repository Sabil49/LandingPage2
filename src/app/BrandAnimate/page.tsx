import { duration } from "@mui/material";
import * as motion from "motion/react-client";
import Image from "next/image";

export default function BrandAnimate(){  

    return(
        <>
        <div className="w-full pt-16">
    <h3 className="text-3xl lg:text-5xl text-center font-semibold">Trusted by the best companies</h3>
    <p className=" pt-4 pb-8 text-sm lg:text-lg text-center">Every AI is the choice of all the fortune 500 companies.</p>
    <div className="columns-4 flex *:w-1/4 *:flex *:items-center *:justify-center">
    
    <motion.div initial={{y:0 }} animate={{ y:24 }} transition={{ repeat: Infinity, repeatDelay: 4 }}>
            <Image src="/Images/google.webp" className=" w-20 lg:w-36" width={100} height={0} alt="logo" />
        </motion.div>
        <motion.div initial={{y:0 }} animate={{ y:24 }} transition={{ repeat: Infinity, repeatDelay: 4 }}>
            <Image src="/Images/meta.webp" className=" w-20 lg:w-36" width={100} height={0} alt="logo" />
        </motion.div>
        <motion.div initial={{ y:0 }} animate={{ y:24 }} transition={{ repeat: Infinity, repeatDelay: 4 }}>
            <Image src="/Images/netflix.webp" className=" w-20 lg:w-36" width={100} height={0} alt="logo" />
        </motion.div>
        <motion.div initial={{ y:0 }} animate={{ y:24}} transition={{repeat: Infinity, repeatDelay: 4 }}>
            <Image src="/Images/onlyfans.webp" className=" w-20 lg:w-36" width={100} height={0} alt="logo" />
        </motion.div>
    </div>
</div>
</>
    )
}