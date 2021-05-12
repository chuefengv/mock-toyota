import React from 'react';
import './MainMenu.css';
import Menu01 from './menu-01/Menu01'
import Menu02 from './menu-02/Menu02'
import Menu03 from './menu-03/Menu03'
import Menu04 from './menu-04/Menu04'


function MenuOne({setIndex, menu01, menu02, menu03, menu04}){

    return(
            <div>
                {/* Vehicles */}
                {menu01 && <Menu01 setIndex={setIndex} />}
                {/* Shoppings Tools */}
                {menu02 && <Menu02 setIndex={setIndex} />}
                {/* Helpful Links */}
                {menu03 && <Menu03 setIndex={setIndex} />}
                {/* Owners */}
                {menu04 && <Menu04 setIndex={setIndex} />}
            </div>
    )
}

export default MenuOne;