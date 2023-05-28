import { Form, Col, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
const Formulario = () => {
    const { register, handleSubmit} = useForm()
  
    const enviarFormulario = () => {

    }
    const apretarEnviar = (data) => {
      console.log(data)
      reset()
    }

    return(
        <Form id="formDatos" onSubmit={handleSubmit(apretarEnviar)}>
        <Row>
          <Col md={6} className="mt-2">
            <Form.Group controlId="validaronNombre">
            <Form.Label>Nombre *</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="María Lourdes" 
            required 
            minLength={3} 
            maxLength={50}
            {...register(`nombre`)}/>
            </Form.Group>
          </Col>
          <Col md={6} className="mt-2">
            <Form.Group controlId="validarApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="García" 
            required 
            minLength={3} 
            maxLength={50}
            {...register(`apellido`)} />
            </Form.Group>
          </Col>
          <Col md={6} className="mt-2">
            <Form.Group controlId="validarDni">
            <Form.Label>DNI</Form.Label>
            <Form.Control 
            type="number" 
            placeholder="41061228" 
            required 
            minLength={3} 
            maxLength={9}
            {...register(`dni`)}/>
            </Form.Group>
          </Col>
          <Col md={6} className="mt-2">
            <Form.Group controlId="validarEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="lourdesgarciafyl@gmail.com" 
            required 
            minLength={3} 
            maxLength={50} 
            {...register(`email`)}/>
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