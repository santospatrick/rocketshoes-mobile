import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Card, Button, ButtonText, Total, Price } from './styles';
import CartItem from '../../components/CartItem/CartItem';

const Cart = () => {
    const products = useSelector(state => state);

    return (
        <Container>
            <Card>
                {products.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}

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
