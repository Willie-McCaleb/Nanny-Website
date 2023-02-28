import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavMenu } from "./NavMenu";
import "./Navbar.css";

const Navbar = ({ children, logo, socials, navbar, container }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    // <>
    //   <div className={props.cName}>
    //     <Link to="#" className="menu-bars" onClick={showSidebar}>
    //       <i className={"fas fa-bars"}></i>
    //     </Link>
    //   </div>

    //   <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
    //     <ul className="nav-menu-items" onClick={showSidebar}>
    //       <li className="navbar-toggle">
    //         <Link to="#" className="menu-bars">
    //           <i className={"fas fa-times"}></i>
    //         </Link>
    //       </li>
    //       {NavMenu.map((item, index) => {
    //         return (
    //           <li key={index} className={item.cName}>
    //             <Link to={item.path}>
    //               <i className={item.icon}></i>
    //               <span>{item.title}</span>
    //             </Link>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </nav>
    // </>

    <div className={container}>
      <div className={navbar}>
        <Link to="#" className="menu-bars" onClick={showSidebar}>
          <i className={"fas fa-bars"}></i>
        </Link>
      </div>

      <div className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars" onClick={showSidebar}>
              <i className={"fas fa-xmark"}></i>
            </Link>
          </li>
          <div className="nav-list">
            <img
              className="hero-logo-list"
              alt="logo"
              src="assets/logos/sq logo.svg"
            />
            {NavMenu.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </div>
        </ul>

        {/* Where I place img for active navbar? */}
        <div className="nav_active_design">
          <img
            className="pattern2"
            alt="pattern design"
            src="assets/img/pattern2.svg"
          />
        </div>
        <img
          className="hero-logo-active"
          alt="website logo"
          src="assets/logos/sq logo.svg"
        />
      </div>

      <img className={logo} alt="website logo" src="assets/logos/sq logo.svg" />

      <div className={socials}>
        <a
          href="https://m.facebook.com/NannyNetworkNY/?mibextid=LQQJ4d"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-facebook" />
        </a>

        <a
          href="https://instagram.com/nannynetwork_ny?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram" />
        </a>

        <a href="/" target="_blank" rel="noreferrer" className="pinterest">
          <i className="fa-brands fa-pinterest" />
        </a>
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Navbar;
