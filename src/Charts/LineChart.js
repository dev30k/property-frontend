/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'January',
        Revenue: 4000,
        Expenses: 2400,
        amt: 2400,
    },
    {
        name: 'February',
        Revenue: 3000,
        Expenses: 1398,
        amt: 2210,
    },
    {
        name: 'March',
        Revenue: 2000,
        Expenses: 9800,
        amt: 2290,
    },
    {
        name: 'April',
        Revenue: 2780,
        Expenses: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        Revenue: 1890,
        Expenses: 4800,
        amt: 2181,
    },
    {
        name: 'June',
        Revenue: 2390,
        Expenses: 3800,
        amt: 2500,
    },

];

class CustomizedLabel extends PureComponent {
    render() {
        const { x, y, stroke, value } = this.props;

        return (
            <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
                {value}
            </text>
        );
    }
}

class CustomizedAxisTick extends PureComponent {
    render() {
        const { x, y, stroke, payload } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
                    {payload.value}
                </text>
            </g>
        );
    }
}

export default class Example extends PureComponent {

    render() {
        return (
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 0,
                        left: 4,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Expenses" stroke="#EE4B2B" label={<CustomizedLabel />} />
                    <Line type="monotone" dataKey="Revenue" stroke="#82ca9d" label={<CustomizedLabel />} />
                </LineChart>

            </ResponsiveContainer>


        );
    }
}
