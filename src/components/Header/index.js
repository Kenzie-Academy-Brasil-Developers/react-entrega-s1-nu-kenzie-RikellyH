import logo from "../../assets/NuKenzie2.png";
import { Container } from "./style";

const Header = ({ setLogar }) => {
  return (
    <Container>
      <div>
        <img className="logo2" src={logo} alt="logo Nu Kenzie"></img>
        <button onClick={() => setLogar(false)}>Início</button>
      </div>
    </Container>
  );
};

export default Header;
