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
              required: "Campo obligatorio",
              minLength:{
                value: 3,
                message: "Cantidad minima de caracteres: 3"
              },
              maxLength:{
                value: 50,
                message: "Cantidad maxima de caracteres: 50"
              }})} />
              <Form.Text className="text-danger">{errors.apellido?.message}</Form.Text>
            </Form.Group>
          </Col>
          <Col md={6} className="mt-2">
            <Form.Group controlId="validarDni">
            <Form.Label>DNI</Form.Label>
            <Form.Control 
            type="number" 
            placeholder="41061228" 
            required 
            {...register(`dni`, {
              required: "Campo obligatorio",
              pattern:{
                value: /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/,
                message: "Debe ingresar un DNI de entre 7 a 9 caracteres"
              }
              })}/>
              <Form.Text className="text-danger">{errors.dni?.message}</Form.Text>
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
              pattern:{
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Ingrese una dirección de mail correcta"
              }
              })}/>
              <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
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