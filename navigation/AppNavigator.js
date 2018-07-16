import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import HomeScreen from '../screens/Home';
import PricingScreen from '../screens/Pricing';

export default createDrawerNavigator({
  Home: HomeScreen,
  Pricing: PricingScreen,
});

