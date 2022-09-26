import { useState } from "react";
import Home from "./pages/Home";
import "./styles/App.css";
import PagPrincipal from "./components/PagPrincipal";

function App() {
  const [logar, setLogar] = useState(false);

  return (
    <>
      {logar ? (
        <Home setLogar={setLogar} />
      ) : (
        <PagPrincipal setLogar={setLogar} />
      )}
    </>
  );
}

export default App;
