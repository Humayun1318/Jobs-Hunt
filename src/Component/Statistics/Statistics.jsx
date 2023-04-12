import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { assignment: 'Assignment 1', number: 60 },
    { assignment: 'Assignment 2', number: 60 },
    { assignment: 'Assignment 3', number: 60 },
    { assignment: 'Assignment 4', number: 60 },
    { assignment: 'Assignment 5', number: 60 },
    { assignment: 'Assignment 6', number: 60 },
    { assignment: 'Assignment 7', number: 60 },
];

const Statistics = () => {
    return (
        <div className='mt-4 container' style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <ComposedChart
                    data={data}
                    margin={{ top: 50, right: 20, bottom: 5, left: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="assignment" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="number" barSize={20} fill="#090954" />
                    <Line type="monotone" dataKey="number" stroke="#ff0000" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;
