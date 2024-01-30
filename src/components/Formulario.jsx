import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Nombre:</Form.Label>
        <Form.Control type="text" placeholder="Su nombre" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Apellido:</Form.Label>
        <Form.Control type="text" placeholder="Su apellido" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>DNI:</Form.Label>
        <Form.Control type="text" placeholder="Su DNI" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Dirección de Email:</Form.Label>
        <Form.Control type="email" placeholder="ejemplo@ejemplo.ejm" />
      </Form.Group>

      <Button className="btn-grad" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Formulario;
