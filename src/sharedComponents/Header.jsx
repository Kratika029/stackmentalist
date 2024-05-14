import React from "react";
import { Flex } from "antd";
import logo from "../../public/logo.png";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  return (
    <>
      <header id="header" className="header-container">
        {/* <Flex gap="middle" align="end" horizontal style = {{backgroundColor: "green" }}>
        <div style = {{backgroundColor: "green" , padding : "0px 5px 0px 5px"}}> 
        <Flex justify = "flex-start" gap="middle" horizontal >
              <img src = {logo} width = "55px" height = "60px"/>
           </Flex>
           <Flex justify = "end" gap="middle" horizontal>
            <h1>dhh</h1>
            <ul>
              <li>home</li>
            </ul>
           </Flex>
        </div>
        </Flex> */}
        <div className="container">
          <div className="nav">
            <a href="" className="nav-brand">
              <img src={logo} width="55px" height="60px" />
            </a>
            <a
              href="/"
              style={{
                color: "#1e1666",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              THE STACKMENTALIST
            </a>
          </div>

          {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
          <ul class="navbar">
            <li class="nav-item">
              <a class="nav-link" 
              onClick={(e) =>{ 
                e.preventDefault();
                navigate("/ourservices")
            }}
              href=""
              >
                
                Our Services{" "}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" 
              onClick={(e) =>{ 
                e.preventDefault();
                navigate("/about")
            }
              }
              href=""
              >
                About Us{" "}
              </a>
            </li>
          </ul>
          {/* </div> */}
        </div>
      </header>
    </>
  );
}

export default Header;
