import React from "react";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import {Outlet} from "react-router-dom"; 
export default function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}
