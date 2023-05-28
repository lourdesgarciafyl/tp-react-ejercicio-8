import { Form, Col, Row, Button, FormText } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Formulario = () => {
    const { register, formState: {errors}, reset , handleSubmit} = useForm()
  
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
            {...register(`nombre`,{
              required: "Campo obligatorio",
              minLength:{
                value: 3,
                message: "Cantidad minima de caracteres: 3"
              },
              maxLength:{
                value: 50,
                message: "Cantidad maxima de caracteres: 50"
              }
              })}/>
              <Form.Text className="text-danger">{errors.nombre?.message}</Form.Text>
            </Form.Group>
          </Col>
          <Col md={6} className="mt-2">
            <Form.Group controlId="validarApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="García" 
            required 
            {...register(`apellido`,{
              required: true,
              minLength:{
                value: 3,
              },
              maxLength:{
                value: 50,
              }})} />
            </Form.Group>
          </Col>
          <Col md={6} className="mt-2">
            <Form.Group controlId="validarDni">
            <Form.Label>DNI</Form.Label>
            <Form.Control 
            type="number" 
            placeholder="41061228" 
            minLength={6}
            maxLength={9}
            required 
            {...register(`dni`, {
              required: true,
              minLength:{
                value: 6
              },
              maxLength:{
                value:9
              }})}/>
            </Form.Group>
          </Col>
          <Col md={6} className="mt-2">
            <Form.Group controlId="validarEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="lourdesgarciafyl@gmail.com" 
            required 
            {...register(`email`, {
              required: true,
              minLength:{
                value: 3,
              },
              maxLength:{
                value: 50,
              }
              })}/>
            </Form.Group>
          </Col>
        </Row>
        <Button className="mt-3" variant="primary" type="submit">
        Enviar
      </Button>
      </Form>
    )
}

export default Formulario;