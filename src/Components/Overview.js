import React from 'react'
import Tilt from 'react-parallax-tilt';
import {Styles} from '../utils/Style';
import { technologies, services } from '../Constants';
import {motion} from 'framer-motion';
import './style.css';
function Overview() {
  return (
    <div>
        <div className='flex-row items-center pl-5 justify-center pt-3' id="Overview">
            <span className={Styles.sectionHeadText}>
                Introduction
            </span>
            <hr className='w-[35%]'></hr>
        
        <div className={Styles.sectionText}>
            Enthusiastic and dedicated Computer Science and Engineering student at Bhilai Institute of Technology, Durg. Passionate
            about exploring cutting-edge technologies, I possess a strongfoundation in frontend and backend development. Proficient in
            web development, Python, MySQL, HTML, CSS, and JavaScript, Iam eager to leverage my skills in a dynamic and innovative 
            environment to contribute to impactful projects.
        </div>
        </div>
        <div className='flex flex-wrap justify-center'>
            {services.map((service) => (
                <div>
                    <Tilt
                        key={services.icon}
                        className="parallax-effect-glare-scale"
                        perspective={500}
                        glareColor="fed7aa"
                        glareEnable={true}
                        glareMaxOpacity={0.50}
                        scale={1.02}
                        gyroscope={true}>
                        
                        <div className='p-3 m-3 flex flex-col justify-evenly items-center'>
                            <img className='h-[100px] w-[100px]' src={service.icon} alt={service.title}/>
                            <div className='m-5 text-violet-500'>
                                {service.title}
                            </div>

                        </div>

                </Tilt>
                </div>))
            }
            

        </div>
        <div className='flex flex-wrap justify-center items-center'>
            {technologies.map((technology)=>
            (
                <div
                key={technology.name}
                className='m-4 mt-5 h-[100px] w-[100px] rounded-3xl shadow-2xl border-[1px] border-violet-400
                hover:shadow-orange-300'>
                    <img className='p-2 w-[100%]' src={technology.icon} alt={technology.name}/>
                    <div className='text-violet-600 justify-center flex'></div>
                      {technology.name}
                    </div>            
            ))}
        </div>
    </div>
  )
}

export default Overview