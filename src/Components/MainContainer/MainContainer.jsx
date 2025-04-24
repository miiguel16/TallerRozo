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
}

