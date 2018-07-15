import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class CHeader extends Component {

  render() {
    return (
      <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'My Car India', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          backgroundColor="red"
          outerContainerStyles={styles.header}
      />
    )
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
  },
});
