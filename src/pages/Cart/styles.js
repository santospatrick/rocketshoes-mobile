import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
    padding: 20px;
`;

export const Card = styled.View`
    background: #fff;
    border-radius: 4px;
    padding: 10px;
`;

export const Total = styled.Text`
    text-transform: uppercase;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #999;
`;

export const Price = styled.Text`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
`;

export const Button = styled(RectButton)`
    flex: 1;
    height: 42px;
    align-items: center;
    justify-content: center;
    background-color: #7159c1;
    border-radius: 4px;
    margin-top: 30px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
`;

export const EmptyText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;

export const ShoppingCart = styled(Icon).attrs({
    name: 'remove-shopping-cart',
    size: 64,
    color: '#eee',
})`
    align-self: center;
    margin-bottom: 15px;
`;
