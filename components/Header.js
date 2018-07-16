import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

@withNavigation
export default class CHeader extends Component {

 _handlePress() {
  console.log('pressed home');
  this.props.navigation.navigate('Pricing');
 }

  render() {
    return (
      <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'My Car India', style: { color: '#fff' } }}
          rightComponent={ 
            <Icon
              name='home'
              color='#fff' 
              onPress={() => this._handlePress()}
            />
          }
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
