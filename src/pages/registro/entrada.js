import React, { useState } from "react";
import { Registro } from "../../components/registre/form";
import { Header } from "../../components/headerHome/headerPage";
import { Card2, Cards, Card1, Card3, Wrapper, Inside, Container, Text1, Text2, Button } from "./style.js";
import { useNavigate } from "react-router-dom";
import { api } from "../../Service/api";
import { Footer } from "../../components/footer/footerPage";

export const Pag1 = () => {




  let navigate = useNavigate();

  function handleClick() {
    navigate("/login")
  }
  return (
    <>
      <Header />
      <Container />
      <Cards>
        <Inside>
          <Card1>
            <Text1>
              <p>Conheça o Tech Books, onde não ha limites para imaginação nem conhecimento.<br />
                Aqui você escolhe o seu título preferido ou acha um. <br /> Lugar ideial para você que busca novos conhecimentos ou apenas
                algo descontraído. <br />Entre e explore nossos catálogos e viage nessa conosco.
              </p>
            </Text1>
          </Card1>
        </Inside>
        <Wrapper>
          <Card2>
            <Registro />
          </Card2>
        </Wrapper>
        <Inside>
          <Card3>
            <Text2>
              <p>Faça o login se ja possuir uma conta</p>
              <Button onClick={handleClick}>Logar</Button>
            </Text2>
          </Card3>
        </Inside>
      </Cards>
      <Footer />


    </>
  )
}