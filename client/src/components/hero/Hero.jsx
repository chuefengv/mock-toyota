import React ,{useState} from 'react';
import './Hero.css';
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
            </div>
            <div className='hero-arrows-left' onClick={()=>prev()}>
                    <FontAwesomeIcon icon={faChevronLeft} ></FontAwesomeIcon>
            </div>


            <div className='hero-arrows-right' onClick={()=>next()}>
                    <FontAwesomeIcon icon={faChevronRight} ></FontAwesomeIcon>
            </div>
            <div className='header-indicators'>
                <div className='bubble'>
                    {index===0 && <div className='header-indicator-selected'></div>}
                    {index!==0 && <div className='header-indicator-unselected' onClick={()=>setIndex(0)}></div>}
                </div>

                <div className='bubble'>
                    {index===1 && <div className='header-indicator-selected'></div>}
                    {index!==1 && <div className='header-indicator-unselected' onClick={()=>setIndex(1)}></div>}
                </div>
                
                <div className='bubble'>
                    {index===2 && <div className='header-indicator-selected'></div>}
                    {index!==2 && <div className='header-indicator-unselected' onClick={()=>setIndex(2)}></div>}
                </div>

                <div className='bubble'>
                    {index===3 && <div className='header-indicator-selected'></div>}
                    {index!==3 && <div className='header-indicator-unselected' onClick={()=>setIndex(3)}></div>}
                </div>

                <div className='bubble'>
                    {index===4 && <div className='header-indicator-selected'></div>}
                    {index!==4 && <div className='header-indicator-unselected' onClick={()=>setIndex(4)}></div>}
                </div>
            </div>

        </div>
    )
}

export default Hero;