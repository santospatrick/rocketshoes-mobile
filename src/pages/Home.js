import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Text>Home Screen</Text>
            <Icon
                name="shopping-basket"
                size={24}
                color="#000"
                onPress={() => navigation.navigate('Cart')}
            />
        </View>
    );
};

export default Home;
