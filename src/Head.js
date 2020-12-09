import React from 'react';
import fishRollBanner from './fishRollBanner.png';
// For node packages, don't put a `.` and `/` but for other files like
// your .js and .css files, use them to specify the relative path.

// import "./Header.css"


function Head() {
    return (
        <React.Fragment>
            <header>
            <div id="logo">
            <hgroup>
                <h1>
                <span id="firstLetter">C</span>
                <span id="secondLetter">o</span>
                <span id="thirdLetter">n</span>
                <span id="fourthLetter">j</span>
                <span id="fifthLetter">u</span>
                <span id="sixLetter">r</span>
                <span id="seventhLetter">e</span>
                </h1>
                <h2><span id="subName">Snacks</span></h2>
            </hgroup>
            </div>
            <img src={fishRollBanner}
                width="400px" 
                height="210px" 
                id="headerImage"
                alt="Fish Roll"/>
            </header>

        <nav id="mainNav">
        <ul>
        <li class="first-tier" id="first-tier-li"><a href="./index.html">Home</a></li>
        <li class="first-tier" id="second-tier-li"><a href="./about.html">About Us</a></li>
        <li class="first-tier" id="third-tier-li"><a href="./contact.html">Contact Us</a>
            <ul>
            <li><a href="./requestDelivery.html">Request a Delivery</a></li>
            <li><a href="./review.html">Give us a Review</a></li>
            </ul>
        </li>
        <li class="first-tier" id="fourth-tier-li">
            <a href="#">Help</a>
            <ul>
            <li><a href="./tour.html">Tour Video</a></li>
            <li><a href="./faq.html">FAQs</a></li>
            </ul>
        </li>
        <li class="first-tier" id="fifth-tier-li">
            <a href="#">Products</a>
            <ul>
                <li><a href="./products.html">Our Snacks</a></li>
                
            </ul>
            </li>
        </ul>
        </nav>
        
    </React.Fragment>
    )
}

export default Head;