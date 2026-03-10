import Titulo from "./components/title";
import Formulario from "./components/form";
import Listagem from "./components/list";
import { useState } from "react";

export default function App() {
  const [arma, setArma] = useState([
    {
      codigo: "123",
      arma: "AWP",
      skin: "AWP - Azul",
      quantidade: 1,
      raridade: "Dourada",
    },
    {
      codigo: "123",
      arma: "AWP",
      skin: "AWP - Azul",
      quantidade: 1,
      raridade: "Dourada",
    },
    {
      codigo: "123",
      arma: "AWP",
      skin: "AWP - Azul",
      quantidade: 1,
      raridade: "Dourada",
    },
  ]);

  function incluirArma(novaArma) {
    setArma([...arma, novaArma]);
  }

  function excluirArma(codigo) {
    setArma(arma.filter((arma) => arma.codigo != codigo));
  }
  return (
    <>
      <Titulo text="Destrancar Recipiente" />
      <Formulario adicionar={incluirArma} />
      <Listagem dados={arma} remover={excluirArma} />
    </>
  );
}
