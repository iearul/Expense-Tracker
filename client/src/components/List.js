import React from 'react';
import 'boxicons';
const obj = [
    {
        name: "Saving",
        color: '#f9c74f'
    },
    {
        name: "Investment",
        color: '#287828'
    },
    {
        name: "Expense",
        color: '#144270'
    }
]
export default function List() {
    return (
        <div className="flex flex-col py-6 gap-3">
            <h1 className='py-4 font-bold text-xl'>History</h1>
            {obj.map((v, i) => <Transection key={i} category={v}></Transection>)}
        </div>
    )
}

function Transection({ category }) {
    if (!category) return null;
    return (
        <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{ borderRight: `8px solid ${category.color ?? "#144270"}` }}>
            <button className='px-3'><box-icon size="sm" name="trash" color={category.color ?? "#144270"}></box-icon></button>
            <span className='block w-full'>{category.name ?? ""}</span>
        </div>
    );
}