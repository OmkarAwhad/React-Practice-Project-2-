import React from "react";

function Navbar({information}){

    // const [val ,setVal] = useState(0);
    // setVal(prev => (
    //     prev+1
    // ))

    return(
        <div className="w-[65%] m-auto flex justify-between items-center px-3 pt-20 pb-12">
            <a href="#" className="text-orange-600 font-bold text-3xl ">Orange</a>
            <button className="bg-orange-600 pl-3 pr-2 py-1 rounded-lg text-white">Favourites<span className="bg-orange-700 px-2 py-[3px] mx-1 rounded-md text-sm">{information.filter(item=>item.added).length}</span></button>
        </div>
    )
}

export default Navbar;