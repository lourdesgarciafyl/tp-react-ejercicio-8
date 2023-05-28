import { Form, Col, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
const Formulario = () => {
    const enviarFormulario = () => {

    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <Form id="formDatos" onSubmit={handleSubmit}>
        <Row>
          <Col md={6} className="mt-2">
            <Form.Group controlId="validaronNombre">
            <Form.Label>Nombre *</Form.Label>
            <Form.Control type="text" placeholder="María Lourdes" required minLength={3} maxLength={50}/>
            </Form.Group>
          </Col>
          <Col md={6} className="mt-2">
            <Form.Group controlId="validarApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="García" required minLength={3} maxLength={50} />
            </Form.Group>
          </Col>
          <Col md={6} className="mt-2">
            <Form.Group controlId="validarDni">
            <Form.Label>DNI</Form.Label>
            <Form.Control type="number" placeholder="41061228" required minLength={3} maxLength={9}/>
            </Form.Group>
          </Col>
          <Col md={6} className="mt-2">
            <Form.Group controlId="validarEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="lourdesgarciafyl@gmail.com" required minLength={3} maxLength={50} />
            </Form.Group>
          </Col>
        </Row>
        <Button className="mt-3" variant="primary" type="submit" onClick={enviarFormulario}>
        Enviar
      </Button>
      </Form>
    )
}

export default Formulario;