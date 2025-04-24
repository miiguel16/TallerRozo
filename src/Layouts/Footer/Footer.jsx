import React from "react";

export default function Footer() {
    return (
        <footer className="bg-sky-400 w-full h-60 flex justify-around items-center">
            <div className="h-15 w-auto text-white font-bold flex items-center"> 
                <p className="text-black text-2xl">
                    Desarrollado por: <a href="https://github.com/miiguel16/TallerRozo" className="text-black hover:text-white">Miguel Angel Chilito</a>
                </p>
            </div>
        </footer>
    );
}
