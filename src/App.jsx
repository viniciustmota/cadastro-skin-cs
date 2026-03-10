import Titulo from "./components/title";
import Formulario from "./components/form";
import Listagem from "./components/list";
import { useState } from "react";

export default function App() {
  const [alunos, setAlunos] = useState([
    {
      ra: "123456",
      nome: "Maria Silva",
      curso: "ADS"
    },
    {
      ra: "654321",
      nome: "Pedro Silva",
      curso: "ADS"
    },
    {
      ra: "112233",
      nome: "Ana Silva",
      curso: "AMS - ADS"
    },
  ]);

  function incluirAluno(novoAluno) {
    setAlunos([...alunos, novoAluno]);
  }

  function excluirAluno(ra) {
    setAlunos(alunos.filter(aluno => aluno.ra != ra))
  }
  return (
    <>
      <Titulo text="Cadastro de Livros" />
      <Formulario adicionar={incluirAluno} />
      <Listagem dados={alunos} remover={excluirAluno} />
    </>
  )
}