import { useState } from "react";
import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import { MainContainer } from "./style";
import { GlobalStyleHome } from "../theme/bodyHome";
import DivContainer from "../components/DivContainer";
import SecaoValor from "../components/SecaoValor";

const Home = ({ setLogar }) => {
  const [financas, setFinancas] = useState([]);
  const [filter, setFilter] = useState("");

  const novoArray = financas.filter((financa) =>
    filter === "" ? true : financa.tipo === filter
  );

  const tipos = ["Entradas", "Despesas"];

  return (
    <div>
      <GlobalStyleHome />
      <Header setLogar={setLogar} />
      <MainContainer>
        <section>
          <div className="div__aux">
            <Form setFinancas={setFinancas} />
            <SecaoValor financas={financas} />
          </div>
          <DivContainer
            setFinancas={setFinancas}
            financas={novoArray}
            tipos={tipos}
            setFilter={setFilter}
          />
        </section>
      </MainContainer>
    </div>
  );
};

export default Home;
