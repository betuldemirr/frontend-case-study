import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseItemQuantity, decreaseItemQuantity } from '../features/cartSlice';
import { Button, ListGroup, Row, Col } from 'react-bootstrap';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const cartTotalPrice = useSelector(state => state.cart.cartTotalPrice);
    const dispatch = useDispatch();

    return (
        <div className="Cart my-4">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <Row>
                    <Col>
                        <p>Your cart is empty</p>
                    </Col>
                </Row>
            ) : (
                <Row>
                    <ListGroup>
                        {cartItems.map((item, index) => (
                            <ListGroup.Item key={index}>
                                <Row>
                                    <Col xs={6}>
                                        <div>{item.name}</div>
                                        <div>{item.price} ₺</div>
                                    </Col>
                                    <Col xs={6} className='d-flex align-items-center'>
                                        <div className='quantity-wrapper'>
                                            <Button className='btn' onClick={() => dispatch(increaseItemQuantity(item))}>+</Button>
                                            <span>{item.quantity}</span>
                                            <Button className='btn' onClick={() => dispatch(decreaseItemQuantity(item))}>-</Button>
                                            <Button className='btn removeBtn' onClick={() => dispatch(removeFromCart(item))}>x</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                        <ListGroup.Item>
                            <p className='total-price my-4'>Total Price: {cartTotalPrice} ₺</p>
                        </ListGroup.Item>
                    </ListGroup>
                </Row>
            )}
        </div>
    );
}

export default Cart;