import React from 'react';

function Footer() {
   
    return ( 
        <footer className="border-top" style={{backgroundColor: "rgb(250, 250, 250)"}}>
            <div className='container '>
                <div className='row mt-5'>
                    <div className='col'>
                        <img src='media/images/logo.svg' alt="Logo" style={{width:"50%"}} />
                        <p>&copy;2010 - 2026, Not Zerodha Broking Ltd. All rights reserved.</p>
                        <ul className='d-flex  gap-4' style={{fontSize: "20px", textAlign:"center"}}>
                            <i className="fa-brands fa-x-twitter"></i>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </ul>
                    </div>
                <div className='col'>
                    <p>Company</p> 
                            <a className="text-muted text-decoration-none" href="/">About</a><br />
                            <a className="text-muted text-decoration-none" href="/">Products</a><br />    
                            <a className="text-muted text-decoration-none" href="/">Pricing</a><br />
                            <a className="text-muted text-decoration-none" href="/">Referral program</a><br />
                            <a className="text-muted text-decoration-none" href="/">Careers</a><br /> 
                            <a className="text-muted text-decoration-none" href="/">Zerodha.tech</a><br />
                            <a className="text-muted text-decoration-none" href="/">Press & Media</a><br />               
                            <a className="text-muted text-decoration-none" href="/">Zerodha Cares (CSR)</a><br />        
                </div>
                <div className='col'>
                     <p>Support</p>
                        <a className="text-muted text-decoration-none" href="/">Contact</a><br />
                        <a className="text-muted text-decoration-none" href="/">Support Portal</a><br />
                        <a className="text-muted text-decoration-none" href="/">Z-Connect blog</a><br />
                        <a className="text-muted text-decoration-none" href="/">List of charges</a><br />
                        <a className="text-muted text-decoration-none" href="/">Downlods & resources</a> <br /> 
                </div>
                <div className='col'>
                    <p>Account</p>
                        <a className="text-muted text-decoration-none" href="/open-account">Open an account</a><br />
                        <a className="text-muted text-decoration-none" href="/fund-transfer">fund transfer</a><br />
                        <a className="text-muted text-decoration-none" href="/60-day-challenge">60 day challenge</a><br />
                </div>
                <div className='col'>
                    <p>Quick Links</p>
                        <a className="text-muted text-decoration-none" href="/open-account">  Upcoming IPOs</a><br />
                        <a className="text-muted text-decoration-none" href="/fund-transfer">Brokerage charges</a><br />
                        <a className="text-muted text-decoration-none" href="/60-day-challenge">Market holidays</a><br />
                        <a className="text-muted text-decoration-none" href="/60-day-challenge">Calculator</a><br />      
                </div>
            </div>
                <div className='mt-5 text-muted' style={{fontSize: "15px"}}>
                        <p> Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd.</p>
                        <p> Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES.</p>
                        <p> Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                        <p>India's largest broker based on networth as per NSE.</p>

                       
                </div>
                <div className='d-flex justify-content-center gap-4 ' style={{fontSize: "20px", textAlign:"center"}}>
                    <a className="text-muted text-decoration-none" href="/signup">Signup</a>
                    <a className="text-muted text-decoration-none" href="/About">About</a>
                    <a className="text-muted text-decoration-none" href="/product">Products</a>
                    <a className="text-muted text-decoration-none" href="/pricing">Pricing</a>
                    <a className="text-muted text-decoration-none" href="/support">Support</a>
                </div>

                <div className='mt-5 text-muted' style={{fontSize: "14px", textAlign:"center"}}> <p>© 2026 Zerodha Clone. Built for learning & demonstration purposes. Built with ❤️ by Kaushalya </p> </div>
        </div>
        </footer>
        
     );
}

export default Footer;