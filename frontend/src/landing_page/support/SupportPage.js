import React from 'react';
import CreateTicket from './CreateTicket';
import Hero from './Hero';

import Navbar from "../../Navbar";
import Footer from "../../Footer";


function SupportPage() {
    return ( 
        <>
       <Navbar />
        <CreateTicket />
        <Hero />
        <Footer />
       
        </>
     );
}

export default SupportPage;