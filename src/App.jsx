import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import "./app.css";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
    <Titulo></Titulo>
      <Container className="container">
        <div className="boxFormulario">

          <Formulario></Formulario>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
