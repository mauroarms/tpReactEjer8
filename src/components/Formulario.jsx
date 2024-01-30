import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      dni.trim() === "" ||
      email.trim() === ""
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    } else {
      alert(
        `-Nombre: ${nombre} \n 
        -Apellido: ${apellido} \n 
        -DNI: ${dni} \n 
        -Email: ${email}`
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Su nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Apellido:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Su apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>DNI:</Form.Label>
        <Form.Control
          type="number"
          placeholder="Su DNI"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Dirección de Email:</Form.Label>
        <Form.Control
          type="email"
          placeholder="ejemplo@ejemplo.ejm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Button className="btn-grad" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Formulario;
