import React from "react";

function Home() {
  return (
    <div className="p-5">
      <div className=" absolute top-1/3  left-20">
        <h1 className=" font-bold text-6xl ">Snacklicious</h1>
        <p className=" text-2xl">
          Menjual beragam macam{" "}
          <span className=" text-amber-700 font-bold">snack </span>Indonesia
        </p>
        <button className=" bg-amber-500 p-3 rounded-lg border-x-2 border-y-2  border-black mt-3 hover:bg-amber-400">
          Check product !
        </button>

        
      </div>
    </div>
  );
}

export default Home;
