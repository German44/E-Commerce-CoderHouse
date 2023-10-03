import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonExample from '../cartWidget/cartWidget';

function ColorSchemesExample() {
    return (
        <>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" >
                <Container >
                    <Navbar.Brand href="#home" className="mx-4 text-warning-emphasis">E-Commerce</Navbar.Brand>
                    <Nav className="justify-content-space-between">
                        <Nav.Link href="#home" className="mx-4 ">Inicio</Nav.Link>
                        <Nav.Link href="#features" className="mx-4">Productos</Nav.Link>
                        <Nav.Link href="#pricing" className="mx-4">Nosotros</Nav.Link>
                        <ButtonExample />
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample

