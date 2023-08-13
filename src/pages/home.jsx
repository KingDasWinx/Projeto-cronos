import React from 'react';
import Header from "../components/header";
import CarouselA from '../components/carousel';
import Card from '../components/card';
import Footer from '../components/footer';
import "../style/home.css"
import "../global.css"

function Home() {
    return (
        <div className='body' >
            <div> <Header /> </div>
            <div> <CarouselA/> </div>
            <div> <Card/> </div>
            <div> <Footer/></div>
        </div>
    )
}

export default Home;