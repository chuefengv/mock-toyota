import React from 'react';
import './Header.css';
import toyota from '../../assets/toyota.svg';
import olympic from '../../assets/olympic.svg'
import paralympic from '../../assets/paralympic.svg'
import location from '../../assets/location.svg';
import { Fade as Hamburger } from 'hamburger-react'



function Header(){
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
                <Hamburger size={26} className='header-hamburger' />
            </div>

        </div>
    );
};

export default Header;