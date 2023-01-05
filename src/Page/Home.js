import React from 'react'
import Image from '../Image/Daggus1.webp'

const Home =()=> {
    return(
        <>
            <div className="wrapper">
                <div className="header">
                    <div className="head">
                       <h2>STAR WARS API TASK</h2>
                    </div>
                </div>
                <div className="content-wrap">
                    <div className="container">
                        <img src={Image} alt=""/>
                            <div class="text-box">
                                <div class="namebx">
                                    <h5>Name:</h5>
                                    <h5 id="charnm"></h5>
                                </div>
                                <div class="text-icon">
                                    <i class="bi bi-chevron-double-down"></i>
                                </div>
                                <button class="view">View</button>
                            </div>
                    </div>
                   
                </div>
                <div class="single-wrap">
                    <div class="single">
                        <img src={Image} alt=""/>
                            <div class="single-text-box">
                                <div class="namebx">
                                    <h5>Name:</h5>
                                    <h5 id="charname"></h5>
                                </div>
                                <div class="heightbx">
                                    <h5>Height:</h5>
                                    <h5 id="charhght"></h5>
                                </div>
                                <div class="gdrbx">
                                    <h5>Gender:</h5>
                                    <h5 id="chargnd"></h5>
                                </div>
                                <button class="close">Close</button>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Home