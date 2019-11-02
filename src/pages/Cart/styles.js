import styled from 'styled-components/native';
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
