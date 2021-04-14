import React, { useState } from 'react';
import './Header.css';
import toyota from '../../assets/toyota.svg';
import olympic from '../../assets/olympic.svg'
import paralympic from '../../assets/paralympic.svg'
import location from '../../assets/location.svg';
import { Fade as Hamburger } from 'hamburger-react'
import {Collapse} from '@material-ui/core'
import MenuOne from './hamburger-menu/menu-one/MenuOne';
import MenuTwo from './hamburger-menu/menu-two/MenuTwo';
import MenuThree from './hamburger-menu/menu-three/MenuThree';



import { Carousel } from 'react-responsive-carousel';


function Header({openMenu, setOpenMenu}){

    const [index, setIndex] = useState(0);

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
                <Carousel selectedItem={index} showArrows={false} showIndicators={false} showThumbs={false} showStatus={false}>
                    <div>
                        <MenuOne setIndex={setIndex} />
                    </div>
                    <div>
                        <MenuTwo setIndex={setIndex} />
                    </div>
                    <div>
                        <MenuThree setIndex={setIndex} />
                    </div>
                </Carousel>
            </Collapse>


        </div>
    );
};

export default Header;