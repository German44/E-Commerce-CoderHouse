import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function ButtonExample() {
    return (
        <Button variant="dark">
            Carrito <Badge bg="warning">9</Badge>
            <span className="visually-hidden">unread messages</span>
        </Button>
    );
}

export default ButtonExample