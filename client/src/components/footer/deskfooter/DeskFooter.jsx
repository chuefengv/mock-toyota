import React, { useState } from 'react';
import './DeskFooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {facebook, twitter, youtube, instagram, pinterest} from '../../../assets/socials/index'

function DeskFooter(){

    const [clickedSearch, setClickedSearch] = useState('false');

    return(
        <div className='df-wrapper'>

            <div className='df-searchbar'>
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

            <div className='df-logos'>

            </div>

            <div>

            </div>

            <div>

            </div>

            <div>

            </div>

        </div>
    )
}

export default DeskFooter;