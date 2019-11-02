import React from 'react';
import PropTypes from 'prop-types';
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
import { addToCartRequest } from '../../store/modules/cart/actions';

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
                        dispatch(addToCartRequest(item.id));
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

Product.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        title: PropTypes.string,
        formattedPrice: PropTypes.string,
    }).isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default Product;
