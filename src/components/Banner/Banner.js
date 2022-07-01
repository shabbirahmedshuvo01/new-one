import React from 'react';
import DailyTasks from '../DailyTasks/DailyTasks';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img style={{ height: '400px', width: '400px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfwgHAy2Y8VC3wlkTatDNLirXVTrNEWnam3A&usqp=CAU" />
                    <div>
                        <h1 className="text-5xl font-bold">Nature of our World</h1>
                        <p className="py-6">In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they’re still beautiful. </p>
                        <button className="btn btn-primary">See others</button>
                    </div>
                </div>
            </div>
            <div>
                <DailyTasks></DailyTasks>
            </div>
        </div>
    );
};

export default Banner;