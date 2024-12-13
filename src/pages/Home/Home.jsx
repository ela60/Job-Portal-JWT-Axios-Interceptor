import React from 'react';
import Banner from './Banner';
import JobPortalSection from './JobPortalSection';
import Hotjobs from './Hotjobs';

const Home = () => {
    return (
        <div>
            <Banner />
            <Hotjobs/>
            <JobPortalSection/>
        </div>
    );
};

export default Home;