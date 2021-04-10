import React from 'react';
import dentalCare from '../../../images/Mask Group 3.png'
   
const FeaturedServices = () => {
    return (
        <main style={{height:'800px'}} className ="row  d-flex align-items-center ">
            <div className='col-md-4 offset-md-1'>
                <img  className="img-fluid" src={dentalCare} alt=""/>
            </div>
            <div  className='col-md-6'>
                <h3>Exceptional Dental <br/>Care,on Your Terms</h3>
                <p className='text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> At nobis consectetur exercitationem perspiciatis doloribus.<br/> Corporis, facilis! Aliquam laboriosam, officia hic <br/>culpa nisi pariatur facere, et voluptate odio, eius modi quis?</p>
                
                <button className='btn btn-success'>Learn More</button>
            </div>
        </main>
    );
};

export default FeaturedServices;                                                                                