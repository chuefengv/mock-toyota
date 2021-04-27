import React, { useState } from 'react';
import './DeskFooter.css';
import DeskLinks from './desklinks/DeskLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import {facebook, twitter, youtube, instagram, pinterest} from '../../../assets/socials/index'
import toyota from '../../../assets/toyota.svg';
import olympic2 from '../../../assets/olympic2.svg'
import paralympic2 from '../../../assets/paralympic2.svg'
import toyota_big from '../../../assets/toyota_big.svg'

function DeskFooter(){

    const [clickedSearch, setClickedSearch] = useState('false');

    return(
        <div className='df-wrapper'>

            <div className='df-searchbar-wrapper'>
                <div className='df-searchbar-search'>
                    <FontAwesomeIcon icon={faSearch} className='df-searchbar-search-icon'></FontAwesomeIcon>
                    <input type='search' placeholder='Type here to search'>
                    </input>
                </div>
                <div className='df-searchbar-socials'>
                    <img src={facebook} alt=''></img>
                    <img src={youtube} alt=''></img>
                    <img src={twitter} alt=''></img>
                    <img src={instagram} alt=''></img>
                    <img src={pinterest} alt=''></img>
                </div>
            </div>

            <div className='df-footer-logos'>
                    <div className='df-footer-toyota-logo'>
                        <img src={toyota} alt=''></img>
                    </div>
                    <div className='df-footer-toyota-text'>
                        <img src={toyota_big} alt=''></img>
                    </div>
                    <div className='df-footer-olympic'>
                        <img src={olympic2} alt=''></img>
                    </div>
                    <div className='df-footer-paralympic'>
                        <img src={paralympic2} alt=''></img>             
                    </div>
                    <div className='df-footer-title'>
                        Proud Mobility Partner
                    </div>
            </div>

            <div className='df-subinfo'>
                <div className='df-subinfo-one'>
                    <FontAwesomeIcon icon={faNewspaper} className='df-subinfo-one-icon'></FontAwesomeIcon>
                    Sign Up For Toyota Updates
                </div>
                <div className='df-subinfo-two'>
                    DO NOT SELL MY PERSONAL INFORMATION
                </div>
                <div className='df-subinfo-three'>
                    Cookie Consent Options
                </div>
            </div>

            <DeskLinks />

        </div>
    )
}

export default DeskFooter;