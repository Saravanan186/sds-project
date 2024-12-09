import React from "react"

import img2 from "../assets/background.jpg.jpeg"


function Contact(){
   
    const detail = [{ id:1, name : "saravanan", des : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam tempora quia eum placeat, laborum nam vel itaque velit ipsam sapiente" },
                    { id:1, name : "saravana", des : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam tempora quia eum placeat, laborum nam vel itaque velit ipsam sapiente" },
                   { id:1, name : "saravana", des : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam tempora quia eum placeat, laborum nam vel itaque velit ipsam sapiente" }    
    ]
       return (
       <>
           <div className="flex flex-wrap" id="contact">
               {detail.map(data =>{
                   return (
                    
                   <div key={data.id} className="bg-green-800 text-white w-auto max-w-[200px] min-h-[300px] h-auto m-4 rounded-xl flex flex-col justify-evenly p-4 "style={{backgroundImage: `url(${img2})`, backgroundRepeat: "no-repeat", objectFit:"cover", backgroundPosition:"top"}} >
                     <h1 className="text-center text-black font-bold text-2xl ">{data.name}</h1>
                                      <div className="p-4 text-xl underline text-yellow-300 overflow-hidden">{data.des}</div>
                                      <button className="bg-yellow-400 " >read more </button>
                                  </div>

                   )
               })}
           
           </div>


       </>
   )

      
       
}
export default Contact
