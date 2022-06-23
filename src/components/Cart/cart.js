import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartItensContext } from "../../context/CartItem";


const ItemCart = (props) => {
    const [quantidade, setQuantidade] = useState(props.item.quantidade);
    const { addItem, removeItem, decreaseItemQuantity } = useContext(CartItensContext);
    const total = props.item.valorUnitarioProduto * quantidade;


    function handlerQuantityChange(produto, quantidade) {
        if (quantidade > 0) {
            setQuantidade(quantidade)
            if (produto.quantidade < quantidade) {
                addItem({ ...produto, quantidade: quantidade - 1 })
            }
            else {
                decreaseItemQuantity({ ...produto })
            }
        }
    }

    return (

        <tr>
            <td class="p-4">
                <div class="media align-items-center">
                    <img src={props.item.nomeImagemProduto} class="d-block ui-w-40 ui-bordered mr-4" alt="" />
                    <div class="media-body">
                        <p>{props.item.nomeProduto}</p>
                    </div>
                </div>
            </td>
            <td class="text-right font-weight-semibold align-middle p-4">{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(props.item.valorUnitarioProduto)}</td>
            <td class="align-middle p-4"><input type="number" class="form-control text-center" value={quantidade} onChange={(e) => handlerQuantityChange(props.item, e.target.value)} /></td>
            <td class="text-right font-weight-semibold align-middle p-4">{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(total)}</td>
            <td class="text-center align-middle px-0"><a onClick={() => removeItem(props.item)} class="shop-tooltip close float-none text-danger" title="" data-original-title="Remove">×</a></td>
        </tr>
    );
}

export const Cart = () => {
    const navigate = useNavigate();
    const { cartItens } = useContext(CartItensContext);

    function handleClick() {
        navigate("/home")
    }
    function SomaTotal() {
        return cartItens.reduce(function (acc, obj) {
            return acc + obj.valorUnitarioProduto * obj.quantidade;
        }, 0);
    }

    function Finalizar() {
        alert("Compra finalizada com sucesso !!!! ")

    }

    return (<>

        <div class="container px-3 my-5 clearfix">

            <div class="card">
                <div class="card-header">
                    <h2>Lista de Itens</h2>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered m-0">
                            <thead>
                                <tr>
                                    <th class="text-center py-3 px-4" style={{ minWidth: '400px' }}>Nome do Produto &amp; Detalhes</th>
                                    <th class="text-right py-3 px-4" style={{ width: '100px' }}>Preço</th>
                                    <th class="text-center py-3 px-4" style={{ width: '120px' }}>Quantidade</th>
                                    <th class="text-right py-3 px-4" style={{ width: '100px' }}>Total</th>
                                    <th class="text-center align-middle py-3 px-0" style={{ width: '40px' }}><a href="/" class="shop-tooltip float-none text-light" title="" data-original-title="Clear cart"><i class="ino ion-md-trash"></i></a></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItens.length > 0 ? (<>
                                    {cartItens.map(item => {
                                        return (<ItemCart item={item} />);
                                    })}</>) :
                                    (<tr> <td><div>Carrinho vazio</div></td></tr>)}
                            </tbody>
                        </table>
                    </div>


                    <div class="d-flex flex-wrap justify-content-between align-items-center pb-4">
                        <div class="mt-4">

                        </div>
                        <div class="d-flex">
                            <div class="text-right mt-4 mr-5">

                            </div>
                            <div class="text-right mt-4">
                                <label class="text-muted font-weight-normal m-0">Valor total</label>
                                <div class="text-large"><strong>{new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                }).format(SomaTotal())}
                                </strong></div>
                            </div>
                        </div>
                    </div>

                    <div class="float-right bt2">
                        <button type="button" class="btn btn-outline-danger" onClick={handleClick}>Voltar para a loja</button>
                        <a href="/home">  <button type="button" class="btn btn-outline-success" onClick={Finalizar}>Finalizar pedido</button></a>
                    </div>



                </div>
            </div>
        </div>

    </>);
}