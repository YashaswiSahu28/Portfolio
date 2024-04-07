import React from 'react';
import {Styles} from '../utils/Style';
import contact from '../assets/contact.jpeg';


function Contact() {
  return (
    <div>
        <div className='flex-row items-center pl-5 justify-center pt-3' id="Overview">
            <span className={Styles.sectionHeadText}>
                Contact
            </span>
            <hr className='w-[35%]'></hr>
        </div>
    
<div className='mt-5'>
    <div className='flex flex-row flex-wrap justify-around'>
        <div className='lg:w-[40%]'>
            <form className='m-5 flex flex-col gap-3'>
                <label className='flex flex-col gap-3'>
                    <span className='text-violwt-700 font-medium mb-2'>
                        Your Name
                    </span>
                    <input
                    type="text"
                    name="name"
                    placeholder="What's your good name?"
                    className='bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 
                    rounded-lg outline-none border-none font-medium'></input>
                </label>

                <label className='flex flex-col gap-3'>
                    <span className='text-violwt-700 font-medium mb-2'>
                        Your Email
                    </span>
                    <input
                    type="email"
                    name="email"
                    placeholder="What's your email address?"
                    className='bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 
                    rounded-lg outline-none border-none font-medium'></input>
                </label>

                <label className='flex flex-col gap-3'>
                    <span className='text-violwt-700 font-medium mb-2'>
                        Your Message
                    </span>
                    <textarea
                    row={5}
                    name="text"
                    placeholder="What's your good name?"
                    className='bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 
                    rounded-lg outline-none border-none font-medium'>

                    </textarea>
                </label>

                <button type='submit' className='bg-slate-100
                hover:shadow-orange-300 py-3 px-8 mb-4 m-4 rounded-xl outline-none
                w-fit text-black font-bold shadow-md shadow-primary'>
                    Submit

                </button>

            </form>

        </div>
        <div className='lg:w-[50%]'>
            <img src={contact} alt='any image'/>
        </div>
    </div>
</div>
    </div>
  )
}

export default Contact