import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { MapView } from 'expo';


export default class Map extends Component {
  renderMarkers() {
    const Marker = MapView.Marker;
    return this.props.places.map((place, i) => (
      <Marker key={i} title={place.title} coordinate={place.coords} image={require('../assets/service.png')} />
    ))
  }

  render() {
    const { region } = this.props
    return (
      <MapView
        style={styles.container}
        region={region}
        showsUserLocation
        showsMyLocationButton
      >
        {this.renderMarkers()}
      </MapView>
    )
  }

}

const styles = {
  container: {
    width: '100%',
    height: '80%',
  }
}
