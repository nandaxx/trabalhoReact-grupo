import React from "react";
import { Topo } from "../../components/headerHome/header";
import { Formu } from "../../components/Formulario/form";
import { Body } from "./styleContato";
import { Container } from "../carrinho/barraCinza";
import { Footer } from "../../components/footer/footerPage";
export const Contato =() => {
    return(<>
    <Topo/>
    <Container/>
    <Body><Formu/></Body>
    <Footer/>
    </>);
}