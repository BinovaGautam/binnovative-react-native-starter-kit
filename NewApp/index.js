/**
 * @format
 */

import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

const MainApp = () => {
    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <App />
      </GestureHandlerRootView>
    );
};

AppRegistry.registerComponent(appName, () => MainApp);
