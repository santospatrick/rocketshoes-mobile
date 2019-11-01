import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    background-color: #141419;
    flex-direction: row;
`;

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
`;

export const Image = styled.Image.attrs({
    resizeMode: 'contain',
})`
    height: 24px;
    width: 185px;
`;

export const Cart = styled.View`
    position: relative;
    margin-right: 5px;
`;

export const Counter = styled.View`
    position: absolute;
    z-index: 1;
    top: -5px;
    right: -6px;
    height: 16px;
    width: 16px;
    background-color: #7159c1;
    border-radius: 8px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
`;

export const Number = styled.Text`
    font-size: 10px;
    color: #fff;
`;
