import React from "react";
import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { CartItensContext } from "../../context/CartItem";
import { Avatar, Badge } from 'antd';


export const ProductCard = ({ produto }) => {

  const { cartItens, addItem } = useContext(CartItensContext)













  return (
    <>
      <Card className="card1" style={{ width: '18rem', height: '40%', marginBottom: '15px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', transform: Card, transition: 'transform 0.25s linear' }}>
        <Card.Img style={{ width: '100%', height: '47%' }} variant="top" src={produto.nomeImagemProduto} />
        <Card.Body>
          <Card.Title>{produto.nomeProduto}</Card.Title>
          <Card.Text>
            {produto.descricao}
          </Card.Text>
        </Card.Body>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="primary" style={{}} onClick={() => addItem({ ...produto, quantidade: 1 })}>Adicionar ao carrinho</Button>
          <Avatar shape="square" size="large" style={{ width: '30%', color: 'black', backgroundColor: 'white', marginRight: '10px' }} ><i class="bi bi-cart" >{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(produto.valorUnitarioProduto)} </i>
          </Avatar>
        </div>
      </Card>



    </>);
}