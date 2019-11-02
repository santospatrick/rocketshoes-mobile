import React from 'react';
import { Container, Card, Button, ButtonText, Total, Price } from './styles';
import CartItem from '../../components/CartItem/CartItem';

const Cart = () => {
    return (
        <Container>
            <Card>
                <CartItem />
                <CartItem />

                <Total>Total</Total>
                <Price>R$ 1619,10</Price>

                <Button>
                    <ButtonText>Finalizar pedido</ButtonText>
                </Button>
            </Card>
        </Container>
    );
};

export default Cart;
