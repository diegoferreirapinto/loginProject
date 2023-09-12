import { useState } from 'react'
import './ComponentesEstilizados';
import { ComponentHeader as Header } from './components/ComponentHeader';
import { ComponentContent as Content } from './components/ComponentContent';
import { ComponentFooter as Footer } from './components/ComponentFooter';
import { styled } from 'styled-components';
import { AppStyled } from './ComponentesEstilizados';


function App() {

  const handleChangeName = () => {
    const arrayName = ['Diego', 'Zé', 'Mayra']
    const idx = Math.floor(Math.random() * arrayName.length)

    console.log(`Choosed name ${arrayName[idx]}`);
    console.log(`idx ${idx}`);

    return arrayName[idx]
  }
  


  return (
    <AppStyled>
      <Header />
      <Content
        texto={`Olá ${handleChangeName()}`} />
      <Footer />
    </AppStyled>
  )
}

export default App
