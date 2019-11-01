import React from 'react';
import Product from '../../components/Product';
import { Container, HorizontalScroll } from './styles';

const Home = () => {
    return (
        <Container>
            <HorizontalScroll>
                <Product />
                <Product />
                <Product />
                <Product />
            </HorizontalScroll>
        </Container>
    );
};

export default Home;
