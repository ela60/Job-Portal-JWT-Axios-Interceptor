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
            <div>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={ job} ></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default Hotjobs;