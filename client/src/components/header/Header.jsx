import React from 'react';
import './Header.css';
import toyota from '../../assets/toyota.svg';
import olympic from '../../assets/olympic.svg'
import paralympic from '../../assets/paralympic.svg'
import location from '../../assets/location.svg';
import { Fade as Hamburger } from 'hamburger-react'
import {Collapse} from '@material-ui/core'
import HamburgerMenu from './hamburger-menu/HamburgerMenu';


function Header({openMenu, setOpenMenu}){

    function menuFunc(){
        setOpenMenu(!openMenu)

        if(document.body.style.overflow === 'hidden'){
            document.body.style.overflow = 'scroll'
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


            <div className='header-olympics'>
                <img src={olympic} alt=''></img>
                <img src={paralympic} alt=''></img>
            </div>


            <div className='header-nav'>
                <div className='header-nav-location'>
                    <img src={location} alt=''></img>
                    <p>90210</p>
                </div>
                <div className='header-nav-ham'>
                    <Hamburger label="Show menu" size={26} className='header-hamburger' onToggle={()=>menuFunc()}/>
                </div>
            </div>

            <Collapse in={openMenu} timeout={400} className='menu'>
                <HamburgerMenu />
            </Collapse>


        </div>
    );
};

export default Header;