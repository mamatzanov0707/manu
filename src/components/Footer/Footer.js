import React from 'react';
import './Footer.scss'
import {PiTelegramLogoDuotone} from "react-icons/pi";
import {BsInstagram} from "react-icons/bs";

const Footer = () => {
    return (
        <div id='footer'>
            <div className="container">
                <div className='footer'>
                   <div className='footer--block'>
                       <div className='footer--top'>
                           <h2>Restaurant</h2>
                       </div>
                       <div className='footer--about'>
                           <h4>interior</h4>
                           <h4>About us</h4>
                           <h4>Menu</h4>
                           <h4>Contacts</h4>
                       </div>
                       <div className='footer--icons'>
                           <PiTelegramLogoDuotone className='text-2xl' style={{color:"#fff"}}/>
                           <BsInstagram className='text-2xl' style={{color:'#fff'}}/>
                       </div>
                   </div>
                    <div className='footer--lina'></div>
                    <h3>c 2023 Motion Study LLC</h3>
                </div>
            </div>
        </div>
    );
};

export default Footer;