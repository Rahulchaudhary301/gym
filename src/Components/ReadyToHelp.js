import React, { useEffect } from 'react'
import Help from '../img/help.png'


export default function ReadyToHelp() {


    const handleScrolll = () => {
        const navDiv = document.querySelector('.builderImg');
        const navDiv1 = document.querySelector('.transss');
        

        // const navDiv1 = document.querySelector('.aboutData');

        if (navDiv) {
            if (window.scrollY >= 3000) {
                navDiv.classList.add('showbuilder');
            } else {
                navDiv.classList.remove('showbuilder');
            }


            if (window.scrollY >= 3000) {
                navDiv1.classList.add('showConteent');
            } else {
                navDiv1.classList.remove('showConteent');
            }

        }
    };

    useEffect(() => {
        // window.addEventListener('scroll', handleScroll)
        window.addEventListener('scroll', handleScrolll);
    }, [])



    return (
        <div>

            <div className="redyContainer">
                <div className="flexReadyContainer">
                    <div className="bothContainer">
                        <div className="readyContent">
                            <div className="transss">
                                <h1>We Are Ready To Help You To Get Perfect Fitness!</h1>
                                <div className="helpPara">
                                    <p>Exercise is really important to me - it's therapeutic. So if I'm ever feeling tense or stressed or like I'm about to have a meltdown, I'll put on my.</p>
                                </div>
                                <button className='btn1 readyBut'>GET IN TOUCH</button>
                            </div>
                        </div>

                        <div className="builderpic">
                            <img className='builderImg' src={Help}></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
