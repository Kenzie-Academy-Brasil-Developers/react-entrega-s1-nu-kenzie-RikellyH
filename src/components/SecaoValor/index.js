import { Div } from "./style";

const SecaoValor = ({ financas }) => {
  const valorTotal = financas.reduce(
    (acc, currentValue) => acc + currentValue.valor,
    0
  );

  return (
    <>
      {financas.length === 0 ? (
        <></>
      ) : (
        <Div>
          <div>
            <h2>Valor total:</h2>
            <p>O valor se refere ao saldo</p>
          </div>
          <span>R${valorTotal.toFixed(2)}</span>
        </Div>
      )}
    </>
  );
};

export default SecaoValor;
