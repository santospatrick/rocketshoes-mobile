import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <Routes />
            <StatusBar barStyle="light-content" />
        </Provider>
    );
};

export default App;
