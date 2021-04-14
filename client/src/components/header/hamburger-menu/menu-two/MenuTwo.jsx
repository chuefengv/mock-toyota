import React from 'react';
import './MenuTwo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function MenuTwo({setIndex}){

    return(
            <div className='hm-wrapper'>
                <div className='nav-title'>
                    <div className='nav-choices-arrow'>
                        <FontAwesomeIcon icon={faChevronLeft} color={'rgb(204, 0, 0)'} onClick={()=>setIndex(0)}></FontAwesomeIcon>
                    </div>
                    <div className='nav-title-name'>Vehicle</div>
                </div>
                <div className='nav-choices' onClick={()=>setIndex(1)}>
                    <div>Cars & Minivans</div>
                    <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                    </div>
                </div>
                <div className='nav-choices' onClick={()=>setIndex(1)}>
                    <div>Trucks</div>
                    <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                    </div>
                </div>
                <div className='nav-choices' onClick={()=>setIndex(1)}>
                    <div>Crosssovers & SUVs</div>
                    <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                    </div>
                </div>
                <div className='nav-choices' onClick={()=>setIndex(1)}>
                    <div>Hyrbid & Fuel Cell</div>
                    <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                    </div>
                </div>
                <div className='nav-choices' onClick={()=>setIndex(1)}>
                    <div>Upcoming Vehicles</div>
                    <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                    </div>
                </div>
                <div className='nav-choices' onClick={()=>setIndex(1)}>
                    <div>Special Editions</div>
                    <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                    </div>
                </div>
                <div className='nav-choices' onClick={()=>setIndex(1)}>
                    <div>All Vehicles</div>
                    <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                    </div>
                </div>
            </div>
    )
}

export default MenuTwo;