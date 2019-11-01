import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    width: 220px;
    margin-right: 20px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
`;

export const Image = styled.Image`
    height: 220px;
    width: 220px;
`;

export const Info = styled.View`
    padding: 10px;
`;

export const InfoText = styled.View`
    padding: 5px;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 5px;
`;

export const Price = styled.Text`
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const Counter = styled.View`
    flex-direction: row;
    height: 42px;
    width: 53px;
    background-color: #59479a;
    align-items: center;
    justify-content: center;
`;

export const CounterText = styled.Text`
    margin-left: 4px;
    color: #fff;
`;

export const Button = styled(RectButton)`
    flex-direction: row;
    height: 42px;
    width: 100%;
    border-radius: 6px;
    background-color: #7159c1;
    align-items: center;
`;

export const ButtonText = styled.Text`
    flex: 1;
    color: #fff;
    text-align: center;
`;
