import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MusicCard from "./components/MusicCard";

function App() {
    const data = [
        {
            image: "https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Happy",
            artist: "Roksolna",
            added: false,
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Cold Mist",
            artist: "Frank",
            added: false,
        },
        {
            image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Morning",
            artist: "Ivana",
            added: false,
        },
        {
            image: "https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Flames",
            artist: "Brooke",
            added: false,
        },
    ];

    const [song, setSong] = useState(data);
    const handleClick = (songIndex) => {
        setSong((prevSong) =>
            prevSong.map((song, index) => {
                if (index === songIndex) {
                    return { ...song, added: !song.added };
                }
                return song;
            })
        );
    };

    return (
        <>
            <div className="w-full min-h-screen bg-zinc-800 text-white">
                <Navbar music={song} />
                <div className="px-8 mt-10 flex flex-wrap gap-6">
                    {song.map((obj, index) => (
                        <MusicCard
                            music={obj}
                            key={index}
                            index={index}
                            handleClick={handleClick}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
