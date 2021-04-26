import React, { useState } from 'react';
import './DeskFooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {facebook, twitter, youtube, instagram, pinterest} from '../../../assets/socials/index'
import { text } from '@fortawesome/fontawesome-svg-core';

function DeskFooter(){

    const [clickedSearch, setClickedSearch] = useState('false');
    return(
        <div className='df-wrapper'>

            <div className='df-searchbar'>
                <div className-='df-searchbar-search'>
                    <FontAwesomeIcon icon={faSearch} className='df-searchbar-search-icon'></FontAwesomeIcon>
                    <input type='search'>
                    </input>
                </div>
                <div className-='df-searchbar-socials'>

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