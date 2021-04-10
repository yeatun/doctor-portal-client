import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import DoctorsName from '../Doctors/DoctorsName';
import FeaturedServices from '../featured/FeaturedServices';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../testmonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedServices></FeaturedServices>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Blogs></Blogs>
            <DoctorsName></DoctorsName>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;