import React from "react";
import "./Main.css";

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

const Main = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <div className="topnav" id="myTopnav">
        <a href="" >Yours </a>
        <a href="">ALL</a>
        <a href="">Blocked</a>
  
        <a href="javascript:void(0);" class="icon" >
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </>
  );
};

export default Main;
