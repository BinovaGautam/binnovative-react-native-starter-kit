/**
 * @format
 */

import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Toast from 'react-native-toast-notifications';

const MainApp = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <App />
      <Toast ref={ref => (global['toast'] = ref)} />
    </GestureHandlerRootView>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
