import React from 'react'
import {GrLinkedinOption} from 'react-icons/gr';
import {GrMail} from 'react-icons/gr';

function Footer() {
  return (
    <div>
        <div className='w-[screen] bg-black '>
            <div className='flex flex-row p-2 flex-wrap justify-around'>
                <a href='' target='black' className='text-lg flex flex-row text-violet-300'>
                    <div className='h-[30px] w-[30px] rounded-full flex justify-center bg-violet-400 items-center'>
                        <GrLinkedinOption className="text-white"></GrLinkedinOption>

                    </div>
                    <span className='text-white ml-1 mt-[0.1rem]'>
                    Yashaswi
                    </span>
                </a>

            </div>

            <div className='flex flex-row p-2 flex-wrap justify-around'>
                <a href='yashaswi252@gmail.com' target='black' className='text-lg flex flex-row text-violet-300'>
                    <div className='h-[30px] w-[30px] rounded-full flex justify-center bg-violet-400 items-center'>
                        <GrMail className="text-white"></GrMail>

                    </div>
                    <span className='text-white ml-1 mt-[0.1rem]'>
                    Email
                    </span>
                </a>

            </div>

            <div className='flex flex-row p-2 flex-wrap justify-around'>
                <a href='' target='black' className='text-lg flex flex-row text-violet-300'>
                    <div className='h-[30px] w-[30px] rounded-full flex justify-center bg-violet-400 items-center'>
                        <GrLinkedinOption className="text-white"></GrLinkedinOption>

                    </div>
                    <span className='text-white ml-1 mt-[0.1rem]'>
                    Yashaswi
                    </span>
                </a>

            </div>


        </div>
    </div>
  )
}

export default Footer