import React from 'react';
import person1 from '../../../images/Ellipse 1.png';
import person2 from '../../../images/Ellipse 2.png';
import person3 from '../../../images/Ellipse 3.png'
import TestimonialInfo from './TestimonialInfo';
const Testimonial = () => {
    const testimonialData =[
        {
            name : 'Winson herry',
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
            place: 'california',
            img : person1
        },
        {
            name : 'Winson herry',
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
           
            place: 'california',
            img : person2
        },
        {
            name : 'Winson herry',
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
            
            place: 'california',
            img : person3
        }
    ]
    return (
        <section className="justify-content-center  my-5 py-5 ">
        <div className="container ">
            <div className="section-header">
                <h5 className="text-primary text-uppercase">Testimonial</h5>
                <h1>What Our Patients <br/> Says </h1>
            </div>
            <div className=" row mt-5  pt-5">
                 {
                     testimonialData.map(testimonial => <TestimonialInfo testimonial={testimonial} key={testimonial.name}/>)
                 }
             </div>
        </div>
    </section>
    );
};

export default Testimonial;