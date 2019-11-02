import React from 'react';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
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
import {
    updateAmountRequest,
    removeFromCart,
} from '../../store/modules/cart/actions';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    function increment(product) {
        dispatch(updateAmountRequest(product.id, product.amount + 1));
    }

    function decrement(product) {
        dispatch(updateAmountRequest(product.id, product.amount - 1));
    }

    return (
        <Container>
            <Content>
                <Image
                    source={{
                        uri: item.image,
                    }}
                />
                <Text>
                    <Title>{item.title}</Title>
                    <Price>{item.formattedPrice}</Price>
                </Text>
                <Icon
                    name="delete-forever"
                    size={24}
                    color="#7159c1"
                    onPress={() => dispatch(removeFromCart(item.id))}
                />
            </Content>
            <Footer>
                <Icon
                    name="remove-circle-outline"
                    size={20}
                    color="#7159c1"
                    onPress={() => decrement(item)}
                />
                <Input value={String(item.amount)} />
                <Icon
                    name="add-circle-outline"
                    size={20}
                    color="#7159c1"
                    onPress={() => increment(item)}
                />
                <Total>{item.subtotal}</Total>
            </Footer>
        </Container>
    );
};

CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        title: PropTypes.string,
        formattedPrice: PropTypes.string,
        amount: PropTypes.number,
        subtotal: PropTypes.string,
    }).isRequired,
};

export default CartItem;
