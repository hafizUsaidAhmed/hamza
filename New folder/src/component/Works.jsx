import React from 'react';
import '../style/work.css'
import About from './About';
import { Image } from 'antd';


const Works = ({children}) => {


    return (
        <About>
            <div className="workContainer" id='MyWorks'>
                <h2 className='Heading'>My Works</h2>

                <div className="work-image-container ">

                    <Image src='https://cdn.dorik.com/5e373b6c43a72a001f56dbf6/images/p-1_o17ux82c.jpg' alt="image" className='work-images' data-aos="fade-right"/>
                    <Image src='https://cdn.dorik.com/5e373b6c43a72a001f56dbf6/images/p-1_o17ux82c.jpg' alt="image" className='work-images' data-aos="fade-right"/>

                </div>

            </div>
            {children}

        </About>
    )
}

export default Works
