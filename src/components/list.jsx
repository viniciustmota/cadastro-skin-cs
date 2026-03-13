/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/error-boundaries */
export default function Listagem({ dados, remover }) {

    let informacao = null;

    try {
        if (dados && dados.length > 0) {
            informacao = (
                <table border="1">
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Arma</th>
                            <th>Skin</th>
                            <th>Quantidade</th>
                            <th>Raridade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dados.map((equipamento) => (
                            <tr key={equipamento.codigo}>
                                <td>{equipamento.codigo}</td>
                                <td>{equipamento.arma}</td>
                                <td>{equipamento.skin}</td>
                                <td>{equipamento.quantidade}</td>
                                <td>{equipamento.raridade}</td>
                                <td><button onClick={() => remover(equipamento.codigo)}>Excluir</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            );
        } else {
            informacao = <p>Nenhuma arma cadastrada.</p>;
        }
    } catch (error) {
        informacao = <p>Erro ao carregar dados.</p>;
    }

    return (
        <>
            <hr />
            <h2>Listagem de armas Cadastradas</h2>
            {informacao}
        </>
    );
}