import React, {useState, useEffect} from 'react';
import './InfoTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faTags, faCar, faMoneyBill, faMapMarkedAlt, faCommentDots } from '@fortawesome/free-solid-svg-icons';


function InfoTable(){

    const [mobileTable, setMobileTable] = useState((window.innerWidth<600) ? true : false);

    useEffect(()=>{
        function renderWindow(){
            if(window.innerWidth<600){
                setMobileTable(true);
            }else{
                setMobileTable(false);
            }
        }

        window.addEventListener('resize',renderWindow)
    },[setMobileTable])
    return(
        <div className='infotable-wrapper'>

            <div className='infotable-option one'>
                <div className='infotable-icon'>
                    <FontAwesomeIcon icon={faCogs}></FontAwesomeIcon>
                </div>
                <div className='infotable-text'>BUILD<br></br>& PRICE</div>
            </div>

            {mobileTable && <div className='infotable-option two'>
                <div className='infotable-icon'>
                    <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
                </div>
                <div className='infotable-text'>LOCAL SPECIALS</div>
            </div>}

            <div className='infotable-option three'>
                <div className='infotable-icon'>
                    <FontAwesomeIcon icon={faCar}></FontAwesomeIcon>
                </div>
                <div className='infotable-text'>SEARCH<br></br>INVENTORY</div>
            </div>

            <div className='infotable-option four'>
                <div className='infotable-icon'>
                    <FontAwesomeIcon icon={faMoneyBill} ></FontAwesomeIcon>
                </div>
                <div className='infotable-text'>KELLEY BLUE BOOK<br></br>TRADE-IN VALUE</div>
            </div>

            <div className='infotable-option five'>
                <div className='infotable-icon'>
                    <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>
                </div>
                <div className='infotable-text'>FIND A DEALER</div>
            </div>

            {mobileTable && <div className='infotable-option six'>
                <div className='infotable-icon'>
                    <FontAwesomeIcon icon={faCommentDots} ></FontAwesomeIcon>
                </div>
                <div className='infotable-text'>REQUEST A QUOTE</div>
            </div>}

        </div>
    )
}

export default InfoTable;