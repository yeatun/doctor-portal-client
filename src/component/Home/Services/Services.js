import React from 'react';
import fluoride from '../../../images/fluroid.png';
import cavity from '../../../images/cavity.png';
import teeth from '../../../images/tooth.png'
import ServiceDetail from '../SreviceDetail/ServiceDetail';

const serviceData = [
    {
        name : 'Fluoride Treatment',
        img : fluoride
    },
    {
        name : 'Cavity filling',
        img : cavity
    },
    {
        name : 'Teeth Whitening',
        img : teeth
    }
]
const Services = () => {
    return (
       <section className = "services-container mt-5">
           <div className="text-center">
           <h5 style={{color:'#1CC7C1'}}>Our Services</h5>
           <h2>Services We Provide</h2>
           </div>
           <div className ='d-flex justify-content-center'>
           <div className="w-75 row mt-5 pt-5">
           {
                serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
            }
           </div>
        </div>
       </section>
    );
};

export default Services;