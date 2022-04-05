import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const Rechart = () => {
    const data= 
    [
        {
            uv: 3533,
        },
        {
            uv:5645,
        },
        {
            uv:2645,
        },
        {
            uv:4645,
        },
        {
            uv:3655,
        }
    ];
    return (
        <div>
          <div>
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8"></Line>
                <XAxis></XAxis>
                <YAxis></YAxis>
            </LineChart>
        </div> 
        <div>
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8"></Line>
                <XAxis></XAxis>
                <YAxis></YAxis>
            </LineChart>
        </div> 

        </div>
        
        
        

    );
};

export default Rechart;