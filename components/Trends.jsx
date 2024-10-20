import { BarChart } from '@mui/x-charts/BarChart';
import Customer from './Table';

export default function Trends() {
    return (
        <section className='flex flex-col gap-6'>
            <div className='bg-white px-3 py-6 flex flex-col gap-6 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold capitalize'>Website visits</h2>
                <button className='bg-[#07BDCB] px-6 py-2 text-sm rounded-lg'>
                    Export
                </button>
            </div>
                <BarChart
                    series={[
                        { data: [35, 44, 24, 34] },
                        { data: [51, 6, 49, 30] },
                        { data: [15, 25, 30, 50] },
                        { data: [60, 50, 15, 25] },
                    ]}
                    height={290}
                    width={700}
                    xAxis={[{ data: ['Trend1', 'Trend2', 'Trend3', 'Trend4'], scaleType: 'band' }]}
                    margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                    className='text-slate-300'
                />
            </div>
            <Customer />
        </section>
    );
}
