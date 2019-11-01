import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Wrapper, Container, Image, Cart, Counter, Number } from './styles';

const Header = ({ navigation }) => {
    return (
        <Wrapper>
            <Container>
                <Image source={require('../../assets/images/logo.png')} />
                <Cart>
                    <Icon name="shopping-basket" color="#FFF" size={24} />
                    <Counter>
                        <Number>3</Number>
                    </Counter>
                </Cart>
            </Container>
        </Wrapper>
    );
};

export default Header;
