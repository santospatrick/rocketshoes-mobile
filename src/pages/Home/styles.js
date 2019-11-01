import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 20px;
    align-items: center;
    background-color: #141419;
`;

export const HorizontalScroll = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})`
    flex-grow: 0;
`;
