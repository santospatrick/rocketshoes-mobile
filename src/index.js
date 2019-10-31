import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const App = () => {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Rocketshoes</Text>
            <Icon name="shopping-basket" size={24} color="#000" />
        </View>
    );
};

export default App;
