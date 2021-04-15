import React, { useState } from 'react';
import './Header.css';
import toyota from '../../assets/toyota.svg';
import olympic from '../../assets/olympic.svg'
import paralympic from '../../assets/paralympic.svg'
import toyota_big from '../../assets/toyota_big.svg'
import location from '../../assets/location.svg';
import { Fade as Hamburger } from 'hamburger-react'
import {Collapse} from '@material-ui/core'
import MenuOne from './hamburger-menu/MainMenu';
import LoadedMenu from './hamburger-menu/LoadedMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


import { Carousel } from 'react-responsive-carousel';


function Header({openMenu, setOpenMenu}){

    const [index, setIndex] = useState(0);
    const [menu01, setMenu01] = useState(false);
    const [menu02, setMenu02] = useState(false);
    const [menu03, setMenu03] = useState(false);
    const [menu04, setMenu04] = useState(false);

    function menuFunc(){
        setOpenMenu(!openMenu)


        if(document.body.style.overflow === 'hidden'){
            document.body.style.overflow = 'scroll'
            setIndex(0)
        }else{
            document.body.style.overflow = 'hidden'

        }
        window.scrollTo(0,0);
    }

    return(
        <div className='header-wrapper'>
            <div className='header-logo'>
                <div className='header-logo-box'>
                    <img src={toyota} alt=''></img>
                </div>
            </div>

            <div className='header-toyota'>
                <img src={toyota_big} alt=''></img>   
            </div>

            <div className='header-olympics'>
                <img src={olympic} alt=''></img>
                <img src={paralympic} alt=''></img>
            </div>

            <div className='header-nav-two'>
            <div class='header-nav-two-select'>
                    <div>Select Tools</div>
                    <FontAwesomeIcon icon={faChevronDown} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>

                </div>
                <div class='header-nav-two-select'>
                    <div>Shopping Tools</div>
                    <FontAwesomeIcon icon={faChevronDown} color={'rgb(204, 0, 0)'} ></FontAwesomeIcon>
                </div>
                <div class='header-nav-two-select'>
                    Find a Dealer
                </div>
                <div class='header-nav-two-select'>
                    Build & Price
                </div>
                <div class='header-nav-two-red'>
                    <div>
                        Local Specials
                    </div>
                </div>
            </div>
{/* 
            <div className='header-nav'>
                <div className='header-nav-location'>
                    <img src={location} alt=''></img>
                    <p>90210</p>
                </div>
                <div className='header-nav-ham'>
                    <Hamburger label="Show menu" size={26} className='header-hamburger' onToggle={()=>menuFunc()}/>
                </div>
            </div> */}

            <Collapse in={openMenu} timeout={400} className='menu'>
                <Carousel selectedItem={index} showArrows={false} showIndicators={false} showThumbs={false} showStatus={false}>
                    <div>
                        <MenuOne setIndex={setIndex} setMenu01={setMenu01} setMenu02={setMenu02} setMenu03={setMenu03} setMenu04={setMenu04}/>
                    </div>
                    <div>
                        <LoadedMenu setIndex={setIndex} menu01={menu01} menu02={menu02} menu03={menu03} menu04={menu04} setMenu01={setMenu01} setMenu02={setMenu02} setMenu03={setMenu03} setMenu04={setMenu04}/>
                    </div>
                </Carousel>
            </Collapse>


        </div>
    );
};

export default Header;