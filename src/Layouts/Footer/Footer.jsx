import React from "react";

export default function Footer() {
    return (
        <footer className="bg-sky-400 w-full h-60 flex justify-around items-center px-6">
            <div className="min-w-[40px] w-auto text-white font-bold"> {/* Ancho mínimo de 40px */}
                <p className="text-black">
                    Desarrollado por: <a href="" className="text-black hover:text-white">Miguel Angel Chilito</a>
                </p>
            </div>
        </footer>




    );
}
