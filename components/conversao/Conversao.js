import { useEffect, useState } from "react";

export default function Conversao(props) {

    const [codigo, setCodigo] = useState('USD');
    const [valorReal, setValorReal] = useState(0);
    const [valorConvertido, setValorConvertido] = useState(0);

    // renderize toda vez que o usuário digita o valor em real
    useEffect(() => {
        handleChangeConvert();
        return () => {
            setValorConvertido(0);
        }
    }, [valorReal])

    function handleChangeConvert() {

        // filtrar props pelo codigo da moeda selecionada
        const moedaFiltrada = props.moedas.filter( (moeda) => {
            return moeda.code === codigo
        });

        // aplicar conversão 
        setValorConvertido( valorReal/parseFloat(moedaFiltrada[0].ask))
    }

    return (
        <div className="conversao">
            <div className="formConversao">
                <form onChange={handleChangeConvert}>
                    <input 
                        type='number' 
                        placeholder="Valor em Real"
                        onChange={({target})=>{
                            setValorReal(parseFloat(target.value))
                        }}
                    />

                    <select onChange={({target}) => {
                        setCodigo(target.value)
                    }}>
                        <option value='USD'>Dólar</option>
                        <option value='EUR'>Euro</option>
                    </select>
                </form>
            </div>
            <div className="displayValorConvertido">
                <span> {!valorConvertido ? 0 : valorConvertido } {codigo}</span>
            </div>
        </div>
    );
}