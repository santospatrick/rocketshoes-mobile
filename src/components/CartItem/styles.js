import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 10px;
    margin-bottom: 20px;
`;

export const Content = styled.View`
    flex-direction: row;
`;

export const Image = styled.Image.attrs({
    resizeMode: 'contain',
})`
    height: 80px;
    width: 80px;
`;

export const Text = styled.View`
    flex: 1;
    justify-content: center;
    margin-left: 10px;
`;

export const Title = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-size: 16px;
    color: #333;
`;

export const Price = styled.Text`
    margin-top: 5px;
    font-size: 16px;
    font-weight: bold;
`;

export const Footer = styled.View`
    background-color: #eee;
    flex: 1;
    height: 40px;
    border-radius: 4px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin-top: 10px;
`;

export const Input = styled.TextInput.attrs({
    editable: false,
})`
    width: 50px;
    height: 26px;
    background-color: #fff;
    border-radius: 4px;
    color: #666;
    margin-left: 20px;
    padding: 0 12px;
`;

export const Total = styled.Text`
    font-weight: bold;
    font-size: 16px;
`;
