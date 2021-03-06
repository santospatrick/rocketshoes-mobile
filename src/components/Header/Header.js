import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Wrapper, Container, Image, Cart, Counter, Number } from './styles';

const Header = ({ navigation }) => {
    const productsLength = useSelector(state => state.cart.length);

    return (
        <Wrapper>
            <Container>
                <TouchableHighlight onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/images/logo.png')} />
                </TouchableHighlight>
                <Cart>
                    <Icon
                        name="shopping-basket"
                        color="#FFF"
                        size={24}
                        onPress={() => {
                            navigation.navigate('Cart');
                        }}
                    />
                    <Counter>
                        <Number>{productsLength}</Number>
                    </Counter>
                </Cart>
            </Container>
        </Wrapper>
    );
};

Header.propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func,
        navigate: PropTypes.func,
    }).isRequired,
};

export default Header;
