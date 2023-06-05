import React from 'react'
import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si"
import { AiFillMail } from 'react-icons/ai'
import './Contact.css';

function Contact() {
    return (
        <>
            <div className="main">
                <p className="headingContact">Get in Touch</p>
                <p className="socials">Our Social Media Handles</p>
                <a href="https://www.instagram.com/bmsce_compsoc/" target='_blank'><FaInstagram className='insta' /></a>
                <a href="https://www.linkedin.com/company/bmsce-ieee-computer-society/" target='_blank'><FaLinkedin className='linked' /></a>
                <br></br>
                <SiGooglemaps className='maps' /><a href="https://www.google.com/maps/place/BMS+College+of+Engineering/@12.9410122,77.5633371,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae158b11e34d2f:0x5f4adbdbab8bd80f!8m2!3d12.9410122!4d77.5655258!16zL20vMDM5ejcy?entry=ttu" target="_blank" className='collegeName'>B.M.S. College of Engineering</a>

                <form class="form" target="_blank" action="https://formsubmit.co/ieee.cs@bmsce.ac.in" method="POST">
                    <input type="email" placeholder="Your email" class="input" />
                    <textarea placeholder="Your message"></textarea>

                    <button className='button'>
                        <span>
                            Submit
                        </span>
                    </button>
                </form>
            </div>

            {/* <div class="main">
            <form target="_blank" action="https://formsubmit.co/ieee.cs@bmsce.ac.in" method="POST" className='form'>
                    <div class="descr">Contact us</div>
                    <div class="input">
                        <input required="required" autocomplete="off" type="text"/>
                            <label for="name">Name</label>
                    </div>

                    <div class="input">
                        <input required="required" autocomplete="off" name="email" type="text"/>
                            <label for="email">E-mail</label>
                    </div>

                    <div class="input">
                        <textarea required="required" cols="30" rows="1" id="message"></textarea>
                        <label for="message">Message</label>
                    </div>
                    <button>Send message →</button> */}

            {/* <div className="contact">
                        <p>For further details contact: </p>
                        <FaUserAlt/>&nbsp; &nbsp;Om Patil
                        <br></br>
                       <FaPhoneAlt/>&nbsp; &nbsp; 94483 84516
                       <br></br>
                       <AiFillMail/>&nbsp; &nbsp; ieee.cs@bmsce.ac.in


                    </div> */}
            {/* </form>
            </div> */}


        </>
    )
}

export default Contact
