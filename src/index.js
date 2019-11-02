import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';
import { setTopLevelNavigator } from './services/navigation';

const App = () => {
    return (
        <Provider store={store}>
            <Routes ref={ref => setTopLevelNavigator(ref)} />
            <StatusBar barStyle="light-content" />
        </Provider>
    );
};

export default App;
