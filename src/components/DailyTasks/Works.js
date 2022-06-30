import React from 'react';

const Works = ({ task }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ml-10">
                <div className="card-body">
                    <button className='w-10 btn btn-xs'>Edit</button>
                    <h2 className="card-title">{task.name}</h2>
                    <p>{task.description}</p>
                </div>
                <figure><img src={task.img} alt="Shoes" /></figure>
            </div>
        </div>
    );
};

export default Works;