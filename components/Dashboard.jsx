import Image from 'next/image'
import {
    Mail01Icon,
    Notification01Icon,
    ChartHistogramIcon,
    DatabaseAddIcon,
    ComputerVideoIcon,
    ArrowRight01Icon,
    PlusSignIcon
} from 'hugeicons-react'
import Trends from './Trends'

const Dashboard = () => {
    return (
        <section>
            {/* container */}
            <div className='flex flex-col gap-12'>

                {/* header */}
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
                {/* end of header */}

                <div className='flex flex-col md:flex-row gap-8'>
                    {/* first row */}
                    <div className='flex flex-col w-[70%] gap-3'>
                        {/* visitors, bounce rate and session duration */}
                        <div className='flex gap-6 pb-6'>
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

                        <div>
                            <Trends />
                        </div>
                    </div>

                    {/* second row */}
                    <div className='flex flex-col w-[30%] gap-10'>

                        <div className='bg-[#07BDCB] flex flex-col gap-6 p-4 rounded-lg text-slate-700'>
                            <h2 className='font-extrabold'>Premium product to be launched</h2>
                            <p className='text-sm'><span className='font-bold text-base'>$6.50</span> / Month</p>
                            <p className='text-sm'>$70 Billed Annually</p>
                            <button className='bg-[#198c94] text-white font-light p-2 rounded-md'>Notify me</button>
                        </div>

                        <div className='bg-white flex flex-col gap-6 rounded-lg px-4 py-6'>
                            {/* title */}
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-violet-300 p-2 rounded-[50%]'>
                                        <ComputerVideoIcon
                                            size={14}
                                            color={"#000000"}
                                            variant={"stroke"}
                                        />
                                    </div>
                                    <h1 className='font-semibold'>Daily Meeting</h1>
                                </div>
                                <div className='flex items-center justify-center gap-4'>
                                    <p className='text-xs bg-gray-100 p-2 rounded-3xl text-gray-500'>12+ person</p>
                                    <p className='text-xs text-gray-500'>8:00 PM</p>
                                </div>
                            </div>
                            {/* end of title */}
                            <div>
                                <div className='flex flex-col gap-2'>
                                    <h3 className='text-sm'>Meeting Leaders</h3>
                                    <div className='flex'>
                                        <Image
                                            src='/profile.jpg'
                                            width={20}
                                            height={20}
                                            alt="profile"
                                            className="object-cover w-8 h-8 rounded-[50%] border-[3px] border-white"
                                        />
                                        <Image
                                            src='/profile2.jpg'
                                            width={20}
                                            height={20}
                                            alt="profile"
                                            className="object-cover w-8 h-8 rounded-[50%] border-[3px] border-white ml-[-10px]"
                                        />
                                        <Image
                                            src='/profile3.jpg'
                                            width={20}
                                            height={20}
                                            alt="profile"
                                            className="object-cover w-8 h-8 rounded-[50%] border-[3px] border-white ml-[-10px]"
                                        />
                                    </div>
                                    <button className='text-sm bg-black px-3 py-2 text-white rounded-xl'>
                                        Join Meeting
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div
                            className='bg-white rounded-lg flex flex-col gap-5 px-4 py-6'
                        >
                            <h1>Team Members</h1>
                            {/* team members section */}
                            <div className='flex flex-col gap-5'>
                                {/* member one */}
                                <div className='flex items-center justify-between bg-gray-300 p-3 rounded-xl'>
                                    <div className='flex items-center gap-4'>
                                        <Image
                                            src='/profile2.jpg'
                                            width={80}
                                            height={80}
                                            alt="profile"
                                            className="object-cover w-10 h-10 rounded-[50%]"
                                        />
                                        <div className='flex flex-col gap-1'>
                                            <h3 className='text-xs font-bold'>Gatera Charmant</h3>
                                            <p className='text-xs text-gray-600'>Project Manager</p>
                                        </div>
                                    </div>
                                    <div className='pl-5'>
                                        <ArrowRight01Icon
                                            size={18}
                                            color={"#000000"}
                                            variant={"stroke"}
                                        />
                                    </div>
                                </div>
                                {/* end of member one */}

                                {/* member two */}
                                <div className='flex items-center justify-between bg-gray-300 p-3 rounded-xl'>
                                    <div className='flex items-center gap-4'>
                                        <Image
                                            src='/profile3.jpg'
                                            width={80}
                                            height={80}
                                            alt="profile"
                                            className="object-cover w-10 h-10 rounded-[50%]"
                                        />
                                        <div className='flex flex-col gap-1'>
                                            <h3 className='text-xs font-bold'>Janet Doe</h3>
                                            <p className='text-xs text-gray-600'>HR Head</p>
                                        </div>
                                    </div>
                                    <div className='pl-5'>
                                        <ArrowRight01Icon
                                            size={18}
                                            color={"#000000"}
                                            variant={"stroke"}
                                        />
                                    </div>
                                </div>
                                {/* end of member two */}

                                {/* member three */}
                                <div className='flex items-center justify-between bg-gray-300 p-3 rounded-xl'>
                                    <div className='flex items-center gap-4'>
                                        <Image
                                            src='/profile4.jpg'
                                            width={80}
                                            height={80}
                                            alt="profile"
                                            className="object-cover w-10 h-10 rounded-[50%]"
                                        />
                                        <div className='flex flex-col gap-1'>
                                            <h3 className='text-xs font-bold'>John Doe</h3>
                                            <p className='text-xs text-gray-600'>Deputy HR</p>
                                        </div>
                                    </div>
                                    <div className='pl-5'>
                                        <ArrowRight01Icon
                                            size={18}
                                            color={"#000000"}
                                            variant={"stroke"}
                                        />
                                    </div>
                                </div>
                                {/* end of member three */}

                                {/* member four */}
                                <div className='flex items-center justify-between bg-gray-300 p-3 rounded-xl'>
                                    <div className='flex items-center gap-4'>
                                        <Image
                                            src='/profile5.jpg'
                                            width={80}
                                            height={80}
                                            alt="profile"
                                            className="object-cover w-10 h-10 rounded-[50%]"
                                        />
                                        <div className='flex flex-col gap-1'>
                                            <h3 className='text-xs font-bold'>Ngenzi Bruce</h3>
                                            <p className='text-xs text-gray-600'>Co-ordinator</p>
                                        </div>
                                    </div>
                                    <div className='pl-5'>
                                        <ArrowRight01Icon
                                            size={18}
                                            color={"#000000"}
                                            variant={"stroke"}
                                        />
                                    </div>
                                </div>
                                {/* end of member four */}
                            </div>
                            {/* end of members section */}

                            <button className='bg-[#07BDCB] p-2 flex items-center justify-center gap-2 rounded-xl text-sm'>
                                <span className='bg-[#32f1ff] rounded-[50%]'>
                                    <PlusSignIcon
                                        size={18}
                                        color={"#000000"}
                                        variant={"stroke"}
                                    />
                                </span> Invite Member(s)
                            </button>
                        </div>

                    </div>
                </div>

            </div>
            {/* end of container */}
        </section>
    )
}

export default Dashboard