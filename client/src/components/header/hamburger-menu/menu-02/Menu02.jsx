import React from 'react';
import '../MainMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Menu02({setIndex}){

    function goBack(){
        setIndex(0);
    }

    return(
        <div className='hm-wrapper two'>
            <div className='nav-title'>
                <div className='nav-choices-arrow-left'>
                   <FontAwesomeIcon icon={faChevronLeft} color={'rgb(204, 0, 0)'} onClick={()=>goBack()}></FontAwesomeIcon>
                </div>
                <p>SHOPPING TOOLS</p>
            </div>

            <div className='nav-choices'>
                <div>Build & Price</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>Local Specials</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>Search Inventory</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>Find a Dealer</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>Request a Quote</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>What Fits My Budget</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>Trade-In Value</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>View Brochures</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>Accesories</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>Payment Estimator</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
        </div>
    )
}

export default Menu02;