import React from 'react';
import Image from 'next/image';
import * as motion from "motion/react-client";
import acmeLogo from '../../logos/acme.webp';
import quantumLogo from '../../logos/quantum.webp';
import echoLogo from '../../logos/echo.webp';
import celestialLogo from '../../logos/celestial.webp';
import pulseLogo from '../../logos/pulse.webp';
import apexLogo from '../../logos/apex.webp';

const CompanyLogoData: Array<{ src: any; alt: string }> = [
  { src: acmeLogo, alt: 'Acme Logo' },
  { src: quantumLogo, alt: 'Quantum Logo' },
  { src: echoLogo, alt: 'Echo Logo' },
  { src: celestialLogo, alt: 'Celestial Logo' },
  { src: pulseLogo, alt: 'Pulse Logo' },
  { src: apexLogo, alt: 'Apex Logo' },
];

const InfiniteScrollingLogosAnimation = () => {
  return (
    <div className=" w-1/2 p-5">
        <h2 className="text-center text-xl text-white/70 my-5">
          Trusted by the world&apos;s most innovative companies
        </h2>
        <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-zinc-950 before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-zinc-950 after:to-transparent after:content-['']">
          <motion.div
            transition={{
              duration: 10,
              ease: 'linear',
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: '-50%' }}
            className="flex flex-none gap-16 pr-16"
          >
            {[...new Array(2)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {CompanyLogoData.map(({ src, alt }) => (
                  <Image
                    key={alt}
                    src={src}
                    alt={alt}
                    className="h-8 w-auto flex-none"
                  />
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
  )};

  export default InfiniteScrollingLogosAnimation;
