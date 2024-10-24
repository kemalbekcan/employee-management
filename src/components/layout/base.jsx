import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header"
import Modal from "../modal";
import Footer from "@/components/layout/footer";
import { Fragment } from "react";

const Base = () => {
  return (
    <Fragment>
      <Modal />
      <Header />
      
      <div className="flex">
       
        <Sidebar />
        <main className="relative mt-20 w-full">
          <Outlet />
        </main>
        
      </div>
      <Footer />
    </Fragment>
  );
};

export default Base;
