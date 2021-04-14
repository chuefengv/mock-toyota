import React from 'react';
import './MenuOne.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function MenuOne({setIndex}){

    return(
            <div className='hm-wrapper'>
                <div className='nav-choices' onClick={()=>setIndex(1)}>
                    <div>Vehicles</div>
                    <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                    </div>
                </div>
                <div className='nav-choices' onClick={()=>setIndex(2)}>
                    <div>Shopping Tools</div>
                    <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                    </div>
                </div>
                <div className='nav-choices'>
                    <div>Find a Dealer</div>
                </div>
                <div className='nav-choices' onClick={()=>setIndex(3)}>
                    <div>Helpful Links</div>
                    <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                    </div>
                </div>
                <div className='nav-choices' onClick={()=>setIndex(4)}>
                    <div>Owners</div>
                    <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                    </div>
                </div>
                <div className='nav-choices-extra'>
                        <div>FAQ</div>
                        <div>Español</div>
                        <div>Careers</div>
                </div>
            </div>
    )
}

export default MenuOne;