import React from 'react';
import '../MainMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faCog, faTag, faCar, faMapMarkerAlt, faCommentDots, faHandHoldingUsd, faMoneyBill, faBookOpen, faDrumSteelpan, faCalculator, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

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

            <div className='nav-choices two'>
            <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faCog} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
                <div>Build & Price</div>

            </div>
            <div className='nav-choices two'>
            <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faTag} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
                <div>Local Specials</div>

            </div>
            <div className='nav-choices two'>
            <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faCar} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
                <div>Search Inventory</div>

            </div>
            <div className='nav-choices two'>
            <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
                <div>Find a Dealer</div>

            </div>
            <div className='nav-choices two'>
            <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faCommentDots} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
                <div>Request a Quote</div>

            </div>
            <div className='nav-choices two'>
            <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faHandHoldingUsd} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
                <div>What Fits My Budget</div>

            </div>
            <div className='nav-choices two'>
            <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faMoneyBill} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
                <div>Trade-In Value</div>

            </div>
            <div className='nav-choices two'>
            <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faBookOpen} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
                <div>View Brochures</div>

            </div>
            <div className='nav-choices two'>
            <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faDrumSteelpan} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
                <div>Accesories</div>

            </div>
            <div className='nav-choices two'>
            <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faCalculator} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
                <div>Payment Estimator</div>
            </div>
            <div className='nav-choices two'>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faExchangeAlt} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
                <div>Compare Vehicles</div>

            </div>
        </div>
    )
}

export default Menu02;