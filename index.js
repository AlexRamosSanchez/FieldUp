/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppNavigator from './navigation';


AppRegistry.registerComponent(appName, () => AppNavigator);
