import svg from "../../assets/illustration.svg";
import logo from "../../assets/NuKenzie.png";
import GlobalStyle from "../../theme/globalStyle";

const PagPrincipal = ({ setLogar }) => {
  return (
    <>
      <GlobalStyle />
      <section className="container">
        <div className="info">
          <img className="logo" src={logo} alt="logo Nu Kenzie"></img>
          <p>Centralize o controle das suas finanças</p>
          <span>de forma rápida e segura</span>
          <button
            id="btn__Iniciar"
            type="button"
            onClick={() => setLogar(true)}
          >
            Iniciar
          </button>
        </div>
        <div className="info__svg">
          <img src={svg} alt="ilustração Nu Kenzie"></img>
        </div>
      </section>
    </>
  );
};

export default PagPrincipal;
