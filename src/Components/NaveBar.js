import React, { useEffect } from 'react'
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";



export default function NaveBar() {



    const triggerSling = () => {
        document.querySelector('.slingbarr').classList.add('activeee')
    }

    const triggerCloseSling = () => {
        document.querySelector('.slingbarr').classList.remove('activeee')
    }



    useEffect(() => {
        const handleScroll = () => {
            const navDiv = document.querySelector('.navContainer');

            if (navDiv) {
                if (window.scrollY >= 120) {
                    navDiv.classList.add('scrolled');
                } else {
                    navDiv.classList.remove('scrolled');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            // window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div className='sl' >
            <div className="navContainer">
                <div className="upperContainer">
                    <div className="upperNav">
                        <div className="allicons">
                            <div className="icons"><FaFacebookF /> </div>
                            <div className="icons"><FaTwitter /> </div>
                            <div className="icons"><IoLogoGoogleplus /> </div>
                            <div className="icons"> <IoLogoInstagram /> </div>
                        </div>


                        <div className="emailNum">
                            <div className="mail"><MdEmail className='mai' /></div>

                            <div className="mail">
                                <p >address@gmail.com</p>
                            </div>

                            <div className="mail"> <IoCall className='mai' /> </div>
                            <div className="mail">
                                <p>9852675983</p>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="border">
                    <hr className='border' />
                </div>

                <div className="lower">
                    <div className="lowercontainer">
                        <div className="logo">
                            <h1>Re<span>X</span>fit</h1>
                        </div>

                        <div className="menu">
                            <ul>
                                <li>HOME</li>
                                <li>TRAINER</li>
                                <li>CLASSES</li>
                                <li>ABOUT</li>
                                <li>SERVICES</li>
                                <li>BLOG</li>
                                <li>SECULES</li>
                                <li>PAGES</li>
                                <button className='getButton'>Get In Touch</button>

                                <div className="bardiv">
                                    <FaBars onClick={triggerSling} className='barr' />
                                </div>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>

            <div className="slingbarr">

                <div onClick={triggerCloseSling} className="closeee">
                    <IoClose className='clcv' />
                </div>


                <div className="slidngbox">
                    <div className="slidingdata">
                        <div className="logo lll">
                            <h1>Re<span>X</span>fit</h1>
                        </div>
                      
                      <hr/>

                      <div className="slidingMenu">
                            <ul>
                                <li>HOME</li>
                                <li>TRAINER</li>
                                <li>CLASSES</li>
                                <li>ABOUT</li>
                                <li>SERVICES</li>
                                <li>BLOG</li>
                                <li>SECULES</li>
                                <li>PAGES</li>
                                <button className='gebut slibutt'>Get In Touch</button>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
