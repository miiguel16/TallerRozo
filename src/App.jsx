
import React from 'react';
import Footer from '../src/Layouts/Footer/Footer';
import Header from '../src/Layouts/Header/Header';
import MainContainer from '../src/Components/MainContainer/MainContainer'; 


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
    <Header />
      <MainContainer /> 
    <Footer />
  </div>
  

  );
}
