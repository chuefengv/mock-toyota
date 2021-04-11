import React ,{useState, useEffect} from 'react';
import './Hero.css';
import {one, two, three, four, five} from '../../assets/hero-image/index';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Hero(){
    const [index, setIndex] = useState(0);
  
    function next(){
        setIndex(index+1)
        if(index==4){
            setIndex(0)
        }
    }

    useEffect(()=>{
        console.log(index)
    },[index])

    return(
        <div className='hero-wrapper'>
            <div className='hero-slider'>
                <div>
                    <button onClick={()=>next()}>Next Button</button>
                </div>
                <Carousel selectedItem={index} showArrows={false} showThumbs={false} showStatus={false} infiniteLoop={true}>
                    <div>
                        <img src={one} alt=''></img>
                        <h2>Text</h2>
                    </div>
                    <div>
                        <img src={two} alt=''></img>
                        <h2>Text</h2>
                    </div>
                    <div>
                        <img src={three} alt=''></img>
                        <h2>Text</h2>
                    </div>
                    <div>
                        <img src={four} alt=''></img>
                        <h2>Text</h2>
                    </div>
                    <div>
                        <img src={five} alt=''></img>
                        <h2>Text</h2>
                    </div>
                </Carousel>

            </div>
        </div>
    )
}

export default Hero;