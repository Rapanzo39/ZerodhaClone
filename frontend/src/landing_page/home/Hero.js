import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt="Hero" className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivates, mutual funds and more</p>
                <button className='mb-5 p-2 btn btn-primary fs-5 m-auto d-block' style={{width: "20%"}}>Signup Now</button>
               
            </div>
        </div>                                      
     );
}

export default Hero;