
import React from 'react';
import Footer from '../src/Layouts/Footer/Footer';
import Header from '../src/Layouts/Header/Header';
import MainContainer from '../src/Components/MainContainer/MainContainer'; 


export default function App() {
  return (
    <div className=" w-full h-full flex flex-col justify-between">
      <Header />
      <MainContainer/>
      <Footer />
    </div>
  );
}
