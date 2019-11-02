import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
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

const Product = ({ item }) => {
    const dispatch = useDispatch();
    const amount = useSelector(state =>
        state.cart.reduce((acc, product) => {
            acc[product.id] = product.amount;
            return acc;
        }, {}),
    );

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
                    }}>
                    <Counter>
                        <Icon name="add-shopping-cart" color="#FFF" size={20} />
                        <CounterText>{amount[item.id] || 0}</CounterText>
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
        amount: PropTypes.number,
    }).isRequired,
};

export default Product;
