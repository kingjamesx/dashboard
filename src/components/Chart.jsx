import React from 'react'
import { AreaChart,XAxis,YAxis,CartesianGrid,Tooltip,Area,Legend} from 'recharts'
import {data} from '../data/index'
const Chart = () => {
  return (
    <div>
        <AreaChart width={750} height={360} data={data}
  margin={{ top: 90, right: 62, left: 32, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#fff" stopOpacity={0.1}/>
      <stop offset="95%" stopColor="#fff" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#3751FF" stopOpacity={0.1}/>
      <stop offset="95%" stopColor="#3751FF" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis orientation='right'/>
  <CartesianGrid  vertical={false} />
  <Tooltip />
  <Legend verticalAlign="top" height={36}/>
  <Area type="monotone" dataKey="Today" stroke="#DFE0EB" fillOpacity={2} fill="url(#colorUv)" strokeWidth={2} />
  <Area type="monotone" dataKey="Yesterday" stroke="#3751FF" fillOpacity={2} fill="url(#colorPv)" strokeWidth={2} />
</AreaChart>
    </div>
  )
}

export default Chart