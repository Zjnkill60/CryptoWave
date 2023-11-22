'use client'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';



const Charts = ({data} :any) => {
  return (
    <>
   
    <ResponsiveContainer width="100%" height="100%" >
      <AreaChart width={730} height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="day" className='text-sm sm:text-xs ' />
        <YAxis  className='text-sm sm:text-xs' />
        <Tooltip />
        <Area className='text-sm' type="monotone" dataKey="View" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area className='text-sm' type="monotone" dataKey="Follow" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
    </ResponsiveContainer>
  
    </>
  );
};

export default Charts;