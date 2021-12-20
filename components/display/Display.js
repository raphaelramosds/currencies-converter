import { useState } from "react";
import Style from './Display.module.css';


export default function Display(props){
    const [cotacao, setCotacao] = useState({
        nome: props.nome,
        venda: props.venda,
        code: props.code

    });

    return (
        <div className={Style.display}>
            <div className={Style.nomeMoeda}>
                <b>{cotacao.nome}</b>
            </div>
            <div className={Style.precoVenda}>
                <span>{cotacao.venda} {cotacao.code}</span>
            </div>
        </div>
    );
}