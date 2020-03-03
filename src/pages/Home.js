import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedProducts from '../components/FeaturedProducts';

export default function Home() {
    return (
        <>
    <Hero>
    <Banner title="Purchase Laptop" subtitle="High Quality">
        <Link to='/products' className="btn-primary">
            our products
        </Link>
    </Banner>
    </Hero>
    <Services/>
    <FeaturedProducts/>
    
    </>
    );

}
