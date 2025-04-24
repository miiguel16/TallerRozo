
import React from 'react';
import Footer from '../src/Layouts/Footer/Footer';
import Header from '../src/Layouts/Header/Header';
import MainContainer from '../src/Components/MainContainer/MainContainer'; 


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
    {/* Header */}
    <Header />
  
    {/* Contenido principal que crece para ocupar el espacio disponible */}
    <main className="flex-grow">
      <MainContainer />
    </main>
  
    {/* Footer */}
    <Footer />
  </div>
  

  );
}
