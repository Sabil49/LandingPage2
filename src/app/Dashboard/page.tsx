import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { FaHome,FaRegUser,FaCog,FaUsers,FaChartBar } from "react-icons/fa";
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { PieChart } from '@mui/x-charts/PieChart';

const dataset = [
        {
          seoul: 100,
          month: 'Jan',
        },
        {
          seoul: 150,
          month: 'Feb',
        },
        {
          seoul: 125,
          month: 'Mar',
        },
        {
          seoul: 150,
          month: 'Apr',
        },
        {
          seoul: 115,
          month: 'May',
        },
        {
          seoul: 75,
          month: 'June',
        },
        {
          seoul: 175,
          month: 'July',
        },
        
      ];
      
      const chartSetting = {
        series: [{ dataKey: 'seoul' }],
        height: 225,
        width: 350,
        sx: {
          [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
            transform: 'translateX(-10px)',
          },
        },
      };
export default function Dashboard(){  
      

    return(
        <div className=" relative lg:h-[700px] w-full p-4 rounded-xl bg-[#f5f5f5] border border-[rgb(229 229 229)]">
    <div className="w-full rounded-xl bg-white p-2">
        <div className="w-full bg-[#fafafa] rounded-xl flex">
            <div className=" hidden lg:block p-4 w-2/12 border-r-[1px] border-[rgb(229 229 229)]">
                <div className=' flex'><FaChartBar className='mr-2'/><b>Dashboard</b></div>
                <div className=" p-4 pl-0">
                    <ul className=" *:text-[12px] *:flex *:py-2 justify-center items-center content-center">
                        <li><FaHome className=" mr-2" />Dashboard</li>
                        <li className=" text-gray-300"><FaRegUser className=" mr-2" />Profile</li>
                        <li className=" text-gray-300"><FaCog className=" mr-2" />Settings</li>
                    </ul>
                </div>
            </div>
            <div className="w-full lg:w-10/12 overflow-hidden">
                <div className=" py-2 px-2 overflow-auto border-b-[1px] border-[rgb(229 229 229)] flex place-content-between items-center">
                    <div className="bold">Dashboard</div>
                    <div className=" flex">
                        <form className="max-w-md mx-auto">
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full py-1 px-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search..."
                                    required
                                />
                            </div>
                        </form>
                        <div className=" rounded-full w-8 h-8 bg-slate-200 ml-4"></div>
                    </div>
                </div>
                <div className=" bg-white p-1">
                <div className="*:w-[47.5%] gap-y-2 lg:gap-y-0 lg:*:w-1/4 flex flex-wrap lg:flex-nowrap rounded-md *:p-4 gap-x-2 *:rounded-md  *:border border-[rgb(229 229 229)]">
                    <div>
                        <b className=" ">Total Users</b>
                        <p className="text-xs text-gray-400">The total number of registered users till now.</p>
                        <div className=" mt-8 flex text-xl place-content-between items-center">
                            <p className="font-bold">12,345</p>
                            <FaRegUser />
                        </div>
                    </div>
                    <div>
                        <b className=" ">New Signups</b>
                        <p className="text-xs text-gray-400">The number of new users that signed up this month.</p>
                        <div className=" mt-8 flex text-xl place-content-between items-center">
                            <p className="font-bold">1,234</p>
                            <FaUsers  />
                        </div>
                    </div>
                    <div>
                        <b className=" ">Conversion Rate</b>
                        <p className="text-xs text-gray-400">The Percentage of visitors that become costumers.</p>
                        <div className=" mt-8 flex text-xl place-content-between items-center">
                            <p className="font-bold">12%</p>
                            %
                        </div>
                    </div>
                    <div>
                        <b className=" ">Revenue</b>
                        <p className="text-xs text-gray-400">The total revenue generated this month.</p>
                        <div className=" mt-8 flex text-xl place-content-between items-center">
                            <p className="font-bold">123,456</p>
                            $
                        </div>
                    </div>
                </div>
                </div>

                <div className="p-1 !pt-0 gap-x-4 gap-y-4 lg:gap-y-0 *:w-full lg:*:w-[32.33%] flex flex-wrap lg:flex-nowrap *:border lg:*:h-[400px] bg-white">
                    <div> 
                    <div className=' px-8 pt-4'><b className=" ">Sales Trends</b>
                        <p className="text-xs text-gray-400">A line chart showing sales trends over time.</p>
                        </div>
                        <LineChart
      xAxis={[{ data: [1,2,3,4,5,6,7] }]}
      series={[
        {
          data: [7, 8, 8, 10, 11, 15,12],
        },
        {
            data: [6, 9, 9, 12, 13, 10,15],
        },
      ]}
      width={350}
      height={225}  className=' text-center'
    /></div>
                   <div className='back'> 
                    <div className=' px-8 pt-4'><b className=" ">User Acquisition</b>
                        <p className="text-xs text-gray-400">A bar chart showing user acquisition by channel.</p>
                        </div>
                    <BarChart
        dataset={dataset}
        xAxis={[
          { scaleType: 'band', dataKey: 'month' },
        ]}
        {...chartSetting} className=' text-center'
      />
                    </div>
                    <div className='back'>
                    <div className=' px-8 pt-4'><b className=" ">Top Products</b>
                        <p className="text-xs text-gray-400">A pie chart showing the top selling products.</p>
                        </div>     
                    <PieChart
  series={[
    {
      data: [
        { id: 0, value: 72 },
        { id: 1, value: 157 },
        { id: 2, value: 150 },
        { id: 3, value: 129 },
        { id: 4, value: 119 },
        { id: 5, value: 111 }
      ],
    }
  ]}
  width={410}
  height={300}
   className=' text-center'
/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className=" -ml-4 -mb-4 bg-gradient-to-b z-40 h-40 absolute bottom-0 w-full from-transparent via-white to-white scale-[1.01]">
        
    </div>
</div>


    )
}
