import React from 'react';

const Buttons = () => {
    return (
        <div>
            <button className='bg-gray-300 p-3 text-lg rounded-full flex w-80 mb-4'>
                <p className='bg-violet-700 px-2 rounded-full text-white'>A</p>
                <p className='ml-2'>Campaign Structure</p>
            </button>

            <button className='bg-gray-200 p-3 text-lg rounded-full flex w-80 mb-4'>
                <p className='bg-violet-700 px-2 rounded-full text-white'>B</p>
                <p className='ml-2'>Learn Facebook basics</p>
            </button>

            <button className='bg-gray-200 p-3 text-lg rounded-full flex w-80'>
                <p className='bg-violet-700 px-2 rounded-full text-white'>C</p>
                <p className='ml-2'>3rd choice</p>
            </button>
        </div>
    );
};

export default Buttons;