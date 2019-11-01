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

const Product = ({ item, navigation }) => {
    return (
        <Container>
            <Image
                source={{
                    uri: item.image,
                }}
                resizeMode="contain"
            />
            <Info>
                <InfoText>
                    <Title>{item.title}</Title>
                    <Price>{item.formattedPrice}</Price>
                </InfoText>
                <Button onPress={() => navigation.navigate('Cart')}>
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
