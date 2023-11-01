import React from "react";
import "./Exception.scss";
import Slider from "react-slick";
import logo from "../../../src/img/Frame 20.png";

const Exception = () => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1800,
    autoplaySpeed: 1800,
  };
  return (
    <div id="tools">
      <div className="container">
        <div className="tools">
          <div className="tools--master">
            <div className="tools--master__help">
              <div className="tools--master__help--run">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="10"
                  viewBox="0 0 43 10"
                  fill="none"
                >
                  <path
                    d="M42.2598 8.99226H3.25977C0.259766 7.99226 0.259766 2.99226 3.25977 1.49226C5.5451 0.349437 10.7598 0.99231 10.2598 5.99226"
                    stroke="#EF272C"
                    stroke-width="2"
                  />
                </svg>
                <div className="tools--master__help--run__work"></div>
              </div>
              <h4>Best Sellers</h4>
            </div>
            <h3>
              You Only Reserve <br />
              Exception
            </h3>
            <p>
              Each location has a menu that`s curated just for them. <br />
              See what new at your Cafesio and You`ll find Cafesio <br />
              Covent Carden moments.
            </p>
          </div>
          <div className="tools--slick">
            <Slider {...settings}>
              <div className="tools--slick__image">
                <img src={logo} alt="logo" />
              </div>
              <div className="tools--slick__image">
                <img src={logo} alt="logo" />
              </div>
              <div className="tools--slick__image">
                <img src={logo} alt="logo" />
              </div>
              <div className="tools--slick__image">
                <img src={logo} alt="logo" />
              </div>
              <div className="tools--slick__image">
                <img src={logo} alt="logo" />
              </div>
              <div className="tools--slick__image">
                <img src={logo} alt="logo" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exception;
