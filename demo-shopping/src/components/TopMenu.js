import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

import {CartContext} from "../contexts/Cart";

const TopMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to={"/products"}>Products</Link>
                        </NavItem>
                        <NavItem>
                            <CartContext.Consumer>
                                {({ cartItems }) => (
                                <Link to="/products/">Cart ({cartItems.length})</Link>
                                )}
                            </CartContext.Consumer>
                        </NavItem>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default TopMenu;
