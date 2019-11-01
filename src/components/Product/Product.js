import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Container,
    Image,
    Info,
    InfoText,
    Title,
    Price,
    Button,
    Counter,
    CounterText,
    ButtonText,
} from './styles';

const Product = () => {
    return (
        <Container>
            <Image
                source={{
                    uri:
                        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
                }}
                resizeMode="contain"
            />
            <Info>
                <InfoText>
                    <Title>Tênis de Caminhada Leve Confortável</Title>
                    <Price>R$179,90</Price>
                </InfoText>
                <Button>
                    <Counter>
                        <Icon name="add-shopping-cart" color="#FFF" size={20} />
                        <CounterText>3</CounterText>
                    </Counter>
                    <ButtonText>Adicionar</ButtonText>
                </Button>
            </Info>
        </Container>
    );
};

export default Product;
