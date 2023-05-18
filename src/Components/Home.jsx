// Home screen component

import React from "react";
import Pict from "../assets/grid_0.png";
import '../style/Home.css'
import { Link } from "react-router-dom";

import { AiFillInstagram, AiFillFacebook, AiFillTwitterCircle, AiFillContacts, AiFillFlag } from 'react-icons/ai';



function Home() {
  return (
    <>
      <div className='flex justify-center align-middle m-10'>

        {/*HERO*/}
        <div>
          <img src={Pict} alt="Your Image" width={400} className='rounded-lg' />
          <p className="text-2xl text-center m-3">Snacklicious</p>
        </div>
      </div>

      {/*PRODUCT*/}
      <div className=' pb-10 '>
        <h1 className='text-center text-4xl m-10 p-10 bg-red-100 rounded-lg'>Our Favorite Product</h1>
        <div className='flex flex-row mr-10 ml-10 gap-10 overflow-auto flex-wrap justify-center'>

          {/*Component Product in Card Style*/}
          <div className='flex-col align-middle bg-slate-600 w-1/3'>
            <div className="text-center p-5">
              <img src={Pict} alt="Your Image" width={300} className='rounded-lg w-screen ' />
              <p className="text-left pt-1 pb-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fuga a illum earum voluptate molestiae quia quasi expedita, iste ipsam sit, nostrum tempora veniam doloremque magnam at, eos natus facilis?</p>
              <button className='bg-red-400 mt-2 mb-2 text-center w-full rounded-lg p-1 '>
                <span >Add to Cart</span> </button>
            </div>
          </div>


          <div className='flex-col align-middle bg-slate-600 w-1/3'>
            <div className="text-center p-5">
              <img src={Pict} alt="Your Image" width={300} className='rounded-lg w-screen ' />
              <p className="text-left pt-1 pb-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fuga a illum earum voluptate molestiae quia quasi expedita, iste ipsam sit, nostrum tempora veniam doloremque magnam at, eos natus facilis?</p>
              <button className='bg-red-400 mt-2 mb-2 text-center w-full rounded-lg p-1 '>
                <span >Add to Cart</span> </button>
            </div>
          </div>
        </div>
      </div>


      <div className='footer bg-gray-500 w-full p-20'>
        {/*Kontak*/}
        <ul>
          <li className="flex "><AiFillInstagram className='mr-4 text-2xl' /> Instagram</li>
          <li  className="flex "><AiFillFacebook className='mr-4 text-2xl' /> Facebook</li>
          <li  className="flex "><AiFillTwitterCircle className='mr-4 text-2xl' />Twitter</li>
          <li  className="flex "><AiFillContacts className='text-2xl mr-4' />Contact Us : 021-9090878</li>
          <li  className="flex "><AiFillFlag className='mr-4 text-2xl' />Jl. merdeka 45 blok 2</li>
        </ul>
      </div>





    </>

  );
}

export default Home;
