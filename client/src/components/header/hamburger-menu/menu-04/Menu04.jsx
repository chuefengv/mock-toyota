import React from 'react';
import '../MainMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Menu04({setIndex, }){

    function goBack(){
        setIndex(0);
    }

    return(
        <div className='hm-wrapper'>
            <div className='nav-choices'>
                <div className='nav-choices-arrow'>
                   <FontAwesomeIcon icon={faChevronLeft} color={'rgb(204, 0, 0)'} onClick={()=>goBack()}></FontAwesomeIcon>
                </div>
                <div>04</div>
            </div>
        </div>
    )
}

export default Menu04;