import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/headerHome/headerPage";
import { Container, Button, BoxText, Line } from "./erroStyle";

export const NotFound = () => {

    let navigate = useNavigate();

    function handleClick() {
        navigate("/home")
    }

    return (
        <>

            <Container>
                <BoxText>
                    <h1> A página que você está procurando não foi encontrada.</h1>
                    <br />
                    <h2>Verifique se a url está correta.</h2>
                    <Button onClick={handleClick}>Voltar para a Home</Button>
                </BoxText>
            </Container>
            <Line />

        </>
    )
}