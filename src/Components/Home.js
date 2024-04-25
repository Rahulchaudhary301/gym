import React from 'react'
import NaveBar from './NaveBar'

export default function Home() {
    return (
        <div>
            <div className="homeContainer">
                <NaveBar />

                <div className="main">
                <div className="homePage">
                    <div className="heding">
                        <h1>Fitness Helps Me Think Better, Feel
                            Better, And Move Better.</h1>
                    </div>
                    <div className="pragragh">
                        <p>Physical fitness is not only one of the most important keys to a healthy
                            body, it is the basis of dynamic and creative intellectual activity.</p>
                    </div>
                    <div className="bothButton">
                       <button className='btn1 gebut'>ADMIT CLASS</button>
                       <button className='btn1 gebut'>CONTACT US</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
