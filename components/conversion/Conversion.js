import { useEffect, useState } from "react";
import Style from './Conversion.module.css';

export default function Conversion(props) {

    const [code, setCode] = useState('USD');
    const [valueTyped, setValueTyped] = useState(0);
    const [convertedValue, setConvertedValue] = useState(0);

    // renderize toda vez que o usuário digita o valor em real
    useEffect(() => {
        handleChangeConvert();
    }, [valueTyped, code])

    function handleChangeConvert() {
        
        // filtrar props pelo code da currency selecionada
        const filteredCurrency = props.currencies.filter((currency) => {
            return currency.code === code
        });

        // aplicar conversão 
        setConvertedValue((valueTyped / parseFloat(filteredCurrency[0].ask)).toFixed(2))
    }

    return (
        <div className={Style.conversion}>
            <div className={Style.formConversao}>
                <form onChange={handleChangeConvert}>
                    <input
                        className={Style.input}
                        type="number"
                        placeholder="R$"
                        onChange={({ target }) => {
                            setValueTyped(parseFloat(target.value))
                        }}
                    />

                    <select
                        className={Style.select}
                        onChange={({ target }) => {
                            setCode(target.value)
                        }}>
                        <option value='USD'>Dólar</option>
                        <option value='EUR'>Euro</option>
                    </select>
                </form>
            </div>
            <div className={Style.convertedValue}>
                <span> {!convertedValue ? 0 : convertedValue} {code}</span>
            </div>
        </div>
    );
}