import React from 'react';
import '../MainMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Menu04({setIndex, }){

    function goBack(){
        setIndex(0);
    }

    return(
        <div className='hm-wrapper four'>
            <div className='nav-title'>
                <div className='nav-choices-arrow-left'>
                   <FontAwesomeIcon icon={faChevronLeft} color={'rgb(204, 0, 0)'} onClick={()=>goBack()}></FontAwesomeIcon>
                </div>
                <p>OWNERS</p>
            </div>

            <div className='nav-choices'>
                <div>Owners Homepage</div>
            </div>
            <div className='nav-choices'>
                <div>Manuals & Warranties</div>
            </div>
            <div className='nav-choices'>
                <div>Dashboard Lights</div>
            </div>
            <div className='nav-choices'>
                <div>Scheduel Service</div>
            </div>
            <div className='nav-choices'>
                <div>Audio Multimedia</div>
            </div>
            <div className='nav-choices'>
                <div>Recall Information</div>
            </div>

        </div>
    )
}

export default Menu04;