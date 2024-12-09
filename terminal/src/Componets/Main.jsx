import React from "react";

function Main(){

    const detail = [{ id:1, name : "saravana", des : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam tempora quia eum placeat, laborum nam vel itaque velit ipsam sapiente" },
        { id:2, name : "naveen", des : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam tempora quia eum placeat, laborum nam vel itaque velit ipsam sapiente" },
        { id:3, name : "sds", des : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam tempora quia eum placeat, laborum nam vel itaque velit ipsam sapiente" },
        { id:3, name : "sds", des : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam tempora quia eum placeat, laborum nam vel itaque velit ipsam sapiente" },
        { id:3, name : "sds", des : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam tempora quia eum placeat, laborum nam vel itaque velit ipsam sapiente" },
        { id:3, name : "sds", des : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam tempora quia eum placeat, laborum nam vel itaque velit ipsam sapiente" },
           ]

    return (
        <>
            <div className="flex flex-wrap">
                {detail.map(data =>{
                    return (
                    <div key={data.id} className="bg-green-300 text-white w-auto max-w-[200px] min-h-[300px] h-auto m-4 rounded-xl flex flex-col justify-evenly p-4 ">
                   
                    <h1 className="text-center text-black font-bold text-2xl ">{data.name}</h1>
                   <div className="p-4 text-xl underline text-yellow-300">{data.des}</div>
                                   </div>

                    )
                })}
            
            </div>
        </>
    )
}

export default Main