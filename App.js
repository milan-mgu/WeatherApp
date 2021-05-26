import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  StatusBar,
  LogBox
} from 'react-native';
import { Provider } from 'react-redux';
import AppNavigation from './src/AppNavigation/AppNavigation';
import SplashScreen from 'react-native-splash-screen';
import Store from './src/Redux/Store';
import { Color } from './src/Assets';

class App extends Component {
  componentDidMount(){
    SplashScreen.hide();
  }

  render(){
    LogBox.ignoreAllLogs();
    return (
      <Provider store={Store}>
        <Fragment>
          <StatusBar backgroundColor={Color.AppColor} barStyle="light-content" />
          <AppNavigation />
        </Fragment>
      </Provider>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
