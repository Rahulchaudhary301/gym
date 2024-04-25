import React, { useEffect, useState } from 'react'
import { FaDumbbell } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import { GiBiceps } from "react-icons/gi";
import { FaWolfPackBattalion } from "react-icons/fa";
import Aboutpic from '../img/about.jpg'

export default function About() {

    const [scrollY, setScrollY] = useState(0);
    const [navshow, setNavshow] = useState(0);




    const handleScroll = () => {
        if (window.scrollY < 200) {
            setScrollY(window.scrollY);
        }
    };

    const handleScrolll = () => {
        const navDiv = document.querySelector('.abouttpic');

        const navDiv1 = document.querySelector('.aboutData');

        if (navDiv) {
            if (window.scrollY >= 320) {
                navDiv.classList.add('aboutpicShow');
            } else {
                navDiv.classList.remove('aboutpicShow');
            }


            if (window.scrollY >= 320) {
                navDiv1.classList.add('ShowaboutData');
            } else {
                navDiv1.classList.remove('ShowaboutData');
            }

        }
    };

   


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('scroll', handleScrolll);
    }, [])









    return (
        <div>
            <div className="abouContainer">
                <div className="cardsContainer">
                    <div className="cards" >

                        <div className="card" style={{ transform: `translateY(${-scrollY}px)` }}>
                            <div className="logo">
                                <FaDumbbell />
                            </div>
                            <h2>Keep Your Body Always Fitn</h2>
                            <div className="pra">
                                <p>For me, fitness is part of my everyday life fitness does mean having big musclese it mean being active, quick and flexible can be defin.</p>
                            </div>
                        </div>

                        <div className="card" style={{ transform: `translateY(${-scrollY}px)` }}>
                            <div className="logo">
                                <FaHeartbeat />
                            </div>
                            <h2>Healthy Life, Healthy Future</h2>
                            <div className="pra">
                                <p>Flexibility is crucial to my fit ness. Incorporating a good warm-up and cool-down into every session decreas my chances of injury.</p>
                            </div>
                        </div>

                        <div className="card" style={{ transform: `translateY(${-scrollY}px)` }}>
                            <div className="logo">
                                <GiBiceps />
                            </div>
                            <h2>Give A Shape Of Your Body</h2>
                            <div className="pra">
                                <p>Crucial to my fitness. Incorp orating good warm-up and cooldown into ever session decreases my chances of injury. I use both.</p>
                            </div>
                        </div>

                        <div id='lastabout' className="card" style={{ transform: `translateY(${-scrollY}px)` }}>
                            <div className="logo">
                                <FaWolfPackBattalion />
                            </div>
                            <h2>Your Health Is Wealth For You</h2>
                            <div className="pra">
                                <p>Dynamicand static stretch in my training. I've starting doing a few yoga sessions which incorporates muscle strength and flexibility.</p>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="instrionMAin">
                    <div className="instrction">

                        <div className="aboutDataContainer">
                            <div className="aboutData">
                                <div className="hedIocn">
                                    <h2>We Are GymRex</h2>
                                </div>
                                <h1>Our Classes Are <span>Better Than</span> Others!</h1>

                                <div className="paragr">
                                    <p>Training is such a vital part of preparation for a game, you really do train to play. It tops up your ability, like sharpening a carving knife. You can get away with not doing it for a while, as long as you have.</p>
                                    <p>The acquisition of knowledge, his willingness to receive. Instruction, his reverence for learned and virtuous men, his attendance upon the teacher, and his.</p>
                                </div>
                                <button className='btn1'>GET IN TOUCH</button>
                            </div>

                        </div>


                        <div className="aboutpicContainer">
                            <div className="abouttpic">
                                <img src={Aboutpic}></img>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}
