import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cart from './pages/Cart';
import Home from './pages/Home';
import Header from './components/Header';

const AppNavigator = createStackNavigator(
    {
        Home,
        Cart,
    },
    {
        defaultNavigationOptions: navigation => ({
            header: <Header navigation={navigation} />,
        }),
        cardStyle: {
            backgroundColor: '#141419',
        },
    },
);

export default createAppContainer(AppNavigator);
