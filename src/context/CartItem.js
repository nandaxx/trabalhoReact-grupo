import React, { createContext, useState } from 'react';


const CartItensContext = createContext();


const CartItensProvider = (props) => {
    const [cartItens, setCartItens] = useState([]);

    function getProductById(id) {
        return cartItens.find((p) => p.idProduto === id);
    };

    function getTotalItensOnCart() {
        return cartItens.reduce(function (acc, obj) {
            return acc + obj.quantidade;
        }, 0);
    }

    function decreaseItemQuantity(produto) {
        const existingProduct = getProductById(produto.idProduto);
        let newState = [];
        if (existingProduct) {
            newState = cartItens.map((p) => {
                if (p.idProduto === existingProduct.idProduto) {
                    p.quantidade -= 1;
                    return { ...p };
                }
                return { ...p };
            });
            setCartItens(newState);
        }
    }

    function addItem(produto) {
        const existingProduct = getProductById(produto.idProduto);
        let newState = [];
        if (existingProduct) {
            newState = cartItens.map((p) => {
                if (p.idProduto === existingProduct.idProduto) {
                    p.quantidade += 1;
                    return { ...p };
                }
                return { ...p };
            });
            setCartItens(newState);
        } else {
            setCartItens([...cartItens, produto])
        }

    }
    function removeItem(produto) {
        const newCartItens = cartItens.filter((p) => p.idProduto !== produto.idProduto);
        setCartItens(newCartItens);
    }

    return (
        <CartItensContext.Provider
            value={{ cartItens, addItem, removeItem, getTotalItensOnCart, decreaseItemQuantity }}
        >
            {props.children}
        </CartItensContext.Provider>
    );
};

export { CartItensContext, CartItensProvider };