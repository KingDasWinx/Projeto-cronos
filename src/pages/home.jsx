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
            <Header />
            <section className='home-section'>
                <CarouselA/>
            </section>
            <section className='cards-section'>
                <Card/>
            </section>
            <Footer/>
        </div>
    )
}

export default Home;