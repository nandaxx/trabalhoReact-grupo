import React from "react";
import { Header } from "../../components/headerHome/headerPage";
import { Logar } from "../../components/formLog/formLogin";
import { Footer } from "../../components/footer/footerPage";
import { Card2, Cards, WrapperLogin, Container } from "../../pages/registro/style.js"


export const Pag2 = () => {
  return (
    <>
      <Header />
      <Container />
      <Cards>
        <WrapperLogin>
          <Card2>
            <Logar />
          </Card2>
        </WrapperLogin>
      </Cards>
      <Footer/>


    </>

  );
}