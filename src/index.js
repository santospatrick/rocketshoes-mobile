import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cart from './pages/Cart';
import Home from './pages/Home';

const AppNavigator = createStackNavigator({
    Home,
    Cart,
});

export default createAppContainer(AppNavigator);
