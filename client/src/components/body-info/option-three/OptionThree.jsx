import React from 'react';
import '../option-one/OptionOne.css';
import {pic4, pic8, pic9, pic10, pic11, pic5} from '../../../assets/body-info-options/index';

function OptionThree(){
    return(
        <div className='option-wrapper'>

            <div className='option-small-wrapper'>

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
                        <img src={pic8} alt=''></img>
                    </div>
                    <div className='option-title-small'>
                        <div>OFFERS & SERVICES</div>
                    </div>
                    <div className='option-title-large'>
                        <h2>Military Rebate</h2>
                    </div>
                    <div className='option-description'>
                        <p>For everything you give, we want to give something back. Click below to see if this offer is available near you.</p>
                    </div>
                    <div className='option-find-out'>
                        <p>Find Out More</p>
                    </div>                         
                </div>

                <div className='option-choice small'>
                    <div className='option-photo-large'> 
                        <img src={pic9} alt=''></img>
                    </div>
                    <div className='option-title-small'>
                        <div>OFFERS & SERVICES</div>
                    </div>
                    <div className='option-title-large'>
                        <h2>College Grad Rebate</h2>
                    </div>
                    <div className='option-description'>
                        <p>Turn your degree into a hard-earned reward with Toyota's College Grad Rebate and Finance Program.</p>
                    </div>
                    <div className='option-find-out'>
                        <p>Find Out More</p>
                    </div>             
                </div>

                <div className='option-choice small'>
                    <div className='option-photo-large'> 
                        <img src={pic10} alt=''></img>
                    </div>
                    <div className='option-title-small'>
                        <div>OFFERS & SERVICES</div>
                    </div>
                    <div className='option-title-large'>
                        <h2>You've Got Options</h2>
                    </div>
                    <div className='option-description'>
                        <p> Get access to flexible financing and leasing, rebates, protection plans, insurance offerings and more.</p>
                    </div>
                    <div className='option-find-out'>
                        <p>Find Out More</p>
                    </div>             
                </div>

                <div className='option-choice small'>
                    <div className='option-photo-large'> 
                        <img src={pic11} alt=''></img>
                    </div>
                    <div className='option-title-small'>
                        <div>OFFERS & SERVICES</div>
                    </div>
                    <div className='option-title-large'>
                        <h2>Six Million Cars and Counting</h2>
                    </div>
                    <div className='option-description'>
                        <p>Toyota Certified Used Vehicles has sold over six million cars since 1996.</p>
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

            </div>

            
        </div>
    )
}

export default OptionThree;