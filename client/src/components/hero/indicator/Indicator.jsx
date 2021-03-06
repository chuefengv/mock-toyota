import React from 'react';
import '../Hero.css';

function Indicator({index, setIndex}){
    return(
        <div className='hero-indicators'>
            <div className='bubble'>
                {index===0 && <div className='hero-indicator-selected'></div>}
                {index!==0 && <div className='hero-indicator-unselected' onClick={()=>setIndex(0)}></div>}
            </div>

            <div className='bubble'>
                {index===1 && <div className='hero-indicator-selected'></div>}
                {index!==1 && <div className='hero-indicator-unselected' onClick={()=>setIndex(1)}></div>}
            </div>
            
            <div className='bubble'>
                {index===2 && <div className='hero-indicator-selected'></div>}
                {index!==2 && <div className='hero-indicator-unselected' onClick={()=>setIndex(2)}></div>}
            </div>

            <div className='bubble'>
                {index===3 && <div className='hero-indicator-selected'></div>}
                {index!==3 && <div className='hero-indicator-unselected' onClick={()=>setIndex(3)}></div>}
            </div>

            <div className='bubble'>
                {index===4 && <div className='hero-indicator-selected'></div>}
                {index!==4 && <div className='hero-indicator-unselected' onClick={()=>setIndex(4)}></div>}
            </div>
        </div>
    )
}

export default Indicator;

