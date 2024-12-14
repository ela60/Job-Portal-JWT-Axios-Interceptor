import { div } from 'motion/react-client';
import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const Hotjobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
        
    },[])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    jobs.map(Job => <HotJobCard key={Job._id} Job={ Job} ></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default Hotjobs;