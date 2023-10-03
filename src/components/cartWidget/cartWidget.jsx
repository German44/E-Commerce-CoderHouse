import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import {BsFillCartFill} from "react-icons/bs";

function ButtonExample() {
    return (
        <Button variant="dark">
            <BsFillCartFill/><Badge bg="warning">9</Badge>
            <span className="visually-hidden">unread messages</span>
        </Button>
    );
}

export default ButtonExample