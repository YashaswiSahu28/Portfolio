import Reactfro from "react";

import { Styles } from "../utils/Style";
import Resume from '../assets/YASHASWI_SAHU_RESUME.pdf';
import Profile from '../assets/Profile.png';
import {TiArrowDownOutline} from "react-icons/ti"
import '../App.css'

function About(){
    return(
        <div className="flex flex-wrap
         items-center mt-10 p-10" id='Home'>

            <div className="flex-1 py-4">
                <span className= {Styles.heroHeadText}>
                    Hi, I'm <span className='text-orange-600'>
                        Yashaswi Sahu
                    </span>
                    <br/>
                    <span className={Styles.heroSubText}>
                        I am a MERN Stack Developer &
                    </span>
                    <span className={Styles.heroSubText}>
                       
                         App Developer & Web Designer
                    </span>

                </span>
                <br/>
                <div className="w-[14rem] mt-[10%]">
                    <a
                    href={Resume}
                    download="Resume"
                    target="blank"
                    rel="noreferrer"
                    >
                        <div className="p-4 mt-2 w-[13rem] rounded-xl text-orange-500 
                        flex justify-center border-2 border-orange-500 
                        hover:border-violet-500 shadow-lg hover:color:orange hover:text-purple-800 hover:bg-orange-500"><TiArrowDownOutline className="text-lg mr-3 mt-1 text-orange-500">
                            </TiArrowDownOutline> Resume
                        </div>

                    </a>
                </div>
            </div>
            <div className="flex flex-wrap">
                <img src={Profile} width="550" height="550" alt='profile' className="element object-contain p-16"/>
            </div>
        </div>
    )
    
}
export default About;