import React from 'react';
import { useDispatch } from 'react-redux';
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
import { addItem } from '../../store/modules/cart/actions';

const Product = ({ item, navigation }) => {
    const dispatch = useDispatch();

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
                <Button
                    onPress={() => {
                        dispatch(addItem(item));
                        navigation.navigate('Cart');
                    }}>
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
