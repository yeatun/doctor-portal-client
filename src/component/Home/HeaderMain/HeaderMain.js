import React from 'react';
import chair from '../../../images/chair.png';
const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className ="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style ={{color:'#444a5a'}}><b>Your new smile</b> <br/><b>start here</b></h1>
                <p className ="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laboriosam, iure tempore itaque libero officiis.</p>
                <button className ="btn btn-success">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className ="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;