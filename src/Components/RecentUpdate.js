import React, { useEffect } from 'react'
import updatepic1 from '../img/updatepic1.jpg'
import updatepic2 from '../img/updatepic2.jpeg'
import updatepic3 from '../img/updatepic3.jpg'



export default function RecentUpdate() {

    
    const handleScrolll = () => {

        const navDiv = document.querySelector('.x');

          const navDiv1 = document.querySelector('.y');
          const navDiv2 = document.querySelector('.z');

        //   const navDiv3 = document.querySelector('.d');
        //   const navDiv4 = document.querySelector('.e');

        //   const navDiv5 = document.querySelector('.f');

        if (navDiv) {
          

            if (window.scrollY >= 4750) {
                navDiv.classList.add('showupdate');
            } else {
                navDiv.classList.remove('showupdate');
            }

            if (window.scrollY >= 4750) {
                navDiv1.classList.add('showupdate');
            } else {
                navDiv1.classList.remove('showupdate');
            }

            
            if (window.scrollY >= 4750) {
                navDiv2.classList.add('showupdate');
            } else {
                navDiv2.classList.remove('showupdate');
            }

          
        }
    };

    
    useEffect(() => {
        // window.addEventListener('scroll', handleScroll)
        window.addEventListener('scroll', handleScrolll);
    }, [])




    return (
        <div>
            <div className="recentUpdateContainer">
                <div className="recentbody">
                    <div className="recentHederbox">
                        <h1>Our Recent Updates</h1>
                        <p>Fitness, in my opinion, is a mental exercise more than just physical. want to become physically stronger, you'll need healthy.</p>
                    </div>
                </div>

                <div className="recentCarddiv">
                    <div className="recentBox x">
                        <div className="recentCard">
                            <div className="imgdiv">
                                <img src={updatepic1}></img>
                            </div>
                            <h2>GYM For Your Best Health!</h2>
                            <p>Organic food the best for you and eating the best, a lot of fresh vegetables.</p>
                            <div className="dateee"> <p>21 May</p> </div>
                        </div>
                    </div>

                    <div className="recentBox y">
                        <div className="recentCard">
                            <div className="imgdiv">
                                <img src={updatepic2}></img>
                            </div>
                            <h2>GYM For Your Best Health!</h2>
                            <p>Organic food the best for you and eating the best, a lot of fresh vegetables.</p>
                            <div className="dateee"> <p>21 May</p> </div>
                        </div>
                    </div>

                    <div className="recentBox z">
                        <div className="recentCard">
                            <div className="imgdiv">
                                <img src={updatepic3}></img>
                            </div>
                            <h2>GYM For Your Best Health!</h2>
                            <p>Organic food the best for you and eating the best, a lot of fresh vegetables.</p>
                            <div className="dateee"> <p>21 May</p> </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
