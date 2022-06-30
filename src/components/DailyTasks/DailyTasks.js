import React from 'react';

const DailyTasks = () => {
    return (
        <div className='mt-20'>
            <h2 className='font-bold text-4xl'>My daily tasks</h2>
            <div className=''>
                <div className="card w-96 bg-base-100 shadow-xl ml-10">
                    <button className='w-10 btn btn-xs'>Edit</button>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default DailyTasks;