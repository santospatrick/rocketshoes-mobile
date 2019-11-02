import React from 'react';
import {
    Container,
    Content,
    Image,
    Text,
    Title,
    Price,
    Footer,
    Input,
    Total,
} from './styles';

const CartItem = () => {
    return (
        <Container>
            <Content>
                <Image
                    source={{
                        uri:
                            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
                    }}
                />
                <Text>
                    <Title>Tênis de Caminhada Leve Confortável</Title>
                    <Price>R$179,90</Price>
                </Text>
            </Content>
            <Footer>
                <Input value="3" />
                <Total>R$539,70</Total>
            </Footer>
        </Container>
    );
};

export default CartItem;
