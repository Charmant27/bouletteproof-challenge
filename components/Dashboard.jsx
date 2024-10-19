import Image from 'next/image'
import { 
    Mail01Icon,
    Notification01Icon,
    ChartHistogramIcon,
    DatabaseAddIcon
 } from 'hugeicons-react'

const Dashboard = () => {
    return (
        <section>
            {/* container */}
            <div className='flex flex-col gap-12'>
                <div className='flex flex-col md:flex-row justify-between items-center'>

                    <div className='flex flex-col gap-1'>
                        <h1 className='font-extrabold text-3xl'>Dashboard</h1>
                        <p className='text-slate-500 font-light'>17th October 2024</p>
                    </div>

                    <div className='flex items-center gap-3'>
                        <button className='border rounded border-slate-400 p-1'>
                            <Mail01Icon
                                size={18}
                                color={"#9ca3af"}
                                variant={"stroke"}
                            />
                        </button>
                        <button className='border rounded border-slate-400 p-1'>
                            <Notification01Icon
                                size={18}
                                color={"#9ca3af"}
                                variant={"stroke"}
                            />
                        </button>
                        {/* user profile */}
                        <div className="flex gap-2 items-center">
                            <Image
                                src='/profile.jpg'
                                width={50}
                                height={50}
                                alt="profile"
                                className="object-cover w-10 h-10 rounded-[50%]"
                            />
                            <div>
                                <h3 className="font-bold text-sm">Nora Weston</h3>
                                <p className="text-slate-400 font-light text-xs">Site and System Engineer</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col md:flex-row gap-6'>
                    <div className='flex flex-col gap-3'>
                        {/* visitors, bounce rate and session duration */}
                        <div className='flex gap-6 flex-wrap'>
                        {/* card 1 */}
                            <div
                                className='bg-violet-300 w-[250px] text-black flex flex-col gap-5 items-center px-14 py-3 rounded-xl'
                            >
                                <div className='flex items-center gap-2'>
                                    <div className='bg-violet-200 rounded-[50%] p-1'>
                                        <ChartHistogramIcon
                                            size={18}
                                            color={"#000000"}
                                            variant={"stroke"}
                                        />
                                    </div>
                                    <h3 className='text-sm font-semibold'>Visitors</h3>
                                </div>
                                <p className='font-extrabold text-lg'>234.9k</p>
                                <p className='text-xs text-slate-600 font-light'>From last 30 days</p>
                            </div>
                            {/* end of card 1 */}

                            {/* card 2 */}
                            <div
                                className='bg-blue-200 w-[250px] text-black flex flex-col gap-5 items-center px-14 py-3 rounded-xl'
                            >
                                <div className='flex items-center gap-2'>
                                    <div className='bg-blue-100 rounded-[50%] p-1'>
                                        <DatabaseAddIcon
                                            size={18}
                                            color={"#000000"}
                                            variant={"stroke"}
                                        />
                                    </div>
                                    <h3 className='text-sm font-semibold'>Bounce rate</h3>
                                </div>
                                <p className='font-extrabold text-lg'>60%</p>
                                <p className='text-xs text-slate-600 font-light'>From last 30 days</p>
                            </div>
                            {/* end of card 2 */}

                            {/* card 3 */}
                            <div
                                className='bg-emerald-400 w-[280px] text-black flex flex-col gap-5 items-center px-14 py-3 rounded-xl'
                            >
                                <div className='flex items-center gap-2'>
                                    <div className='bg-emerald-300 rounded-[50%] p-1'>
                                        <ChartHistogramIcon
                                            size={18}
                                            color={"#000000"}
                                            variant={"stroke"}
                                        />
                                    </div>
                                    <h3 className='text-sm font-semibold'>Session duration</h3>
                                </div>
                                <p className='font-extrabold text-lg'>30 min</p>
                                <p className='text-xs text-slate-600 font-light'>From last 30 days</p>
                            </div>
                            {/* end of card 3 */}
                        </div>
                        {/* end of visitors, bounce rate and session duration */}
                    </div>
                    <div></div>
                </div>

            </div>
            {/* end of container */}
        </section>
    )
}

export default Dashboard