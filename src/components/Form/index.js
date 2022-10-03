import { Container } from "./styleform";
import { useState } from "react";

const Form = ({ setFinancas }) => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState(0);
  const [tipo, setTipo] = useState("Entradas");

  function enviarDados() {
    if(valor > 0){
      const numeroNovo = Number(valor);
      if (tipo === "Despesas") {
        const novoValor = numeroNovo * -1;
  
        setFinancas((financas) => [
          ...financas,
          { id: Math.random(), descricao, valor: novoValor, tipo },
        ]);
  
        setDescricao("");
        setValor("");
        return;
      }
  
      setFinancas((financas) => [
        ...financas,
        { id: Math.random(), descricao, valor: numeroNovo, tipo },
      ]);
  
      setDescricao("");
      setValor(0);
    }
  }

  return (
    <Container>
      <div className="divForm">
        <div className="input__Descrição">
          <label>Descrição</label>
          <input
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
            type="text"
            placeholder="Digite aqui sua descrição"
          ></input>
          <span>Ex: Compra de roupas</span>
        </div>
        <div className="transações">
          <div>
            <label>Valor</label>
            <div>
              <input
                value={valor}
                onChange={(event) => setValor(event.target.value)}
                className="valor__Input"
                type="number"
                placeholder="1"
              ></input>
              <abbr>R$</abbr>
            </div>
          </div>
          <div className="valor__Select">
            <label>Tipo de valor</label>
            <select
              value={tipo}
              onChange={(event) => setTipo(event.target.value)}
            >
              <option value="Entradas">Entrada</option>
              <option value="Despesas">Despesa</option>
            </select>
          </div>
        </div>
        <button onClick={enviarDados} type="button">
          Inserir valor
        </button>
      </div>
    </Container>
  );
};

export default Form;
