import React from "react";

function Card({values, handleClick, cardIndex}){

    const {image, name, artist,added} = values;
    
    return(
        <div className=" h-32 w-60 rounded-md relative">
            <div className="pt-2 bg-white w-full flex h-28 p-3 gap-2 rounded-md">
                <div className="w-[50%] ">
                    <img className="w-[90%] h-[90%] rounded-md bg-orange-500 object-cover" src={image}></img>
                </div>
                <div>
                    <h1 className="font-semibold text-base tracking-tight ">{name}</h1>
                    <p className="text-sm">{artist}</p>
                </div>
            </div>

            <button onClick={()=>handleClick(cardIndex)} className={`px-3 py-1 font-semibold ${added===false ? "bg-orange-600" : "bg-teal-600"} rounded-full text-sm text-white absolute left-1/2 -translate-x-[50%] -translate-y-[50%]  whitespace-nowrap `}> {added===false ? "Add to Favourites" : "Added"}</button>
        </div>
    )
}

export default Card;