import React, {Component} from 'react';
import { UIManager} from 'react-native';
import AppRoot from './src/AppRoot';
import SplashScreen from 'react-native-splash-screen';
import PushNotification from './src/ServiceProviders/PushNotfication';
import HelperMethods from 'Helpers/Methods';
import { MenuProvider } from 'react-native-popup-menu';

import {UserInfoProvider} from './src/AppLevelComponents/Contexts/CxtUserInfo';
class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
    HelperMethods.isPlatformAndroid() && UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  render() {
    return (
        <UserInfoProvider>
        <MenuProvider>

          <AppRoot />
          <PushNotification />
        </MenuProvider>
        </UserInfoProvider>
    );
  }
}

export default App;
