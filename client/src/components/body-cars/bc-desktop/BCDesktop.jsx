import React from 'react';
import './BCDesktop.css';

function BCDesktop(){
    return(
        <div className='bcdesktop-wrapper'>
            <div className='bcdesktop-header'>
                <h1>Explore All Vehicles</h1>
            </div>
            <div className='bcdesktop-categories'>
                <div className='bcdesktop-categories-wrapper'>

                    <div className='bcdesktop-categories-option'>
                            CARS & MINIVAN
                    </div>

                    <div className='bcdesktop-categories-option'>
                            TRUCKS
                    </div>

                    <div className='bcdesktop-categories-option'>
                            CROSSOVERS & SUVS
                    </div>

                    <div className='bcdesktop-categories-option'>
                            HYBRIDS & FUEL CELL
                    </div>

                    <div className='bcdesktop-categories-option'>
                            UPCOMING VEHICLES
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BCDesktop;