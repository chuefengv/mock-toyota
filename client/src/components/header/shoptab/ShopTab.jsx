import React from 'react';
import './ShopTab.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faTags, faCar, faMoneyBill  } from '@fortawesome/free-solid-svg-icons';

function ShopTab(){
    return(
        <div className='shoptab-wrapper'>
            <div className='shoptab-icons-wrapper'>

                <div className='shoptab-option one'>
                    <FontAwesomeIcon icon={faCogs} color={'rgb(204, 0, 0)'} className='shoptab-icon one'></FontAwesomeIcon>
                    <p>BUILD AND PRICE</p>
                </div>
                <div className='shoptab-option two'>
                    <FontAwesomeIcon icon={faTags} color={'rgb(204, 0, 0)'} className='shoptab-icon two'></FontAwesomeIcon>
                    <p>LOCAL SPECIALS</p>
                </div>
                <div className='shoptab-option three'>
                    <FontAwesomeIcon icon={faCar} color={'rgb(204, 0, 0)'} className='shoptab-icon three'></FontAwesomeIcon>
                    <p>SEARCH INVENTORY</p>
                </div>
                <div className='shoptab-option four'>
                    <FontAwesomeIcon icon={faMoneyBill} color={'rgb(204, 0, 0)'} className='shoptab-icon four'></FontAwesomeIcon>
                    <p>KELLEY BLUE BOOK<br></br>TRADE-IN VALUE</p>
                </div>
                
            </div>
            <div className='shoptab-links-wrapper'>
                <div className='shoptab-links-option'>
                    Request a Quote
                </div>
                <div className='shoptab-links-option'>
                    View Brochures
                </div>
                <div className='shoptab-links-option'>
                    Accessories
                </div>
                <div className='shoptab-links-option'>
                    Contact a Dealer
                </div>
                <div className='shoptab-links-option'>
                    What Fits My Budget
                </div>
                <div className='shoptab-links-option'>
                    Compare Vehicles
                </div>
                <div className='shoptab-links-option'>
                    Payment Estimator
                </div>
                <div className='shoptab-links-option'>
                    Toyota Certified Used Vehicles
                </div>
                <div className='shoptab-links-option'>
                    Find Your Match
                </div>
                <div className='shoptab-links-option'>
                    Buy Parts and Accessories
                </div>
            </div>
        </div>
    )
}

export default ShopTab;