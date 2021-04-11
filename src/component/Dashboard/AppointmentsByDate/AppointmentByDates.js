import React from 'react';
import AppointmentShortList from '../Dashboard/AppointmentList/AppointmenShortList';

const AppointmentByDates = ({ appointments}) => {
    console.log(appointments);
    return (
        <div>
             <h2 className="text-brand text-center">Appointments {appointments.length}</h2>
             <div>
           
            {
                appointments.length ?
                 <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
        </div>
    );
};

export default AppointmentByDates;