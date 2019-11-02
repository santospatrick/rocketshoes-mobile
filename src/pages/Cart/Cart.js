import React from 'react';
import { useSelector } from 'react-redux';
import {
    Container,
    Card,
    Button,
    ButtonText,
    Total,
    Price,
    ShoppingCart,
    EmptyText,
} from './styles';
import CartItem from '../../components/CartItem/CartItem';
import { formatPrice } from '../../util/format';

const Cart = () => {
    const products = useSelector(state =>
        state.cart.map(product => ({
            ...product,
            subtotal: formatPrice(product.amount * product.price),
        })),
    );

    const total = useSelector(state =>
        formatPrice(
            state.cart.reduce(
                (acc, product) => acc + product.price * product.amount,
                0,
            ),
        ),
    );

    return (
        <Container>
            {products.length ? (
                <Card>
                    {products.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}

                    <Total>Total</Total>
                    <Price>{total}</Price>

                    <Button>
                        <ButtonText>Finalizar pedido</ButtonText>
                    </Button>
                </Card>
            ) : (
                <Card>
                    <ShoppingCart />
                    <EmptyText>Seu carrinho está vazio.</EmptyText>
                </Card>
            )}
        </Container>
    );
};

export default Cart;
