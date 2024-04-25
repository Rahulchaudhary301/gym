import React, { useEffect } from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import Train from '../img/trainer.jpg'



export default function OurExperts() {




    const handleScrolll = () => {

        const navDiv = document.querySelector('.a');

          const navDiv1 = document.querySelector('.b');
          const navDiv2 = document.querySelector('.c');

          const navDiv3 = document.querySelector('.d');
          const navDiv4 = document.querySelector('.e');

          const navDiv5 = document.querySelector('.f');

        if (navDiv) {
          

            if (window.scrollY >= 3780) {
                navDiv.classList.add('aa');
            } else {
                navDiv.classList.remove('aa');
            }

            if (window.scrollY >= 3780) {
                navDiv1.classList.add('aa');
            } else {
                navDiv1.classList.remove('aa');
            }

            
            if (window.scrollY >= 3780) {
                navDiv2.classList.add('aa');
            } else {
                navDiv2.classList.remove('aa');
            }

            if (window.scrollY >= 3880) {
                navDiv3.classList.add('aa');
            } else {
                navDiv3.classList.remove('aa');
            }

            
            if (window.scrollY >= 3880) {
                navDiv4.classList.add('aa');
            } else {
                navDiv4.classList.remove('aa');
            }

            if (window.scrollY >= 3880) {
                navDiv5.classList.add('aa');
            } else {
                navDiv5.classList.remove('aa');
            }

        }
    };

    
    useEffect(() => {
        // window.addEventListener('scroll', handleScroll)
        window.addEventListener('scroll', handleScrolll);
    }, [])









    return (
        <div>
            <div className="expertContainer">

                <div className="ExpertBody">
                    <div className="headContainer">
                        <div className="ExpertHead">
                            <h1>Our Expert Trainers</h1>
                            <p>Fitness, in my opinion, is a mental exercise more than just physical. want to become physically stronger, you'll need healthy.</p>
                        </div>
                    </div>



                    <div className="carBoxx">
                        <div className="nmnm">
                            <div className="cardConainer a">
                                <div className="marrrr">
                                    <div className="picContainer"> <img src={Train}></img> </div>
                                    <h1>Jonathon Roso</h1>
                                    <h2>Lead Trainer</h2>
                                    <div className="socialMedia">
                                        <div className="socalIcons">
                                            <FaLinkedinIn />
                                        </div>
                                        <div className="socalIcons">
                                            <FaFacebookF />
                                        </div>
                                        <div className="socalIcons">
                                            <FaTwitter />
                                        </div>
                                        <div className="socalIcons">
                                            <IoLogoGoogleplus />
                                        </div>
                                        <div className="socalIcons">
                                            <IoLogoInstagram />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cardConainer b">
                                <div className="marrrr">
                                    <div className="picContainer"> <img src={Train}></img> </div>
                                    <h1>Jonathon Roso</h1>
                                    <h2>Lead Trainer</h2>
                                    <div className="socialMedia">
                                        <div className="socalIcons">
                                            <FaLinkedinIn />
                                        </div>
                                        <div className="socalIcons">
                                            <FaFacebookF />
                                        </div>
                                        <div className="socalIcons">
                                            <FaTwitter />
                                        </div>
                                        <div className="socalIcons">
                                            <IoLogoGoogleplus />
                                        </div>
                                        <div className="socalIcons">
                                            <IoLogoInstagram />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cardConainer c">
                                <div className="marrrr">
                                    <div className="picContainer"> <img src={Train}></img> </div>
                                    <h1>Jonathon Roso</h1>
                                    <h2>Lead Trainer</h2>
                                    <div className="socialMedia">
                                        <div className="socalIcons">
                                            <FaLinkedinIn />
                                        </div>
                                        <div className="socalIcons">
                                            <FaFacebookF />
                                        </div>
                                        <div className="socalIcons">
                                            <FaTwitter />
                                        </div>
                                        <div className="socalIcons">
                                            <IoLogoGoogleplus />
                                        </div>
                                        <div className="socalIcons">
                                            <IoLogoInstagram />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardConainer d">
                                <div className="marrrr">
                                    <div className="picContainer"> <img src={Train}></img> </div>
                                    <h1>Jonathon Roso</h1>
                                    <h2>Lead Trainer</h2>
                                    <div className="socialMedia">
                                        <div className="socalIcons">
                                            <FaLinkedinIn />
                                        </div>
                                        <div className="socalIcons">
                                            <FaFacebookF />
                                        </div>
                                        <div className="socalIcons">
                                            <FaTwitter />
                                        </div>
                                        <div className="socalIcons">
                                            <IoLogoGoogleplus />
                                        </div>
                                        <div className="socalIcons">
                                            <IoLogoInstagram />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cardConainer e">
                                <div className="marrrr">
                                    <div className="picContainer"> <img src={Train}></img> </div>
                                    <h1>Jonathon Roso</h1>
                                    <h2>Lead Trainer</h2>
                                    <div className="socialMedia">
                                        <div className="socalIcons">
                                            <FaLinkedinIn />
                                        </div>
                                        <div className="socalIcons">
                                            <FaFacebookF />
                                        </div>
                                        <div className="socalIcons">
                                            <FaTwitter />
                                        </div>
                                        <div className="socalIcons">
                                            <IoLogoGoogleplus />
                                        </div>
                                        <div className="socalIcons">
                                            <IoLogoInstagram />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cardConainer f">
                                <div className="marrrr">
                                    <div className="picContainer"> <img src={Train}></img> </div>
                                    <h1>Jonathon Roso</h1>
                                    <h2>Lead Trainer</h2>
                                    <div className="socialMedia">
                                        <div className="socalIcons">
                                            <FaLinkedinIn />
                                        </div>
                                        <div className="socalIcons">
                                            <FaFacebookF />
                                        </div>
                                        <div className="socalIcons">
                                            <FaTwitter />
                                        </div>
                                        <div className="socalIcons">
                                            <IoLogoGoogleplus />
                                        </div>
                                        <div className="socalIcons">
                                            <IoLogoInstagram />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>




                </div>

            </div>
        </div>
    )
}
