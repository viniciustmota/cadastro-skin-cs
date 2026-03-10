import { useState } from "react";

export default function Formulario({ adicionar }) {
    // Declaramos variáveis de estado para guardar os valores digitados
    // nos campos do formulário
    const [ra, setRa] = useState("")
    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("ADS")

    function buttonClick() {
        if (ra == "" || nome == "" || curso == "") {
            alert("Preencha todos os campos")
            return;
        }
        let novoAluno = {
            "ra": ra,
            "nome": nome,
            "curso": curso
        }
        adicionar(novoAluno)
        setRa("")
        setNome("")
        setCurso("")
    }
    return (
        <form>
            <div>
                <label for="ra">RA: </label>
                <input
                    type="text"
                    id="ra"
                    size="12"
                    maxlength="12"
                    value={ra}
                    onChange={(e) => setRa(e.target.value)}
                />
            </div>
            <div>
                <label for="nome">Nome: </label>
                <input
                    type="text"
                    id="nome"
                    size="30"
                    maxlength="30"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>
            <div>
                <label for="curso">Curso: </label>
                <select id="curso" value={curso} onChange={(e) => setCurso(e.target.value)}>
                    <option >ADS</option>
                    <option>ADS - AMS</option>
                    <option>Gestão</option>
                    <option>Mecatrônica</option>
                </select>
            </div>
            <div id="div-button">
                <button type="button" id="cadastrar" onClick={buttonClick}>Cadastrar</button>
            </div>
        </form>
    );
}