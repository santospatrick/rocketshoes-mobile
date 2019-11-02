import React from 'react';
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

const CartItem = ({ item }) => {
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
            </Content>
            <Footer>
                <Input value={String(item.amount)} />
                <Total>TO-DO: R$539,70</Total>
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
    }).isRequired,
};

export default CartItem;
