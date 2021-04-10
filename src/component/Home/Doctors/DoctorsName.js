import React from 'react';
import doctor from '../../../images/5790-removebg.png'
import Doctor from './Doctor';

const doctorsData =[
    {
        name:'Dr Caudi',
        phone: '+8455544233',
        img: doctor
    },
    {
        name:'Dr Caudi',
        phone: '+8455544233',
        img: doctor
    },
    {
        name:'Dr Caudi',
        phone: '+8455544233',
        img: doctor
    }

]

const DoctorsName = () => {

    return (
        <div className = 'my-5'>
            <div className ='row pt-5 mt-5'>
                <h5 className ='text-center'>Our doctors</h5>
                {
                    doctorsData.map(doc => <Doctor doc={doc}></Doctor>)
                }
            </div>
        </div>
    );
};

export default DoctorsName;