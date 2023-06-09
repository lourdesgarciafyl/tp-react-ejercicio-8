import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';

function App() {

  return (
    <>
    <Container id='containerPrincipal'>
      <Titulo></Titulo>
      <Formulario></Formulario>
    </Container>
    <footer className='bg-dark text-light text-center py-3'>
      <p>&copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
