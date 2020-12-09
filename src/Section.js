import React from 'react';

import "./Section.css";

import veggieBurgerBanner from './veggieBurgerBanner.jpg';
import fishRollBanner from './fishRollBanner.jpg';
import chickenShawBanner from './chickenShawBanner.jpg';

function Section() {
    return (
        <React.Fragment>
        <section className="row mt-5 mt-md-3 mx-0 pt-5 px-2 clearfix">
            <article id="home-article" className="col-12 py-1 rounded-sm">
            <div id="home-slider" className="row">
                <div className="item-divs col-12 col-md-4 px-0">
                <a href="" className="image-wrapper-link px-1">
                    <img src={veggieBurgerBanner} 
                        alt="Veggie Burger" 
                        title="Veggie Burger"
                        className="item-desc-img" />
                </a>
                <div className="item-desc-div mt-3 px-2">
                    <p>
                    Veggie Burger, made with whole grains and vegetables - tomato, spinach.
                    </p>
                </div>
                </div>
                
                <div className="item-divs col-12 col-md-4 mt-5 mt-md-0 px-0">
                <a href="" className="image-wrapper-link px-1">
                    <img src={fishRollBanner} 
                        alt="Fish Roll"
                        title="Fish Roll" 
                        className="item-desc-img" />
                </a>
                <div className="item-desc-div mt-3 px-2">
                    <p>
                    Fish roll, cooked salmon rolled in wheat served with green vegetables.
                    </p>
                </div>
                </div>
                <div className="item-divs col-12 col-md-4 mt-5 mt-md-0 px-0">
                <a href="" className="image-wrapper-link px-1">
                    <img src={chickenShawBanner} 
                        alt="" 
                        title="Chicken Shawarma" 
                        className="item-desc-img" />
                </a>
                <div className="item-desc-div mt-3 px-2">
                    <p>
                    Chicken Shawarma, flour rolled around chicken and vegetable choppings.
                    </p>
                </div>
                </div>
                <div id ="review" className="clearfix"> 
                <p className="mt-4 ml-5 pl-0">#1 &nbsp;&nbsp;Jarnice: Great Restaurant, Great Site, Great Food!</p>
                <p className="mt-4 ml-5 pl-4">#2&nbsp;&nbsp;&nbsp;Torv: You folks are great, keep up the good work!</p>
                </div>
            </div>
            </article>
         <p id="info-par" className="mt-5 px-5">New Here? <a href="./tour.html">Take Tour Video</a></p>
      </section>
      </React.Fragment>
    )
}

export default Section
