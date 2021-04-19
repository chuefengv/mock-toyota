import React from 'react';
import './InfoTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faTags, faCar, faMoneyBill, faMapMarkedAlt, faCommentDots } from '@fortawesome/free-solid-svg-icons';


function InfoTable(){
    return(
        <div className='infotable-wrapper'>
            <div className='infotable-option one'>
                <div className='infotable-icon'>
                    <FontAwesomeIcon icon={faCogs}></FontAwesomeIcon>
                </div>
                <div>BUILD<br></br>& PRICE</div>
            </div>

            <div className='infotable-option two'>
                <div className='infotable-icon'>
                    <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
                </div>
                <div>LOCAL SPECIALS</div>
            </div>

            <div className='infotable-option three'>
                <div className='infotable-icon'>
                    <FontAwesomeIcon icon={faCar}></FontAwesomeIcon>
                </div>
                <div>SEARCH<br></br>INVENTORY</div>
            </div>

            <div className='infotable-option four'>
                <div className='infotable-icon'>
                    <FontAwesomeIcon icon={faMoneyBill} ></FontAwesomeIcon>
                </div>
                <div>KELLEY BLUE BOOK<br></br>TRADE-IN VALUE</div>
            </div>

            <div className='infotable-option five'>
                <div className='infotable-icon'>
                    <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>
                </div>
                <div>FIND A DEALER</div>
            </div>

            <div className='infotable-option six'>
                <div className='infotable-icon'>
                    <FontAwesomeIcon icon={faCommentDots} ></FontAwesomeIcon>
                </div>
                <div>REQUEST A QUOTE</div>
            </div>

        </div>
    )
}

export default InfoTable;