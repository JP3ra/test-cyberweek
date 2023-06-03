import React from 'react';
import './Sponsor.css';
import compsoc from './images/compsoc.png'
import stc from './images/stc-removebg-preview.png'
import csbc from './images/IEEE-CS-BangaloreChapter-White-Logo.png'

function Sponsors() {
    return (
        <>
            <p className='heading'>Collaborators and Sponsors</p>
            <div className='containerSponsor'>

                <p className='ise'>In association with the department of ISE, BMSCE</p>
                {/* <div className="img1">
                    <img src={compsoc} alt="" />
                </div>

                <div className="img2">
                    <img src={stc} alt="" className='stcLogo' />
                </div>

                <div className="img3">
                    <img src={csbc} alt="" />
                </div>
                <br></br>
                <img src={compsoc} alt="" />
                <img src={compsoc} alt="" />
                <img src={compsoc} alt="" /> */}

                <div className="row1">


                    <div className='image1'>

                    </div>
                    <div className='image2'>

                    </div>
                    <div className='image3'>
                 
                    </div>
                </div>

                <div className="row2">


                    <div className='image4'>
       
                    </div>
                    <div className='image5'>
       
                    </div>
                    {/* <div className='image6'>
                        hi
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Sponsors
