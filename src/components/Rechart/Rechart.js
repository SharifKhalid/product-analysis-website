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
            month: 'January',
            profit: 4000,
            sell: 2400,
            amt: 2400,
        },
        {
            month: 'February',
            profit: 3000,
            sell: 1398,
            amt: 2210,
        },
        {
            month: 'Martch',
            profit: 2000,
            sell: 9800,
            amt: 2290,
        },
        {
            month: 'April',
            profit: 2780,
            sell: 3908,
            amt: 2000,
        },
        {
            month: 'May',
            profit: 1890,
            sell: 4800,
            amt: 2181,
        },
        {
            month: 'June',
            profit: 2390,
            sell: 3800,
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
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sell" stackId="a" fill="#8884d8" />
                    <Bar dataKey="profit" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default Rechart;