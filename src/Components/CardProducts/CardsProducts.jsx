import React from "react";


export default function CardsProducts({ producto }) {
    return (
        <div className="bg-gray-200 border p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <img src={producto.image} alt={producto.title} className="h-70 object-contain mb-2" />
            <h2 className="font-bold text-lg">{producto.title}</h2>
            <p className="text-green-700 font-semibold">${producto.price}</p>
        </div>


    );
}
