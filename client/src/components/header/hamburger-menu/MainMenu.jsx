import React, {useState} from 'react';
import './MainMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function MenuOne({setIndex, setMenu01, setMenu02, setMenu03, setMenu04}){

    function openMenu01(){
        setIndex(1);
        setMenu01(true);
        setMenu02(false);
        setMenu03(false);
        setMenu04(false);

    }

    function openMenu02(){
        setIndex(1);
        setMenu02(true);
        setMenu01(false);
        setMenu03(false);
        setMenu04(false);
    }

    function openMenu03(){
        setIndex(1);
        setMenu03(true);
        setMenu02(false);
        setMenu04(false);
        setMenu01(false);
    }

    function openMenu04(){
        setIndex(1);
        setMenu04(true);
        setMenu02(false);
        setMenu03(false);
        setMenu01(false);
    }

    return(
            <div className='hm-wrapper main'>
                <div className='nav-choices' onClick={()=>openMenu01()}>
                    <div>Vehicles</div>
                    <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                    </div>
                </div>
                <div className='nav-choices' onClick={()=>openMenu02()}>
                    <div>Shopping Tools</div>
                    <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                    </div>
                </div>
                <div className='nav-choices'>
                    <div>Find a Dealer</div>
                </div>
                <div className='nav-choices' onClick={()=>openMenu03()}>
                    <div>Helpful Links</div>
                    <div className='nav-choices-arrow'>
                    <FontAwesomeIcon icon={faChevronRight} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                    </div>
                </div>
                <div className='nav-choices' onClick={()=>openMenu04()}>
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