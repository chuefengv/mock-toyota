import React from 'react';
import './MenuThree.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function MenuThree({setIndex}){

    return(
            <div className='hm-wrapper'>
                <div className='nav-title'>
                    <div className='nav-choices-arrow'>
                        <FontAwesomeIcon icon={faChevronLeft} color={'rgb(204, 0, 0)'} onClick={()=>setIndex(0)}></FontAwesomeIcon>
                    </div>
                    <div className='nav-title-name'>Shopping Tools</div>
                </div>
                <div className='nav-choices' >
                    <div>Cars & Minivans</div>
                    <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                    </div>
                </div>
                <div className='nav-choices' >
                    <div>Trucks</div>
                    <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                    </div>
                </div>
                <div className='nav-choices' >
                    <div>Crosssovers & SUVs</div>
                    <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                    </div>
                </div>
                <div className='nav-choices' >
                    <div>Hyrbid & Fuel Cell</div>
                    <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                    </div>
                </div>
                <div className='nav-choices' >
                    <div>Upcoming Vehicles</div>
                    <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                    </div>
                </div>
                <div className='nav-choices' >
                    <div>Special Editions</div>
                    <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                    </div>
                </div>
                <div className='nav-choices' >
                    <div>Special Editions</div>
                    <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                    </div>
                </div>
 
            </div>
    )
}

export default MenuThree;