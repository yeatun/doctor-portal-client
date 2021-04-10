import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({doc}) => {
    return (
        <div className ='col-md-4 d-flex'>
            <div className='text-center'>
            <img style={{height:'300px'}} src={doc.img} alt=""/>
            <div>
            <h6>{doc.name}</h6>
            </div>
            <div>
            <p><FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/>{doc.phone}</p>
            </div>
            </div>
        </div>
    );
};

export default Doctor;