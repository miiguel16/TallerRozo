import React, { useEffect, useState } from 'react';
import CardsProducts from '../CardProducts/CardsProducts';
import SearchComponents from '../SearchComponents/SearchComponents';

export default function MainContainer() {
    const [productos, setProductos] = useState([]);
    const [busqueda, setBusqueda] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProductos(data));
    }, []);

    const productosFiltrados = productos.filter(p =>
        p.title.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <main className="p-4">
            <SearchComponents busqueda={busqueda} setBusqueda={setBusqueda} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
                {productosFiltrados.map(producto => (
                    <CardsProducts key={producto.id} producto={producto} />
                ))}
            </div>
        </main>
    );
}

