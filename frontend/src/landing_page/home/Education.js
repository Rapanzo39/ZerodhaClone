import React from 'react';

function Education() {
    return ( 
         <div className='container mt-5'>
            <div className='row p-5'>
                  <div className='col-6'>
                    <img src='media/images/education.svg' alt='Education' style={{width:"70%"}}/>
                    
                </div>  
                <div className='col-6'>
                
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p>Varsity the largest online stock market eduction book in the world
                        covering everything from basics to advanced trading. </p>
                    <a href='/' className='' style={{textDecoration:"none"}}>Versity <i class="fa-solid fa-arrow-right-long"> </i></a>

                    <p className='mt-5'>TradingQnA, the most active trading and investment community in India for all your market 
                        related queries. </p>
                    <a href='/' className='' style={{textDecoration:"none"}}>TradingQnA <i class="fa-solid fa-arrow-right-long"> </i></a>
                </div> 
            </div>
        </div>
     );
}

export default Education;