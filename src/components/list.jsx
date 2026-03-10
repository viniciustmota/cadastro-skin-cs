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
                        {dados.map((arma) => (
                            <tr key={arma.codigo}>
                                <td>{arma.arma}</td>
                                <td>{arma.skin}</td>
                                <td>{arma.quantidade}</td>
                                <td>{arma.raridade}</td>
                                <td><button onClick={() => remover(arma.codigo)}>Excluir</button></td>
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