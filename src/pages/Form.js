import React from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Form = () => {
    return (
        <div>
            <h2 className='text-xl font-semibold'>Before you go, please leave your contact details so we can get back to you...</h2>
            <form>
            <input type="text"
                    name='name'
                    placeholder='*Your name'
                    required
                    className='w-full text-xl py-2 focus:outline-none border-b border-gray-400 mb-6' />

            <input type="email"
                    name='email'
                    placeholder='*Your email'
                    required
                    className='w-full text-xl py-2 focus:outline-none border-b border-gray-400 mb-6' />

            <input type="checkbox" name="" id="" />
            <label>
            * [Sample legal text] The personal data you have provided will be processed by XXXXX for purposes of providing you the service. The legal basis of the processing is XXXXX. Your data will not be transferred nor assigned to third parties. You can exercise your right to access, rectify and delete your data, as well as the other rights granted by law by sending an email to XXXXX. For further information, please check our privacy policy XXXXX.
            </label>
            <button
                    type="submit"
                    className='bg-violet-700 text-white rounded-xl w-full justify-center py-4 text-lg font-semibold lg:mt-12 mt-8 flex items-center gap-2'>
                    Send your answer <HiOutlineArrowNarrowRight />
                </button>
            </form>
        </div>
    );
};

export default Form;