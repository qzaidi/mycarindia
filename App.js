import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import { Constants, Location, Permissions } from 'expo'

import Map from './components/Map';
import Header from './components/Header';
import AgentService from './services/agents';

const deltas = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

export default class App extends React.Component {

  state = {
    region: null,
    serviceAgents: [],
  }

  getNearbyAgents() {
    const { latitude, longitude } = this.state.region;
    const userLocation = { latitude, longitude };
    const serviceAgents = AgentService.getNearbyAgents(userLocation);
    this.setState({ serviceAgents });
  }

  componentWillMount() {
    this.getLocationAsync()
  }

  getLocationAsync = async () => {
     let { status } = await Permissions.askAsync(Permissions.LOCATION);
     if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied'
      });
     }

     let location = await Location.getCurrentPositionAsync({});
     const region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      ...deltas
    };
    await this.setState({ region });
    this.getNearbyAgents();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header/>
        <Map
          region={this.state.region}
          places={this.state.serviceAgents}
        />
        <Button 
          large
          title="Assist me" 
          containerViewStyle={styles.buttonContainer} 
          buttonStyle={styles.button}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
  },
  button: {
    backgroundColor: 'red',
  }
});
