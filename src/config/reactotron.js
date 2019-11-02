import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-community/async-storage';

const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure()
    .use(reactotronRedux())
    .useReactNative()
    .connect();

console.tron = tron;

tron.clear();

export default tron;
