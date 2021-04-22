import React from 'react';
import './OptionOne.css';
import {pic1, pic2, pic15, pic3, pic4, pic5, pic6} from '../../../assets/body-info-options/index';

function OptionOne(){
    return(
        <div className='option-wrapper'>

            <div className='option-choice'>
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
                    <p> Power. Efficiency. Peace of mind. Our hybrid battery 86 warranty covers 10 years or 150,000 miles, whichever comes first.</p>
                </div>

                <div className='option-find-out'>
                    <p>Find Out More</p>
                </div>             
            </div>

            <div className='option-small-wrapper'>

                <div className='option-choice small'>
                    <div className='option-photo-large'> 
                        <img src={pic2} alt=''></img>
                    </div>
                    <div className='option-title-small'>
                        <div>COMMUNITY</div>
                    </div>
                    <div className='option-title-large'>
                        <h2>Today. Tomorrow. Toyota.</h2>
                    </div>
                    <div className='option-description'>
                        <p>Learn how we're working to help stop the spread of COVID-19, and how you can also help.</p>
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
                        <div>FEATURED VEHICLE</div>
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
                        <img src={pic4} alt=''></img>
                    </div>
                    <div className='option-title-small'>
                        <div>OFFERS & SERVICES</div>
                    </div>
                    <div className='option-title-large'>
                        <h2>No Cost Maintenance Plan & Roadside Assistance</h2>
                    </div>
                    <div className='option-description'>
                        <p>Peace of mind comes standard when every new Toyota comes with ToyotaCare.</p>
                    </div>
                    <div className='option-find-out'>
                        <p>Find Out More</p>
                    </div>             
                </div>

                <div className='option-choice small'>
                    <div className='option-photo-large'> 
                        <img src={pic5} alt=''></img>
                    </div>
                    <div className='option-title-small'>
                        <div>OFFERS & SERVICES</div>
                    </div>
                    <div className='option-title-large'>
                        <h2>Toyota Insurance Management Solutions</h2>
                    </div>
                    <div className='option-description'>
                        <p>Protect your vehicle and potentially save money on auto insurance designed for your Toyota.</p>
                    </div>
                    <div className='option-find-out'>
                        <p>Find Out More</p>
                    </div>             
                </div>

                <div className='option-choice small'>
                    <div className='option-photo-large'> 
                        <img src={pic6} alt=''></img>
                    </div>
                    <div className='option-title-small'>
                        <div>COMMUNITY</div>
                    </div>
                    <div className='option-title-large'>
                        <h2>Our American Journey</h2>
                    </div>
                    <div className='option-description'>
                        <p>From North to South, East to West, we're hundreds of thousands of team members strong –all dedicated to putting our customers first.</p>
                    </div>
                    <div className='option-find-out'>
                        <p>Find Out More</p>
                    </div>             
                </div>

            </div>

            
        </div>
    )
}

export default OptionOne;