import { FaTrash } from "react-icons/fa";

export default function Listagem({ dados, remover }) {

    let informacao = null;

    try {
        if (dados && dados.length > 0) {
            informacao = (
                <table border="1">
                    <thead>
                        <tr>
                            <th>RA</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dados
                            .sort((a, b) => a.nome.localeCompare(b.nome))
                            .map((aluno) => (
                                <tr key={aluno.ra}>
                                    <td>{aluno.ra}</td>
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.curso}</td>
                                    <td>
                                        <button onClick={() => remover(aluno.ra)}><FaTrash /></button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            );
        } else {
            informacao = <p>Nenhum aluno cadastrado.</p>;
        }
    } catch (error) {
        informacao = <p>Erro ao carregar dados.</p>;
    }

    return (
        <>
            <hr />
            <h2>Listagem de Alunos Cadastrados</h2>
            {informacao}
        </>
    );
}