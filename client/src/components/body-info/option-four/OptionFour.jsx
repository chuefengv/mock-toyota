import React from 'react';
import '../option-one/OptionOne.css';
import {pic2, pic7, pic6} from '../../../assets/body-info-options/index';

function OptionFour(){
    return(
        <div className='option-wrapper'>

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
                        <p>Learn how we’re working to help stop the spread of COVID-19, and how you can also help.</p>
                    </div>
                    <div className='option-find-out'>
                        <p>Find Out More</p>
                    </div>             
                </div>

                <div className='option-choice small'>
                    <div className='option-photo-large'> 
                        <img src={pic7} alt=''></img>
                    </div>
                    <div className='option-title-small'>
                        <div>COMMUNITY</div>
                    </div>
                    <div className='option-title-large'>
                        <h2>Proud Partner of Team USA</h2>
                    </div>
                    <div className='option-description'>
                        <p>We're partnering with U.S. Olympic and Paralympic athletes on their journey to the Olympic and Paralympic Games Tokyo 2020.</p>
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

export default OptionFour;