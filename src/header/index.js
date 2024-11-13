import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import {socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import logok from '../assets/images/logok.png';
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link  className="navbar-brand nav_ac" to="/">
            <img src={logok} alt="Logo" className="logo"  style={{backgroundColor:'none', borderRadius: '50px 100px 10px 40px'}}/>
          </Link>
          <div className="d-flex align-items-center">
          <Themetoggle />
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
          
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link  onClick={handleToggle} to="/" className="my-3">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/portfolio" className="my-3"> Portfolio</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3">About</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3"> Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-4">
            <div className="d-flex" style={{gap:"40px"}}>
             <a className="co" href={socialprofils.github}><FaGithub style={{fontSize:"40px"}}/></a>
             <a className="co" href="laza02340@gmail.com"><MdEmail style={{fontSize:"40px"}}/></a>
             <a  className="co" href="https://www.linkedin.com/in/laza-niaina-4748262b6/"><CiLinkedin style={{fontSize:"40px"}} /></a>
             <a className="co" href={socialprofils.facebook}><FaFacebookF style={{fontSize:"40px"}}/></a>
            
            </div>
            <img src={logok} alt="Logo" className="logo"  style={{backgroundColor:'none', borderRadius: '50px 100px 10px 40px'}}/>
          </div>
        </div>  
      </header>
      
    </>
  );
};

export default Headermain;
