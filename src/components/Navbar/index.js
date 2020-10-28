import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../Logo";
import Info from '@material-ui/icons/Info';
import Laptop from '@material-ui/icons/Laptop';
import WorkIcon from '@material-ui/icons/Work';
import { Container, Tooltip } from '@material-ui/core';


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav 
    className="navbar navbar-expand-lg navbar-light"
    style={{
      backgroundColor:'#BFBDC1',
    }}
    
    >
      <Logo/>
      <div 
        className="navbar-brand" 
        to="/about"
        style={{
          padding: 'none',
          height: '160px',
          marginTop: 0,
      }}>
        <text style={{  
          fontSize:'55px',
          fontWeight:300,
          color: '#6D6A75',
          marginLeft: '-5px',
          marginBottom: '-50px',
          fontFamily: 'Source Sans Pro, sans-serif',
          textShadow: '3px 3px WHITE',}}>Richard Antolin
        </text><br/>
        <text style={{
          color: 'white',
          fontSize:'20px',
          marginBottom:'-50px',
          textShadow: '2px 2px #white',
          }}>Full Stack Web Developer/UX Engineer
        </text><br/>        
        <text style={{
          color: 'white',
          fontSize:'12px',
          marginTop: '-20px',
          textShadow: '2px 2px #white',
          }}>CONTACT INFO: RICHARDANTOLIN@GMAIL.COM
        </text>
      </div>
      

      <div>
        <span className="navbar-nav"
          style={{alignItems: 'right', marginLeft:'25px', marginBottom: '-20px'}}>
          
            <Tooltip title='About Me'>
              <div className="nav-item">
                  <Link
                    className= "Iconbuttons"
                    style={{             
                      fontSize: '14px',
                      fontWeight:400,
                      color: "white",
                      backgroundColor: '#DEB841',
                      borderRadius: '10px 10px 10px 10px',
                      boxShadow: '3px 3px',
                      textAlign: 'center',
                      width: '110px',
                      marginRight:'20px',
                      marginBottom: '10px'
                    }}
                    to="/about"
                    className={window.location.pathname === "/about" || 
                              window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                    About
                  <Info style={{fontSize:'25px', marginLeft:'10px'}}/>
                </Link>
              </div>
            </Tooltip>

            <Tooltip title='My Work'>
              <div className="nav-item">
                <Link
                  style={{
                    fontSize: '14px',
                    fontWeight:400,
                    color: "white",
                    backgroundColor: '#DEB841',
                    borderRadius: '10px 10px 10px 10px',
                    boxShadow: '3px 3px',
                    textAlign: 'center',
                    width: '110px',
                    marginRight:'20px',
                    marginBottom:'10px'
                  }}
                  
                  to="/portfolio"
                  className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                  Portfolio
                  <Laptop style={{fontSize:'25px', marginLeft:'10px'}}/>
                </Link>
              </div>
            </Tooltip>

            <Tooltip title='Resume'>
              <div className="nav-item">
                <Link
                  style={{
                    fontSize: '14px',
                    fontWeight:400,
                    color: "white",
                    backgroundColor: '#DEB841',
                    borderRadius: '10px 10px 10px 10px',
                    boxShadow: '3px 3px',
                    textAlign: 'center',
                    width: '110px',
                    marginBottom:'30px'
                  }}
                  
                  to="/resume"
                  className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}>
                  Resume
                  <WorkIcon style={{fontSize:'25px', marginLeft:'10px'}}/>
                </Link>
              </div>
            </Tooltip>
          
          <div className="nav-item">
          </div>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
