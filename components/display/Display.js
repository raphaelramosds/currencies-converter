import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from "./data/currencies-icons.js";
import Style from './Display.module.css';

export default function Display(props) {
    const [currency, setCurrency] = useState({
        name: props.name,
        sell: props.sell,
        code: props.code,
        iconIndex: props.iconIndex

    });

    return (
        <div className={Style.display}>
            <FontAwesomeIcon icon={icons[currency.iconIndex]} className={Style.currencyIcon}/>
            <div className={Style.currencyName}>
                {currency.name}
            </div>
            <div className={Style.sellPrice}>
                <span>{currency.sell} {currency.code}</span>
            </div>
        </div>
    );
}