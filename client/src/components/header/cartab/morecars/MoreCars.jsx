import React from 'react';
import '../carsandmini/CarsAndMini.css';
import morecar from '../../../../assets/more-car.svg';
import moreracing from '../../../../assets/more-racing.svg';

function MoreCars(){

    return(
        <div className='cam-wrapper'>
            <div className='cam-car-display more'>      
                <div className='cam-car-option-wrapper'>
                    <div className='cam-car-option-image'><img src={morecar} alt=''></img></div>
                    <div className='cam-car-option-more'>Toyota bZ4X Concept</div>
                </div>
                <div className='cam-car-option-wrapper'>
                    <div className='cam-car-option-image'><img src={moreracing} alt=''></img></div>
                    <div className='cam-car-option-more'>GR Hot Hatch</div>
                </div>
            </div>
        </div>
    )
}

export default MoreCars;