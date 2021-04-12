import React ,{useState} from 'react';
import './Hero.css';
import Indicator from './indicator/Indicator';
import {one, two, three, four, five} from '../../assets/hero-image/index';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function Hero(){
    const [index, setIndex] = useState(0);
  
    function next(){
        setIndex(index+1)
        if(index===4){
            setIndex(0)
        }
    }

    function prev(){
        setIndex(index-1)
        if(index===0){
            setIndex(4)
        }
    }

    return(
        <div className='hero-wrapper'>

            <div className='hero-slider'>
                <Carousel selectedItem={index} showArrows={false} showIndicators={false} showThumbs={false} showStatus={false} infiniteLoop={true}>
                    <div>
                        <div>
                            <img src={one} alt=''></img>
                        </div>
                        <div className='hero-slider-description'>
                            <p>Options shown</p>
                            <p>WITH THE <strong>2021 PRIUS</strong>, GET</p>
                            <p>$1,500</p>
                            <p>Cash Back</p>
                            <button>View Offer</button>
                            <button>Explore</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={two} alt=''></img>
                        </div>
                        <div className='hero-slider-description'>
                            <p>Options shown</p>
                            <p>WITH THE <strong>2021 PRIUS</strong>, GET</p>
                            <p>$1,500</p>
                            <p>Cash Back</p>
                            <button>View Offer</button>
                            <button>Explore</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={three} alt=''></img>
                        </div>
                        <div className='hero-slider-description'>
                            <p>Options shown</p>
                            <p>WITH THE <strong>2021 PRIUS</strong>, GET</p>
                            <p>$1,500</p>
                            <p>Cash Back</p>
                            <button>View Offer</button>
                            <button>Explore</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={four} alt=''></img>
                        </div>
                        <div className='hero-slider-description'>
                            <p>Options shown</p>
                            <p>WITH THE <strong>2021 PRIUS</strong>, GET</p>
                            <p>$1,500</p>
                            <p>Cash Back</p>
                            <button>View Offer</button>
                            <button>Explore</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={five} alt=''></img>
                        </div>
                        <div className='hero-slider-description'>
                            <p>Options shown</p>
                            <p>WITH THE <strong>2021 PRIUS</strong>, GET</p>
                            <p>$1,500</p>
                            <p>Cash Back</p>
                            <button>View Offer</button>
                            <button>Explore</button>
                        </div>
                    </div>
                </Carousel>

                <div className='hero-arrows-left' onClick={()=>prev()}>
                    <FontAwesomeIcon icon={faChevronLeft} ></FontAwesomeIcon>
                </div>


                <div className='hero-arrows-right' onClick={()=>next()}>
                    <FontAwesomeIcon icon={faChevronRight} ></FontAwesomeIcon>
                </div>
            </div>


            <div className='header-bottom'>
                <Indicator index={index} setIndex={setIndex} />
            </div>

        </div>
    )
}

export default Hero;