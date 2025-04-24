import React from "react";

export default function Header() {
    return (
        <header className="bg-slate-800 w-full h-60 flex justify-around items-center px-6">
            
            <div className="flex items-center space-x-4">
                <div className="w-30 h-30 rounded-full flex items-center justify-center text-white font-bold">
                    <img
                        src="../src/assets/logo.png"
                        alt="Logo"
                        className="w-25 h-25 object-contain rounded-full"
                    />
                </div>

                <h1 className="text-sky-100 font-extrabold text-xl sm:text-2xl">
                    Fake Store Api
                </h1>
            </div>

            <div className="text-white font-extrabold text-xl sm:text-2xl ">
                <p>Taller Evaluativo</p>
            </div>
        </header>
    );
}

