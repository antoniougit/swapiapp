import React from 'react';

const Navigation = ({ onButtonSelection }) => {

            return(
                <nav style={{position: 'absolute', top: '0%', right: '2%'}}>
                    <p onClick={() => window.location.reload()} className='f2 dim link white pr3 pointer'>&#8634;</p>
                </nav>
            )
        
}


export default Navigation;