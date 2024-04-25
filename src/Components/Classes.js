import React, { useEffect } from 'react'
import pic1 from '../img/sectionpic1.jpg'
import pic2 from '../img/sectionpic2.jpg'
import pic3 from '../img/sectionpic3.jpg'
import pic4 from '../img/sectionpic4.jpg'
import pic5 from '../img/sectionpic5.jpg'
import pic6 from '../img/sectionpic6.jpg'
import pic7 from '../img/sectionpic7.jpg'

export default function Classes() {



    const handleScrolll = () => {
        const navDiv = document.querySelector('.classHeder');
        const navDiv1 = document.querySelector('.class1Container');
        const navDiv2 = document.querySelector('.bcContainer');
        const navDiv3 = document.querySelector('.dv');
        const navDiv4 = document.querySelector('.dw');
        const navDiv5 = document.querySelector('.dx');
        const navDiv6 = document.querySelector('.dd');
        const navDiv7 = document.querySelector('.vv');

        // const navDiv1 = document.querySelector('.aboutData');

        if (navDiv) {
            if (window.scrollY >= 1100) {
                navDiv.classList.add('showclass');
            } else {
                navDiv.classList.remove('showclass');
            }


            if (window.scrollY >= 1280) {
                navDiv1.classList.add('showclass1');
            } else {
                navDiv1.classList.remove('showclass1');
            }

            if (window.scrollY >= 1280) {
                navDiv2.classList.add('shwobc');
            } else {
                navDiv2.classList.remove('shwobc');
            }

            if (window.scrollY >= 1800) {
                navDiv3.classList.add('showcl3');
            } else {
                navDiv3.classList.remove('showcl3');
            }

            if (window.scrollY >= 1800) {
                navDiv4.classList.add('showdw');
            } else {
                navDiv4.classList.remove('showdw');
            }

            if (window.scrollY >= 1800) {
                navDiv5.classList.add('showdx');
            } else {
                navDiv5.classList.remove('showdx');
            }

            if (window.scrollY >= 2200) {
                navDiv6.classList.add('ddshow');
            } else {
                navDiv6.classList.remove('ddshow');
            }

            if (window.scrollY >= 2200) {
                navDiv7.classList.add('vvshow');
            } else {
                navDiv7.classList.remove('vvshow');
            }

        }
    };




    useEffect(() => {
        // window.addEventListener('scroll', handleScroll)
        window.addEventListener('scroll', handleScrolll);
    }, [])







    return (
        <div>
            <div className="classContainer">

                <div className="headerConatiner">
                    <div className="classHeder">
                        <h1>Our New Classes</h1>
                        <div className="prra">
                            <p>Fitness, in my opinion, is a mental exercise more than just physical. want to become physically stronger, you'll need healthy.</p>
                        </div>

                    </div>

                </div>

                <div className="sectionContainr">
                    <div className="section1">
                        <div className="ab">
                            <div className="class1Container" id='cl1'>
                                <div className="class1">
                                    <img src={pic1}></img>
                                    <div className="classoverlay">
                                        <div className="overlayData">
                                            <h1>Weight Lifting</h1>
                                            <div className="paragraph">
                                                <p>Fight is won or lost far away from witnesses behind lines, in the gym, and out there.</p>
                                            </div>
                                            <button className='btn1 overbut'>GET IN TOUCH</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bc">
                            <div className="bcContainer">
                                <div className="class1" id='cl2'>
                                    <img src={pic2}></img>
                                    <div className="classoverlay">
                                        <div className="overlayData">
                                            <h1>Weight Lifting</h1>
                                            <div className="paragraph">
                                                <p>Fight is won or lost far away from witnesses behind lines, in the gym, and out there.</p>
                                            </div>
                                            <button className='btn1 overbut'>GET IN TOUCH</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="section2Container">
                    <div className="section2">
                        <div className="allsecond">
                            <div className="cd">
                                <div className="class1 mar dv" id='cl3'>
                                    <img src={pic3}></img>
                                    <div className="classoverlay">
                                        <div className="overlayData sec">
                                            <h1>Weight Lifting</h1>
                                            <div className="paragraph">
                                                <p>Fight is won or lost far away from witnesses behind lines, in the gym, and out there.</p>
                                            </div>
                                            <button className='btn1 overbut'>GET IN TOUCH</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="de">
                                <div className="class1  dw" id='cl3'>
                                    <img src={pic4}></img>
                                    <div className="classoverlay">
                                        <div className="overlayData sec">
                                            <h1>Weight Lifting</h1>
                                            <div className="paragraph">
                                                <p>Fight is won or lost far away from witnesses behind lines, in the gym, and out there.</p>
                                            </div>
                                            <button className='btn1 overbut'>GET IN TOUCH</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ef">
                                <div className="class1 dx " id='cl3'>
                                    <img src={pic5}></img>
                                    <div className="classoverlay">
                                        <div className="overlayData sec">
                                            <h1>Weight Lifting</h1>
                                            <div className="paragraph">
                                                <p>Fight is won or lost far away from witnesses behind lines, in the gym, and out there.</p>
                                            </div>
                                            <button className='btn1 overbut'>GET IN TOUCH</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>


                <div className="section3Container">
                    <div className="section3">
                        <div className="allsecond">
                            <div className="clContainer">
                                <div className="class1 mar dd" id='cl4'>
                                    <img src={pic6}></img>
                                    <div className="classoverlay">
                                        <div className="overlayData sec">
                                            <h1>Weight Lifting</h1>
                                            <div className="paragraph">
                                                <p>Fight is won or lost far away from witnesses behind lines, in the gym, and out there.</p>
                                            </div>
                                            <button className='btn1 overbut'>GET IN TOUCH</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cl2Container">
                                <div className="class1 vv" id='cl5'>
                                    <img src={pic7}></img>
                                    <div className="classoverlay">
                                        <div className="overlayData sec">
                                            <h1>Weight Lifting</h1>
                                            <div className="paragraph">
                                                <p>Fight is won or lost far away from witnesses behind lines, in the gym, and out there.</p>
                                            </div>
                                            <button className='btn1 overbut'>GET IN TOUCH</button>
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
