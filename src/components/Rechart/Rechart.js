import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart,  Tooltip, XAxis, YAxis } from 'recharts';
import './Rechart.css'

const Rechart = () => {
    const data =
        [
            {
                sharePrice: 1254,
                month: 'January'
            },
            {
                sharePrice: 3533,
                month: 'February'
            },
            {
                sharePrice: 2264,
                month: 'Martch'
            },
            {
                sharePrice: 5645,
                month: 'April'
            },
            {
                sharePrice: 2645,
                month: 'May'
            },
            {
                sharePrice: 4645,
                month: 'June'
            }

        ];

    const data2 = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
    ];

    return (
        <div className='rechart'>
            <div>
                <LineChart width={400} height={400} data={data}>
                    <Line type="monotone" dataKey="sharePrice" stroke="#8884d8"></Line>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                </LineChart>
            </div>
            <div>
                <BarChart width={500} height={300} data={data2}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                    <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default Rechart;