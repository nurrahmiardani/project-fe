import { ListGroup } from "react-bootstrap";
import { CartState } from "../context/Context"

export default function Cart () {
    const {state : {cart}, dispatch} = CartState();
    return (
        <div className="home">
            <div className="productContainer">
                <ListGroup>
                    {cart.map(prod => (
                        <span>{prod.name}</span>
                    ))}
                </ListGroup>
            </div>
            <div className='filters summary'>
                <form>
                    
                </form>
                <span className='title'>Subtotal ({cart.length})items</span>
            </div>
        </div>
    )
}
