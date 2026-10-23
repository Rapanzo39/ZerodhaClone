import React from 'react';

function Universe() {
return(
     <div className="container mt-5">
    <div className="row text-center"> 
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms.</p>
      

         <div className="col-4 p-3 mt-5">
            <img src="media/images/smallcaselogo.png" alt='smallcase' />
            <p className='text-muted text-small' >Thematic investment platform</p>
        </div>

         <div className="col-4 p-3 mt-5">
           <img src="media/images/streakLogo.png" style={{width:"170px", height:"60px",
            objectFit:"contain", margin:"auto", display:"block"}}
            alt='streak'
             />
            <p className='text-muted text-small' >Algo & strategy trading</p>
        </div>

         <div className="col-4 p-3 mt-5">
            <img src="media/images/sensibullLogo.svg"
            style={{width:"170px", height:"60px", objectFit:"contain",
             margin:"auto", display:"block"}} alt='sensibull' />
            <p className='text-muted text-small' >Options trading platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
            <img src="media/images/dittoLogo.png" 
            style={{width:"170px", height:"60px", objectFit:"contain",
             margin:"auto", display:"block"}}
             alt='ditto'
             />
            <p className='text-muted text-small'>Invest in fixed-income products</p>
        </div>

         <div className="col-4 p-3 mt-5 ">
            <img src="media/images/tijori.png" 
            style={{width:"170px", height:"60px", objectFit:"contain",
             margin:"auto", display:"block"}}
             alt='tijori'
             />
            <p className='text-muted text-small'>Insurance simplified</p>
        </div>

         <div className="col-4 p-3 mt-5">
           <img src="media/images/goldenpiLogo.png"
           style={{width:"170px", height:"60px", objectFit:"contain",
             margin:"auto", display:"block"}}
             alt='goldenpi'
            />
            <p className='text-muted text-small' >Fundamental stock research</p>
        </div>

        <button className='mb-5 p-3 btn btn-primary fs-5 m-auto d-block'
         style={{width: "15%"}}>
            Signup Now
        </button>

         
    </div>
  </div>
);
}

export default Universe;