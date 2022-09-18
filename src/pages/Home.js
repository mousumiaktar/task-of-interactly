import React from 'react';
import Buttons from '../components/Buttons';
import VideoClip from '../components/VideoClip';

const Home = () => {
    return (
        <div className='grid gap-4 grid-cols-2 items-center'>
            <div>
                <VideoClip />
            </div>
            <div>
                <Buttons />
            </div>
        </div>
    );
};

export default Home;