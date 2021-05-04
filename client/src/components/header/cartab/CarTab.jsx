import React, {useState} from 'react';
import './CarTab.css';
import { Carousel } from 'react-responsive-carousel';
import CarsAndMini from './carsandmini/CarsAndMini'

function CarTab(){

    const [index, setIndex] = useState(0);

    return(
        <div className='cartab-wrapper'>
           <div className='cartab-car-types'>
                <div className={index===0 ? 'cartab-car-types-option selected one' : 'cartab-car-types-option unselected one'} onClick={()=>setIndex(0)}>
                    <p>Cars & Minivans</p>
                </div>
                <div className={index===1 ? 'cartab-car-types-option selected two' : 'cartab-car-types-option unselected two'} onClick={()=>setIndex(1)}>
                    <p>Trucks</p>
                </div>
                <div className={index===2 ? 'cartab-car-types-option selected three' : 'cartab-car-types-option unselected three'} onClick={()=>setIndex(2)}>
                    <p>Crossovers & SUVs</p>
                </div>
                <div className={index===3 ? 'cartab-car-types-option selected four' : 'cartab-car-types-option unselected four'} onClick={()=>setIndex(3)}>
                    <p>Hybrids & Fuel Cell</p>
                </div>
                <div className={index===4 ? 'cartab-car-types-option selected five' : 'cartab-car-types-option unselected five'} onClick={()=>setIndex(4)}>
                    <p>Upcoming Vehicles</p>
                </div>
           </div>

           <Carousel selectedItem={index} showArrows={false} showIndicators={false} showThumbs={false} showStatus={false} infiniteLoop={true}>
                <CarsAndMini />
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </Carousel>
        </div>
    )
}

export default CarTab;