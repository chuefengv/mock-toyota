import React from 'react';
import '../MainMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Menu03({setIndex}){

    function goBack(){
        setIndex(0);
    }

    return(
        <div className='hm-wrapper three'>
            <div className='nav-title'>
                <div className='nav-choices-arrow-left'>
                   <FontAwesomeIcon icon={faChevronLeft} color={'rgb(204, 0, 0)'} onClick={()=>goBack()}></FontAwesomeIcon>
                </div>
                <p>HELPFUL LINKS</p>
            </div>

            <div className='nav-choices'>
                <div>Safety Recalls & Service Campaigns</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>Dealers</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>Toyota Financial Services</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>ToyotaCare</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>Toyota Safety Sense</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>Audio Multimedia</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>Mobile Phone Compatability</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>Connected Services</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>Toyota Mobility Features</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>Toyota Fleet</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='nav-choices'>
                <div>Toyota Rent A Car</div>
                <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
            </div>
        </div>
    )
}

export default Menu03;