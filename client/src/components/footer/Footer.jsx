import React, {useState, useEffect} from 'react';
import './Footer.css';
import MobFooter from './mobfooter/MobFooter'
import DeskFooter from './deskfooter/DeskFooter'

function Footer(){

    const [mobileMode, setMobileMode] = useState((window.innerWidth<720) ? true : false);

    useEffect(()=>{
        function renderWindow(){
            if(window.innerWidth<720){
                setMobileMode(true);
            }else{
                setMobileMode(false);
            }
        }

        window.addEventListener('resize',renderWindow)
    },[setMobileMode])

    return(
        <div className='footer-wrapper'>
            {mobileMode && <MobFooter />}
            {!mobileMode && <DeskFooter />}
        </div>
    )
}

export default Footer;