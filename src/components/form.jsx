import { useState } from "react"
import "./Form.css";

export default function Formulario({adicionar}) {
    const [codigo, setCodigo] = useState("");
    const [arma, setArma] = useState("");
    const [skin, setSkin] = useState("");
    const [quantidade, setQuantidade] = useState(0);
    const [raridade, setRaridade] = useState("Branco");

    function buttonClick () {
        if (codigo == "" || arma == '' || skin == "" || quantidade == '' || raridade == '') {
            alert("Preencha todos os campos!");
            return;
        }
        let novaArma = {
            'codigo': codigo,
            'arma': arma,
            'skin': skin,
            'quantidade': quantidade,
            'raridade': raridade,
            
        }
        adicionar(novaArma);
        setCodigo('')
        setArma('')
        setSkin('')
        setQuantidade('')
        setRaridade('')
        
    }
    return (
        
        <form id="form">
            <div>
                <label for="codigo">Codigo: </label>
                <input value={codigo} onChange={(e) => setCodigo(e.target.value)} 
                type="text" id="ra" size="12" maxlength="12" />
            </div>
            <div>
                <label for="arma">Arma: </label>
                <input value={arma} onChange={(e) => setArma(e.target.value)} 
                type="text" id="arma" size="12" maxlength="12" />
            </div>
            <div>
                <label for="skin">Skin: </label>
                <input value={skin} onChange={(e) => setSkin(e.target.value)} 
                type="text" id="skin" size="30" maxlength="30" />
            </div>
            <div>
                <label for="quantidade">Quantidade: </label>
                <input value={quantidade} onChange={(e) => setQuantidade(e.target.value)} 
                type="number" id="quantidade" size="30" maxlength="30" />
            </div>
            <div>
                <label for="raridade">Raridade: </label>
                <select value={raridade} onChange={(e) => setRaridade(e.target.value)} 
                id="raridade">
                    <option>Branco</option>
                    <option>Azul claro</option>
                    <option>Azul</option>
                    <option>Roxo</option>
                    <option>Rosa</option>
                    <option>Vermelho</option>
                    <option>Laranja</option>
                    <option>Dourado</option>
                </select>
            </div>
            <div id="div-button">
                <button onClick={buttonClick} type="button" id="cadastrar">Cadastrar</button>
            </div>
        </form>
    );
}