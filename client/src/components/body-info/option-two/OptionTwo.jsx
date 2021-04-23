import React from 'react';
import '../option-one/OptionOne.css';
import {pic12, pic3, pic13, pic1, pic15, pic14} from '../../../assets/body-info-options/index';

function OptionTwo(){
    return(
        <div className='option-wrapper'>

            <div className='option-small-wrapper'>

                <div className='option-choice small'>
                    <div className='option-photo-large'> 
                        <img src={pic12} alt=''></img>
                    </div>
                    <div className='option-title-small'>
                        <div>TECHNOLOGY</div>
                    </div>
                    <div className='option-title-large'>
                        <h2>Connected Services</h2>
                    </div>
                    <div className='option-description'>
                        <p>Discover convenience and peace of mind of Connected Services.</p>
                    </div>
                    <div className='option-find-out'>
                        <p>Find Out More</p>
                    </div>             
                </div>

                <div className='option-choice small'>
                    <div className='option-photo-large'> 
                        <img src={pic3} alt=''></img>
                    </div>
                    <div className='option-title-small'>
                        <div>FEATURED VEHICLE</div>
                    </div>
                    <div className='option-title-large'>
                        <h2>2021 Toyota Full-Lineup Brochure</h2>
                    </div>
                    <div className='option-description'>
                        <p>Toyota's diverse lineup of cars, crossovers, SUVs and trucks is ready to support your adventures, every mile of the way.</p>
                    </div>
                    <div className='option-find-out'>
                        <p>Find Out More</p>
                    </div>                         
                </div>

                <div className='option-choice small'>
                    <div className='option-photo-large'> 
                        <img src={pic13} alt=''></img>
                    </div>
                    <div className='option-title-small'>
                        <div>SAFETY RECALL</div>
                    </div>
                    <div className='option-title-large'>
                        <h2>Safety Recall Information</h2>
                    </div>
                    <div className='option-description'>
                        <p>Get information on open safety recalls and service campaigns.</p>
                    </div>
                    <div className='option-find-out'>
                        <p>Find Out More</p>
                    </div>             
                </div>

                <div className='option-choice small'>
                    <div className='option-photo-large'> 
                        <img src={pic1} alt=''></img>
                    </div>
                    <div className='option-title-small'>
                        <div>FEATURED VEHICLE</div>
                    </div>
                    <div className='option-title-large'>
                        <h2>Alternative Fuel Vehicles</h2>
                    </div>
                    <div className='option-description'>
                        <p>Power. Efficiency. Peace of mind. Our hybrid battery 86 warranty covers 10 years or 150,000 miles, whichever comes first.</p>
                    </div>
                    <div className='option-find-out'>
                        <p>Find Out More</p>
                    </div>             
                </div>

                <div className='option-choice small'>
                    <div className='option-photo-large'> 
                        <img src={pic15} alt=''></img>
                    </div>
                    <div className='option-title-small'>
                        <div>FEATURE VEHICLE</div>
                    </div>
                    <div className='option-title-large'>
                        <h2>Toyota for Families</h2>
                    </div>
                    <div className='option-description'>
                        <p>Learn to install car seats, get tips on transporting your family safely, and learn about safety and convenience features for families on the go.</p>
                    </div>
                    <div className='option-find-out'>
                        <p>Find Out More</p>
                    </div>             
                </div>

                <div className='option-choice small'>
                    <div className='option-photo-large'> 
                        <img src={pic14} alt=''></img>
                    </div>
                    <div className='option-title-small'>
                        <div>TECHNOLOGY</div>
                    </div>
                    <div className='option-title-large'>
                        <h2>3G Network Retirement</h2>
                    </div>
                    <div className='option-description'>
                        <p>Services that currently require 3G wireless network access will no longer work starting November 1, 2022.</p>
                    </div>
                    <div className='option-find-out'>
                        <p>Find Out More</p>
                    </div>             
                </div>

            </div>

            
        </div>
    )
}

export default OptionTwo;