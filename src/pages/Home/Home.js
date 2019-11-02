import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Product from '../../components/Product';
import { Container, HorizontalScroll } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

const Home = ({ navigation }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const response = await api.get('products');
            const data = response.data.map(item => ({
                ...item,
                formattedPrice: formatPrice(item.price),
            }));
            setProducts(data);
        }

        getProducts();
    }, []);

    return (
        <Container>
            <HorizontalScroll>
                {products.map(product => (
                    <Product
                        key={product.id}
                        item={product}
                        navigation={navigation}
                    />
                ))}
            </HorizontalScroll>
        </Container>
    );
};

Home.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default Home;
