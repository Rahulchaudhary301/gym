import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import insta from '../img/insta.jpg'
import insta1 from '../img/insta1.jpg'
import insta2 from '../img/insta2.jpeg'
import insta3 from '../img/insta3.jpg'
import insta4 from '../img/insta4.jpg'
import insta5 from '../img/insta5.jpeg'
import insta6 from '../img/insta6.jpg'
import insta7 from '../img/insta7.webp'
import insta8 from '../img/insta8.webp'



export default function Footer() {
    return (
        <div>
            <div className="footerContainer">
                <div className="footerBody">
                    <div className="footerdiv1">
                        <div className="footerDiv1Data">
                            <h1>Re<span>X</span>Fit</h1>
                            <p>Fitness starts at home. What you eat is what you will look, just as what you sow is what you reap. Eat good food: eat fruits, vegetables, healthy grains, and don't go for sweet.</p>
                            <p>You sow is what you reap. Eat good food: eat fruits, vegetables, healthy grains, and don't go for sweet and trite food.</p>
                        </div>
                    </div>

                    <div className="footerdiv2">
                        <div className="footerDiv2Data">
                            <h1>Menu</h1>
                            <ul>
                                <li>HOME</li>
                                <li>TRAINER</li>
                                <li>CLASSES</li>
                                <li>ABOUT</li>
                                <li>SERVICES</li>
                                <li>SCHEDULE</li>
                                <li>BLOG</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footerdiv3">
                        <div className="footerDiv3Data">
                            <h1>INSTAGRAM</h1>
                            <div className="imgdiv">
                                <div className="imgbox">
                                    <img src={insta}></img>
                                </div>

                                <div className="imgbox">
                                   <img src={insta1}></img>
                                </div>

                                <div className="imgbox">
                                   <img src={insta2}></img>
                                </div>

                                <div className="imgbox">
                                <img src={insta3}></img>
                                </div>

                                <div className="imgbox">
                                <img src={insta4}></img>
                                </div>

                                <div className="imgbox">
                                <img src={insta5}></img>
                                </div>

                                <div className="imgbox">
                                <img src={insta6}></img>
                                </div>

                                <div className="imgbox">
                                <img src={insta7}></img>
                                </div>

                                <div className="imgbox">
                                <img src={insta8}></img>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="footerdiv4">
                        <div className="footerDiv4Data">
                            <h1>GET UPDATES:</h1>
                            <input required type='email' placeholder='Enter Your Email'></input>
                            <div className="sendbuttion">
                                <div className="buttt ">
                                    <FaArrowRight />
                                </div>
                            </div>

                            <h2>FOLLOW US :</h2>
                            <div className="socialIconss">
                                <div className="ico">
                                   <FaFacebookF className='icv'/>
                                </div>
                                
                                <div className="ico">
                                <FaLinkedinIn className='icv'/>
                                </div>
                                <div className="ico">
                                <IoLogoGoogleplus className='icv'/>
                                </div>

                                <div className="ico">
                                <IoLogoInstagram className='icv'/>
                                </div>

                                <div className="ico">
                                <FaTwitter className='icv'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
