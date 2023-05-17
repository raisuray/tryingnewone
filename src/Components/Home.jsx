// Home screen component

import React from "react";
import Pict from "../assets/grid_0.png";
import '../style/Home.css'
import {Link} from "react-router-dom";

import { AiFillInstagram, AiFillFacebook, AiFillTwitterCircle, AiFillContacts ,AiFillFlag} from 'react-icons/ai';



function Home() {
  return (
      <>
        <div className='flex flex-1 flex-col m-5'>
            {/*HERO*/}
            <div className=''>
                <p className='border-gray-100'>HELLO</p>

            </div>
        </div>

            {/*PRODUCT*/}
        <div className='bg-red-300 pb-10 '>
            <h1 className='text-center text-4xl m-10 p-10 bg-red-100 rounded-lg'>Our Favorite Product</h1>
            <div className='flex flex-row justify-around mr-10 ml-10'>

              {/*Component Product in Card Style*/}
              <div className='flex flex-col justify-center align-middle'>
                <img src={Pict} alt="Your Image" width={400} className='rounded-lg'/>
                  <Link to={`/product/`} className='bg-red-400 mt-2 mb-2 rounded-lg p-3'>
                    <p className='text-white text-xl font-bold text-center'>Add to Cart</p>
                  </Link>
              </div>
              <div className='flex flex-col justify-center align-middle'>
                <img src={Pict} alt="Your Image" width={400} className='rounded-lg'/>
                <Link to={`/product/`} className='bg-red-400 mt-2 mb-2 rounded-lg p-3'>
                  <p className='text-white text-xl font-bold text-center'>Add to Cart</p>
                </Link>
              </div>
              <div className='flex flex-col justify-center align-middle'>
                <img src={Pict} alt="Your Image" width={400} className='rounded-lg'/>
                <Link to={`/product/`} className='bg-red-400 mt-2 mb-2 rounded-lg p-3'>
                  <p className='text-white text-xl font-bold text-center'>Add to Cart</p>
                </Link>
              </div>
            </div>
        </div>







      </>

  );
}

export default Home;
