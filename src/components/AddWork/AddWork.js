import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddWork.css'

const AddWork = () => {
    const [box, setBox] = useState('');

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        setBox(data.checkbox)

        const url = `https://new-onework.herokuapp.com/task`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log("result", result)

                if (result.acknowledged) {
                    alert('add item done')
                }
                else {
                    alert('failed to add')
                }

            })

        if (box === false) {
            alert('please agree conditions')
        }
    };

    return (
        <div className=''>
            <h2 className="text-2xl text-center font-bold mt-5">Add New Items</h2>
            <div className='w-50 from-work'>
                <form className='flex flex-col w-80 mt-10 gap-2' onSubmit={handleSubmit(onSubmit)}>
                    <input className='input input-bordered' type="text" placeholder='name' {...register("name")} />
                    <input className='input input-bordered' type="text" placeholder='image URL' {...register("img")} />
                    <input className='input input-bordered' type="text" placeholder='description' {...register("description")} />
                    <p>Remeber Me</p>
                    <input className='' type="checkbox" {...register("checkbox")} />
                    <input className='btn btn-secondery' type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddWork;