import React, {useEffect, useState} from 'react';
import './BCDCars.css';
import Axios from 'axios';
import morecar from '../../../../assets/more-car.svg';
import moreracing from '../../../../assets/more-racing.svg';

function CrossAndSuvs(){

    return(
        <div className='bcd-car-display-wrapper more'>
                <div className='bcd-car-option-wrapper more'>
                    <div className='bcd-car-option-more-one'>
                        <div className='bcd-car-option-image'><img src={morecar} alt=''></img></div>
                        <div className='bcd-car-option-more'>Toyota bZ4X Concept</div>
                    </div>
                </div>
                <div className='bcd-car-option-wrapper more two'>
                    <div className='bcd-car-option-more-two'>
                        <div className='bcd-car-option-image'><img src={moreracing} alt=''></img></div>
                        <div className='bcd-car-option-more'>GR Hot Hatch</div>
                    </div>
                </div>
        </div>
    )
}

export default CrossAndSuvs;