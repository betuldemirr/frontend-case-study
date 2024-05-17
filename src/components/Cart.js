import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseItemQuantity, decreaseItemQuantity, clearCart } from '../features/cartSlice';
import { Button, ListGroup, Row, Col } from 'react-bootstrap';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const cartTotalPrice = useSelector(state => state.cart.cartTotalPrice);
    const dispatch = useDispatch();

    return (
        <div className="Cart">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ListGroup>
                        {cartItems.map((item, index) => (
                            <ListGroup.Item key={index}>
                                <Row>
                                    <Col xs={5}>
                                        <div>{item.name}</div>
                                        <div>{item.price} ₺</div>
                                    </Col>
                                    <Col xs={4}>
                                        <Button onClick={() => dispatch(increaseItemQuantity(item))}>+</Button>
                                        <span>{item.quantity}</span>
                                        <Button onClick={() => dispatch(decreaseItemQuantity(item))}>-</Button>
                                    </Col>
                                    <Col xs={2} className="text-end">
                                        <Button variant="danger" onClick={() => dispatch(removeFromCart(item))}>X</Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <p>Total Price: {cartTotalPrice.toFixed(2)} ₺</p>
                </>
            )}
        </div>
    );
}

export default Cart;