import React from 'react';
import './InfoTable.css';

function InfoTable(){
    return(
        <div className='infotable-wrapper'>
            <div className='infotable-option one'>
                <div>BUILD & PRICE</div>
            </div>

            <div className='infotable-option two'>
                <div>LOCAL SPECIALS</div>
            </div>

            <div className='infotable-option three'>
                <div>SEARCH INVENTORY</div>
            </div>

            <div className='infotable-option four'>
                <div>KELLEY BLUE BOOK TRADE-IN VALUE</div>
            </div>

            <div className='infotable-option five'>
                <div>FIND A DEALER</div>
            </div>

            <div className='infotable-option six'>
                <div>REQUEST A QUOTE</div>
            </div>

        </div>
    )
}

export default InfoTable;