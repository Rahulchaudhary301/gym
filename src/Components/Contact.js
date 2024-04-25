import React from 'react'
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";






export default function Contact() {


    return (
        <div className='xyv'>
        <h1 className='conh'>Contats Us</h1>

            <div className="contactContainer">
                <div className="contactBody">
                    <div className="contactInfo">

                       <h2>Contact Info:</h2>

                        <div className="contactdata">
                            <div className="calliconsBox">
                              <IoCall/>
                            </div>
                            <div className="numberDiv">
                              <p>9852675983</p>
                            </div>
                        </div>

                        <div className="contactdata">
                            <div className="calliconsBox">
                              <MdEmail/>
                            </div>
                            <div className="numberDiv">
                              <p>Rahulchaudhary
                              301@gmail.com</p>
                            </div>
                        </div>

                        <div className="contactdata">
                            <div className="calliconsBox">
                              <FaLocationDot/>
                            </div>
                            <div className="numberDiv">
                              <p>Shubhankar pur Darbhanga</p>
                            </div>
                        </div>

                    </div>



                    <div className="dropMessage">
                        <h2>Drop Us a Message</h2>
                        <div className="inutBoxx">
                            <input type='text' placeholder='Your Name'></input>
                        </div>

                        <div className="inutBoxx">
                            <input type='text' placeholder='Your Email Address'></input>
                        </div>

                        <div className="messageBoss">
                          <textarea id="description" rows="8" cols="40" placeholder="Enter your Message here..."></textarea>
                        </div>
                        
                        <button className='btn1 gebut sendbut mrg'> Send Now</button>

                    </div>
                </div>

            </div>

            <div className="mapBody">
            <iframe className='mapp' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57302.5950814074!2d85.86197823553324!3d26.15070213675612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb835434acdb1%3A0x70ec31d04822699e!2sDarbhanga%2C%20Bihar!5e0!3m2!1sen!2sin!4v1713010955677!5m2!1sen!2sin" ></iframe>
           </div>

        </div>
    )
}
