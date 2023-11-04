import React, { useState } from "react";
import "./Hero.scss";
import { BsArrowRightShort } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import Modal from "./Modal";

const Hero = () => {
  const [modal, setModal] = useState(false);

  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <hr className="line1" />
          <div className="info">
            <div className="title">
              <div className="vector1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="10"
                  viewBox="0 0 43 10"
                  fill="none"
                >
                  <path
                    d="M42.2598 8.99229H3.25977C0.259766 7.99229 0.259766 2.99229 3.25977 1.49229C5.5451 0.349468 10.7598 0.99234 10.2598 5.99229"
                    stroke="#EF272C"
                    stroke-width="2"
                  />
                </svg>
                <hr className="lineVector1" />
              </div>
              <h1>Delicious</h1>
              <div className="vector2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="10"
                  viewBox="0 0 43 10"
                  fill="none"
                >
                  <path
                    d="M0.259766 8.99229H39.2598C42.2598 7.99229 42.2598 2.99229 39.2598 1.49229C36.9744 0.349468 31.7598 0.99234 32.2598 5.99229"
                    stroke="#EF272C"
                    stroke-width="2"
                  />
                </svg>
                <hr className="lineVector2" />
              </div>
            </div>
            <h2>Italian Cuisine</h2>
            <p>
              Classic steak & delicious with delightfully unexpenced twists
              <br />
              The Restaurant`s sunny decor was inspired by the diners
            </p>
            <div className="button">
              <hr className="buttonLine" />
              <button
                onClick={() => {
                  setModal(true);
                }}
              >
                Reserve Your Table
                <BsArrowRightShort
                  style={{ width: "25px", height: "25px", marginTop: "-5px" }}
                  />
              </button>
              <hr className="buttonLine" />
            </div>
          </div>
          <div className="text">
            <div className="location">
              <h4>Location</h4>
              <hr className="locationLine" />
              <HiLocationMarker
                style={{
                  color: "red",
                  width: "20px",
                  height: "20px",
                  margin: "0 11px 0 22px ",
                }}
                />
              <h5>Rua da moeda 1g,1200-275,Portugal</h5>
            </div>
            <div className="phone">
              <h4>Hotline</h4>
              <hr className="locationLine" />
              <BsFillTelephoneFill
                style={{
                  color: "red",
                  width: "20px",
                  height: "20px",
                  margin: "0 11px 0 0 ",
                }}
                />
              <h5>+771219900</h5>
            </div>
          </div>
          <hr className="line2" />
          <hr className="line3" />
        </div>
      </div>
    <div>
      {modal && <Modal/>}
    </div>
    </div>
  );
};

export default Hero;
