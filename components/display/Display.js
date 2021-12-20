import { useState } from "react";
import Class from './Display.module.css';


export default function Display(props){
    const [cotacao, setCotacao] = useState({
        nome: props.nome,
        venda: props.venda,
        code: props.code

    });

    return (
        <div className={Class.display}>
            <div className='nomeMoeda'>
                <b>{cotacao.nome}</b>
            </div>
            <div className='precoVenda'>
                <span>{cotacao.venda} {cotacao.code}</span>
            </div>
        </div>
    );
}