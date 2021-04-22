import React from 'react';
import './BodyInfo.css';
import OptionOne from './option-one/OptionOne';

function BodyInfo(){
    return(
        <div className='bodyinfo-wrapper'>

            <div className='bodyinfo-title'>
                <h1>Discover Toyota</h1>
            </div>

            <ul className='bodyinfo-sections'>
                <li className='bodyinfo-option one'>
                    Featured
                </li>
                <li className='bodyinfo-option two'>
                    Vehicles & Technology
                </li>
                <li className='bodyinfo-option three'>
                    Offers & Services
                </li>
                <li className='bodyinfo-option four'>
                    Community
                </li>
            </ul>

            <OptionOne />
            
        </div>
    )
}

export default BodyInfo;