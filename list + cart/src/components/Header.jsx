import { Container, Navbar, Button, Dropdown, Badge } from "react-bootstrap";
import {Link} from "react-router-dom"
import { CartState } from "../context/Context";
import {AiFillDelete} from "react-icons/ai";
import "../style/style.css"

export default function Header () {
    const {state: { cart }, dispatch} = CartState();

    return (
        <Navbar bg="dark" variant = "dark" style = {{height : 80}}>
            <Container>
                <Navbar.Brand>
                    <Link to = "/">Let's Sea</Link>
                </Navbar.Brand>
                <Link to = "/">Home</Link>
                <Link to = "/edukasi">Edukasi</Link>
                <Link to = "/transaksi">Transaksi</Link>
                <Link to = "/about">About</Link>
                <Dropdown alignRight>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Cart
                    <Badge>{cart.length}</Badge>
                </Dropdown.Toggle >

                <Dropdown.Menu style={{ minWidth: 325 }}>
                    {cart.length>0? (
                         <>
                            {cart.map((prod) => (
                            <span className="cartitem" key={prod.id}>
                                <img
                                src={prod.image}
                                className="cartItemImg"
                                alt={prod.name}
                                />
                                <div className="cartItemDetail">
                                <span>{prod.name}</span>
                                <span>Rp {prod.price}</span>
                                </div>
                                <AiFillDelete
                                fontSize="20px"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: prod,
                                    })
                                }
                                />
                            </span>
                            ))}
                            <Link to="/cart">
                            <Button style={{ width: "95%", margin: "0 10px" }}>
                                Go To Cart
                            </Button>
                            </Link>
                        </>
                    ): 
                    (<span style= {{padding: 10}}> Cart is Empty</span>)}
                    
                </Dropdown.Menu>
                </Dropdown>
                <Button className="btn-primary">Sign Up</Button>
            </Container>
        </Navbar>
    )
}