import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function MusicCard({ music, index, handleClick }) {
    const { image, name, artist, added } = music;
    return (
        <div className="relative max-w-60 w-full rounded-md bg-zinc-700 p-4 flex gap-4 mt-4">
            <div className="w-20 h-20 bg-orange-100 rounded-md overflow-hidden">
                <img
                    src={image}
                    alt=""
                    className="object-cover h-full w-full"
                />
            </div>
            <div>
                <h1 className="text-xl leading-none font-medium">{name}</h1>
                <h2 className="text-sm">{artist}</h2>
            </div>
            <span
                onClick={() => handleClick(index)}
                className="absolute bottom-4 right-4"
                title="Add to Favourites"
            >
                {added ? <FaHeart /> : <FaRegHeart />}
            </span>
        </div>
    );
}

export default MusicCard;
