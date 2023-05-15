import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-screen flex justify-center items-center p-5 bg-zinc-100 shadow-md">
        <div className="">
          <h1>Snacklicious</h1>
        </div>
        <div className="flex-1">
          <ul className=" flex flex-row  justify-center ">
            <Link to={`/`} className=" mr-4 hover:bg-slate-100 p-3">
              Home
            </Link>
            <Link to={`/product`} className=" mr-4 hover:bg-slate-100 p-3">
              Product
            </Link>
            <Link to={`/about_us`} className=" mr-4 hover:bg-slate-100 p-3">
              About us
            </Link>
          </ul>
        </div>
        <div className="">
          <Link to={`/login`} className=" mr-4 hover:bg-slate-100 p-3">
            Login
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Navbar;
