import { useState } from "react";

export default function Display(props){
    const [cotacao, setCotacao] = useState({
        nome: props.nome,
        venda: props.venda
    });

    return (
        <div>
            <b>{cotacao.nome}</b>
            <span>{cotacao.venda}</span>
        </div>
    );
}