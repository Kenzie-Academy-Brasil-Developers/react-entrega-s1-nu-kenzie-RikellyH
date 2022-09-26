import { BsTrash } from "react-icons/bs";
import { Container } from "./style";
import FiltrarTipo from "./FiltrarTipo";

const DivContainer = ({ financas, setFinancas, tipos, setFilter }) => {
  function deletarFinanca(itemSelecionado) {
    const listaDeFinancas = financas.filter(
      (financa) => financa.id !== itemSelecionado
    );
    setFinancas(listaDeFinancas);
  }

  return (
    <Container>
      <div className="div__header">
        <span>Resumo financeiro</span>
        <FiltrarTipo tipos={tipos} setFilter={setFilter} />
      </div>
      <div className="div__body">
        {financas.length === 0 && (
          <h2>Você ainda não possui nenhum lançamento 🤷‍♀️</h2>
        )}
        {financas.map((financa, index) => (
          <div className="financa" key={index}>
            <div className="financa__info">
              <h3 className={financa.deletar ? "financa-deletar" : ""}>
                {financa.descricao}
              </h3>
              <p>{financa.tipo}</p>
            </div>
            <p>R${financa.valor}</p>
            <div className="deletar__icone">
              <BsTrash onClick={() => deletarFinanca(financa.id)} />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default DivContainer;
