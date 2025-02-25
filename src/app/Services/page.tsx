import { FaCode ,FaBacon,FaDollarSign,FaCloud,FaCodeBranch,FaRegQuestionCircle,FaSortAmountUpAlt ,FaHeart  } from "react-icons/fa";

export default function Services(){
    return(
        <div className=' w-full pt-16 pb-4'>
            <div className=' *:mb-2 lg:*:mb-0 *:m-auto flex flex-wrap justify-center  place-content-center lg:flex-nowrap *:p-8 lg:*:border lg:*:border-t-0  [&>:not(:last-child)]:border-r-0 *:w-[60%] lg:*:w-1/4 [&>:hover]:bg-gradient-to-t [&>:hover]:from-gray-100 [&>:hover]:to-white'>
            <div className=''>
                <FaCode />
                 <h2 className="hover:translate-x-2 hover:transition my-2 text-lg font-bold">Built for developers</h2>
                <p className="text-sm">Built for engineers, developers,</p>
                <p className="text-sm">dreamers, thinkers and doers.</p>
            </div>
            <div>
                <FaBacon />
                 <h2 className="hover:translate-x-2 hover:transition my-2 text-lg font-bold">Ease of use</h2>
                <p className="text-sm">It's as easy as using an Apple, and</p>
                <p className="text-sm">as expensive as buying one.</p>
            </div>
            <div>
                <FaDollarSign />
                 <h2 className="hover:translate-x-2 hover:transition my-2 text-lg font-bold">Pricing like no other</h2>
                <p className="text-sm">Our prices are best in the market.</p>
                <p className="text-sm">No cap, no lock, no credit card required.</p>
            </div>
            <div>
                <FaCloud />
                 <h2 className="hover:translate-x-2 hover:transition my-2 text-lg font-bold">100% Uptime guarantee</h2>
                <p className="text-sm">We just cannot be taken down by anyone.</p>
            </div>
            </div>
            <div className='lg:*:mb-0 *:m-auto flex flex-wrap justify-center  place-content-center lg:flex-nowrap *:p-8 lg:*:border lg:*:border-t-0 lg:*:border-b-0  [&>:not(:last-child)]:border-r-0 *:w-[60%] landscape:*:w-[40%] lg:*:w-1/4 [&>:hover]:bg-gradient-to-t [&>:hover]:from-gray-100 [&>:hover]:to-white'>
            <div>
                <FaCodeBranch />
                 <h2 className="hover:translate-x-2 hover:transition my-2 text-lg font-bold">Multi-tenant Architecture</h2>
                <p className="text-sm">You can simply share passwords</p>
                <p className="text-sm">instead of buying new seats</p>
            </div>
            <div>
                <FaRegQuestionCircle />
                 <h2 className="hover:translate-x-2 hover:transition my-2 text-lg font-bold">24/7 Customer Support</h2>
                <p className="text-sm">We are available a 100% of the</p>
                <p className="text-sm">time. Atleast our AI Agents are.</p>
            </div>
            <div>
                <FaSortAmountUpAlt />
                 <h2 className="hover:translate-x-2 hover:transition my-2 text-lg font-bold">Money back guarantee</h2>
                <p className="text-sm">If you donot like EveryAI, we will</p>
                <p className="text-sm">convince you to like us.</p>
            </div>
            <div>
                <FaHeart />
                 <h2 className="hover:translate-x-2 hover:transition my-2 text-lg font-bold">And everything else</h2>
                <p className="text-sm">I just ran out of copy ideas. Accept</p>
                <p className="text-sm">I just ran out of copy ideas. Accept</p>
            </div>
            </div>
        </div>
    )
}
