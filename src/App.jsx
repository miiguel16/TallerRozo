
import React from 'react';
import Footer from '../src/Layouts/Footer/Footer';
import Header from '../src/Layouts/Header/Header';


export default function App() {
  return (
    <div className="bg-slate-100 w-full h-screen flex flex-col justify-between">
      <Header />

      <Footer />
    </div>
  );
}
