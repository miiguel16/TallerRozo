import React from "react";

export default function SearchComponents({ busqueda, setBusqueda }) {
    return (
        <input
            type="text"
            placeholder="Busca el producto que deseas."
            className="w-120 ml-4 mb-4 p-4 border rounded"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
        />
    );
}
