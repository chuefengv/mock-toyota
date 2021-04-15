import React from 'react';
import '../MainMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Menu01({setIndex}){

    function goBack(){
        setIndex(0);
    }

    return(
        <div className='hm-wrapper one'>
            <div className='nav-title'>
                <div className='nav-choices-arrow-left'>
                   <FontAwesomeIcon icon={faChevronLeft} color={'rgb(204, 0, 0)'} onClick={()=>goBack()}></FontAwesomeIcon>
                </div>
                <p>VEHICLES</p>
            </div>

            <div className='nav-choices'>
                <div>Cars & Minivan</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>Trucks</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>Crossovers & SUVs</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>Hyrbids & Fuel Cell</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>Upcoming Vehicles</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>Special Edition</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>All Vehicles</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
        </div>
    )
}

export default Menu01;