import React, { useEffect, useState } from 'react';
import Works from './Works';

const DailyTasks = () => {

    const [tasks, setTask] = useState([]);


    useEffect(() => {
        fetch('https://new-onework.herokuapp.com/task')
            .then(res => res.json())
            .then(data => setTask(data));
    }, [])

    console.log(tasks)

    return (
        <div className='mt-20'>
            <h2 className='font-bold text-4xl'>My daily tasks</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
                {
                    tasks.map(task => <Works key={task._id} task={task}></Works>)
                }
            </div>
        </div>
    );
};

export default DailyTasks;