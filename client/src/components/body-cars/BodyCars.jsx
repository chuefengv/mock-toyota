import React, {useState, useEffect} from 'react';
import './BodyCars.css';
import BCMobile from './bc-mobile/BCMobile';
import BCDesktop from './bc-desktop/BCDesktop';

function BodyCars(){

    const [mobileBC, setMobileBC] = useState((window.innerWidth<800) ? true : false);

    useEffect(()=>{
        function renderWindow(){
            if(window.innerWidth<800){
                setMobileBC(true);
            }else{
                setMobileBC(false);
            }
        }

        window.addEventListener('resize',renderWindow)
    },[setMobileBC])

    return(
        <div className='bodycars-wrapper'>
            {mobileBC && <BCMobile /> }
            {!mobileBC && <BCDesktop />}         
        </div>
    )
}

export default BodyCars;