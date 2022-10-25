import React from 'react';
import ReactDOM from 'react-dom/client';
import Lista from './Lista';

const root = ReactDOM.createRoot(document.getElementById('root'));

const name = "Aldo";

const Jsx = () => {
  return(
    <>
      <h1>Bienvenido {name} a tu lista de compras</h1>
      <Lista/>
    </>
  )
};

root.render(<Jsx/>);


