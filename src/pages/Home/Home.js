import React, { useEffect, useState } from 'react';
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

export default Home;
