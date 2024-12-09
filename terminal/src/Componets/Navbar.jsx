import React from "react"

function Navbar (){
   return (
    <>
      <div className="bg-green-300 h-auto min-h-20 flex justify-between items-center">
         <h1 className="text-xl font-bold ml-20">Logo</h1>
         <ul className="hidden md:flex justify-evenly w-[50%] ">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href ="#contact">Contact</a></li>
         </ul>

         <div className="md:hidden text-2xl font-bold mr-20">
   x
         </div>
         {/* 
               sm    640px (default)
               md    768px
               lg    1024px
               xl    1280px

         */}
      </div>
    </>
   )
}

export default Navbar