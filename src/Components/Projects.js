import React from 'react'
import {Styles} from '../utils/Style';
import {projects} from '../Constants';
import Tilt from 'react-parallax-tilt';
import {SiGithub, SiNetlify} from 'react-icons/si';

function Projects() {
  return (
    <div>
        <div className='flex-row items-center pl-5 justify-center pt-3' id="Overview">
            <span className={Styles.sectionHeadText}>
                Projects
            </span>
            <hr className='w-[35%]'></hr>
        
        <div className={Styles.sectionText}>
        Enthusiastic and dedicated Computer Science and Engineering student at Bhilai Institute of Technology, Durg. Passionate
        about exploring cutting-edge technologies, I possess a strongfoundation in frontend and backend development.
        </div>
        </div>
        <div className='flex flex-wrap p-8 justify-evenly items-center'>
          {projects.map((project)=>
            (
            <Tilt key={projects.name} className="w-[300px] h-[500px] flex xlex-col justify-evenly
             items-center shadow-2xl m-10 hover:shadow-2xl 
             hover:shadow-pink-100 p-3 rounded-xl border-2 border-violet-900">
                <div className="w-full h-full p-10px">
                  <div className='flex flex-col justify-around items-center mb-3 h-full'>
                    <img src={project.image} alt={project.name} className="h-[100px] w-[150px] self-center border-2 
                    border-pink-200 rounded-2xl"/>

                    <div className='text-2xl text-center text-violet-600 font-extrabold'>
                      {project.name}
                    </div>

                    <div className=' text-center text-20px'>
                      <span className='text-orange-500 '>
                        {project.description}
                      </span>
                    </div>
                    <div className="h-[40px] w-[40px]  bg-slate-50 rounded-full shadow-lg shadow-violet-500
                    flex justify-center items-center ">
                      <a href={project.source_code_link} target='blank'>
                        <SiGithub className='text-3xl font-bold text-violet-600'></SiGithub>
                      </a>
                    </div>
                  </div>
                </div>
            </Tilt>
            ))}
        </div>
    </div>
  )
}

export default Projects
