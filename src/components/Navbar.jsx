import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function Navbar({ music }) {
    return (
        <div className="w-full px-8 py-3 flex justify-between items-center flex-wrap">
            <h1 className="text-3xl font-bold">MusicLibrary.</h1>
            <div className="flex items-center justify-center px-4 py-2 rounded-md text-white font-medium gap-3">
                <span>
                    {music.filter((item) => item.added).length ? (
                        <FaHeart />
                    ) : (
                        <FaRegHeart />
                    )}
                </span>
                <h3 className="text-xl">
                    {music.filter((item) => item.added).length}
                </h3>
            </div>
        </div>
    );
}

export default Navbar;
