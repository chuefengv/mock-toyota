import React, {useState} from 'react';
import './BodyInfo.css';
import OptionOne from './option-one/OptionOne';
import OptionTwo from './option-two/OptionTwo';
import OptionThree from './option-three/OptionThree';
import OptionFour from './option-four/OptionFour';

function BodyInfo(){

    const [index, setIndex] = useState(0);

    return(
        <div className='bodyinfo-wrapper'>

            <div className='bodyinfo-title'>
                <h1>Discover Toyota</h1>
            </div>

            <ul className='bodyinfo-sections'>
                <li className='bodyinfo-option one' onClick={()=>setIndex(0)}>
                    
                    {index===0 && <div className='bodyinfo-selected'>
                        Featured
                    </div>}

                    {index!==0 && <div className='bodyinfo-unselected'>
                        Featured
                    </div>}

                </li>
                <li className='bodyinfo-option two' onClick={()=>setIndex(1)}>
                    
                    {index===1 && <div className='bodyinfo-selected'>
                        Vehicles & Technology
                    </div>}

                    {index!==1 && <div className='bodyinfo-unselected'>
                        Vehicles & Technology
                    </div>}

                </li>
                <li className='bodyinfo-option three' onClick={()=>setIndex(2)}>
                    
                    {index===2 && <div className='bodyinfo-selected'>
                        Offers & Services
                    </div>}

                    {index!==2 && <div className='bodyinfo-unselected'>
                        Offers & Services
                    </div>}

                </li>
                <li className='bodyinfo-option four' onClick={()=>setIndex(3)}>

                    {index===3 && <div className='bodyinfo-selected'>
                        Community
                    </div>}

                    {index!==3 && <div className='bodyinfo-unselected'>
                        Community
                    </div>}

                </li>
            </ul>

            {index===0 && <OptionOne />}
            {index===1 && <OptionTwo/>}
            {index===2 && <OptionThree />}
            {index===3 && <OptionFour />}


        </div>
    )
}

export default BodyInfo;