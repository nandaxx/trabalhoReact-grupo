import React, { useContext } from "react";
import { Topo } from "../../components/headerHome/header";
import { Cart } from "../../components/Cart/cart";
import { Container } from "./barraCinza";
import { CartItensContext } from "../../context/CartItem";
import { Footer } from "../../components/footer/footerPage";
export const Carrinho = () => {
    const { cartItens } = useContext(CartItensContext)
    return (<>
        <Topo />
        <Container />
        <Cart cartItens={cartItens} />
        <Footer />
    </>);
}