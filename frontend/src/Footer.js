import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
   
    return ( 
        <footer className="border-top" style={{backgroundColor: "rgb(240, 240, 240)"}}>
            <div className='container '>
                <div className='row mt-5'>
                    <div className='col'>
                        <img src='media/images/logo.svg' alt="Logo" style={{width:"50%"}} />
                        <p>&copy;2010 - 2026, Not Zerodha Broking Ltd. All rights reserved.</p>
                        <ul className='d-flex  gap-4' style={{fontSize: "20px", textAlign:"center"}}>
                            <Link className="text-muted text-decoration-none" to="https://twitter.com/zerodha"> <i className="fa-brands fa-x-twitter"></i> </Link>
                            <Link className="text-muted text-decoration-none" to="https://www.facebook.com"> <i className="fa-brands fa-facebook"></i> </Link>
                            <Link className="text-muted text-decoration-none" to="https://www.instagram.com"> <i className="fa-brands fa-instagram"></i> </Link>
                            <Link className="text-muted text-decoration-none" to="https://www.linkedin.com/company/zerodha"> <i className="fa-brands fa-linkedin"></i> </Link>
                        </ul>
                    </div>
                <div className='col'>
                    <p>Company</p> 
                            <Link className="text-muted text-decoration-none" to="/">About</Link><br />
                            <Link className="text-muted text-decoration-none" to="/">Products</Link><br />    
                            <Link className="text-muted text-decoration-none" to="/">Pricing</Link><br />
                            <Link className="text-muted text-decoration-none" to="/">Referral program</Link><br />
                            <Link className="text-muted text-decoration-none" to="/">Careers</Link><br /> 
                            <Link className="text-muted text-decoration-none" to="/">Zerodha.tech</Link><br />
                            <Link className="text-muted text-decoration-none" to="/">Press & Media</Link><br />               
                            <Link className="text-muted text-decoration-none" to="/">Zerodha Cares (CSR)</Link><br />        
                </div>
                <div className='col'>
                     <p>Support</p>
                        <Link className="text-muted text-decoration-none" to="/">Contact</Link><br />
                        <Link className="text-muted text-decoration-none" to="/">Support Portal</Link><br />
                        <Link className="text-muted text-decoration-none" to="/">Z-Connect blog</Link><br />
                        <Link className="text-muted text-decoration-none" to="/">List of charges</Link><br />
                        <Link className="text-muted text-decoration-none" to="/">Downlods & resources</Link> <br /> 
                </div>
                <div className='col'>
                    <p>Account</p>
                        <Link className="text-muted text-decoration-none" to="/open-account">Open an account</Link><br />
                        <Link className="text-muted text-decoration-none" to="/fund-transfer">fund transfer</Link><br />
                        <Link className="text-muted text-decoration-none" to="/60-day-challenge">60 day challenge</Link><br />
                </div>
                <div className='col'>
                    <p>Quick Links</p>
                        <Link className="text-muted text-decoration-none" to="/open-account">  Upcoming IPOs</Link><br />
                        <Link className="text-muted text-decoration-none" to="/fund-transfer">Brokerage charges</Link><br />
                        <Link className="text-muted text-decoration-none" to="/60-day-challenge">Market holidays</Link><br />
                        <Link className="text-muted text-decoration-none" to="/60-day-challenge">Calculator</Link><br />      
                </div>
            </div>
                <div className='mt-5 text-muted' style={{fontSize: "15px"}}>
                        <p> Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd.</p>
                        <p> Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES.</p>
                        <p> Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                        <p>India's largest broker based on networth as per NSE.</p>

                       
                </div>
                <div className='d-flex justify-content-center gap-4 ' style={{fontSize: "20px", textAlign:"center"}}>
                    <Link className="text-muted text-decoration-none" to="/signup">Signup</Link>
                    <Link className="text-muted text-decoration-none" to="/About">About</Link>
                    <Link className="text-muted text-decoration-none" to="/product">Products</Link>
                    <Link className="text-muted text-decoration-none" to="/pricing">Pricing</Link>
                    <Link className="text-muted text-decoration-none" to="/support">Support</Link>
                </div>

                <div className='mt-5 text-muted' style={{fontSize: "14px", textAlign:"center"}}> <p>© 2026 Zerodha Clone. Built for learning & demonstration purposes. Built with ❤️ by Kaushalya </p> </div>
        </div>
        </footer>
        
     );
}

export default Footer;