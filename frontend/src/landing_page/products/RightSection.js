import React from 'react';

function RightSection( {
  productName,
  productDescription,
  learnMore,
  imageURL,
}){
return <div className="container">
    <div className="row align-items-center"> 
        <div className="col-6 ">
            <h1>{productName}</h1>
            <p className="text-muted">{productDescription}</p>
            <div>
            <a href={learnMore}>Learn More</a>
            </div>
        </div>

         <div className="col-6">
            <img src={imageURL} alt={productName}
            />
        </div>
    </div>
  </div>
}
export default RightSection;