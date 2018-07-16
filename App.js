import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset } from 'expo';
import AppNavigator from './navigation/AppNavigator';


export default class App extends React.Component {

  state = {
    isLoadingComplete: false,
  }

  componentWillMount() {
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/logo.png'),
      ])
    ])
  }

  _handleLoadingError = error => {
    console.warn(error);
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
    console.log('assets loaded');
  }

  render() {
  if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
            startAsync={this._loadResourcesAsync}
            onError={this._handleLoadingError}
            onFinish={this._handleFinishLoading}
          />
        );
      } else {
        return (
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        );
      }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
