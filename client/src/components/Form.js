import React from 'react';
import { useForm } from "react-hook-form";
import List from './List';

export default function Form() {
    const { register, handleSubmit, resetField } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div className="form max-w-sm mx-auto w-96">
            <h1 className='font-bold pb-4 text-xl'>Transection</h1>
            <form id='form' onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4">
                    <div className="input-group">
                        <input type="text" placeholder='Sallary | House Rent | Supermarket' className='form-input' {...register("name")} />
                    </div>
                    <select className='form-input' {...register("type")}>
                        <option value="Investment" defaultValue>Investment</option>
                        <option value="Expense">Expense</option>
                        <option value="Savings">Savings</option>
                    </select>
                    <div className="input-group">
                        <input type="text" placeholder='Amount' className='form-input' {...register("amount")} />
                    </div>
                    <div className="submin-btn">
                        <button className='border py-2 text-white bg-indigo-500 w-full'>Make Transection</button>
                    </div>
                </div>
            </form>

            <List></List>
        </div >
    )
}
