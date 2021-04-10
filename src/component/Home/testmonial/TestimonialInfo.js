import React from 'react';

const TestimonialInfo = ({testimonial}) => {
    return (
        <div className="col-md-4 justify-content-center  ">
      <div className='mt-5'>
      <div ><small>{testimonial.quote}</small>
         </div>

        <div className=" d-flex mt-3 mb-3">
           
           
            <img className="me-3" src={testimonial.img} alt="" width="60"/>
            <div>
                <h6 className="text-primary">{testimonial.name}</h6>
                <p className="m-0">{testimonial.place}</p>
            </div>
        </div>
      </div>
   </div>
    );
};

export default TestimonialInfo;