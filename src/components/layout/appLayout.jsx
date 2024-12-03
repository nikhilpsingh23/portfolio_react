import React from "react";
import Navbar from "../Ui/navbar";
import Footer from "../Ui/footer";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
