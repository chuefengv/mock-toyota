import React, {useState} from 'react';
import CarsAndMinivan from './BCDCars/CarsAndMinivan';
import Trucks from './BCDCars/Trucks';
import CrossAndSuvs from './BCDCars/CrossAndSuvs';
import Hybrids from './BCDCars/Hybrids';
import Upcoming from './BCDCars/Upcoming';
import './BCDesktop.css';

function BCDesktop(){

    const [index, setIndex] = useState(0);

    return(
        <div className='bcdesktop-wrapper'>
            <div className='bcdesktop-header'>
                <h1>Explore All Vehicles</h1>
            </div>
            <div className='bcdesktop-categories'>
                <div className='bcdesktop-categories-wrapper'>
                    <div className='bcdesktop-categories-option' onClick={()=>setIndex(0)}>
                        {index===0 && <div className='bcdesktop-categories-option-selected'>CARS & MINIVAN</div>}
                        {index!==0 && <div className='bcdesktop-categories-option-unselected'>CARS & MINIVAN</div>}
                    </div>

                    <div className='bcdesktop-categories-option' onClick={()=>setIndex(1)}>
                        {index===1 && <div className='bcdesktop-categories-option-selected'>TRUCKS</div>}
                        {index!==1 && <div className='bcdesktop-categories-option-unselected'>TRUCKS</div>}
                    </div>

                    <div className='bcdesktop-categories-option' onClick={()=>setIndex(2)}>
                        {index===2 && <div className='bcdesktop-categories-option-selected'>CROSSOVERS & SUVs</div>}
                        {index!==2 && <div className='bcdesktop-categories-option-unselected'>CROSSOVERS & SUVs</div>}
                    </div>

                    <div className='bcdesktop-categories-option' onClick={()=>setIndex(3)}>
                        {index===3 && <div className='bcdesktop-categories-option-selected'>HYBRID & FUEL CELL</div>}
                        {index!==3 && <div className='bcdesktop-categories-option-unselected'>HYBRID & FUEL CELL</div>}
                    </div>

                    <div className='bcdesktop-categories-option' onClick={()=>setIndex(4)}>
                        {index===4 && <div className='bcdesktop-categories-option-selected'>UPCOMING VEHICLES</div>}
                        {index!==4 && <div className='bcdesktop-categories-option-unselected'>UPCOMING VEHICLES</div>}
                    </div>
                </div>
            </div>
            <div className='bcdesktop-categories-car-wrapper'>
                {index===0 && <CarsAndMinivan />}
                {index===1 && <Trucks />}
                {index===2 && <CrossAndSuvs />}
                {index===3 && <Hybrids />}
                {index===4 && <Upcoming />}

            </div>
        </div>
    )
}

export default BCDesktop;