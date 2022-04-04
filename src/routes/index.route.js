import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import HomeScreens from './home.route';
import {colors} from '../themes/constants.styles';

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: colors.PRIMARY_HEADER_BG,
    text: colors.PRIMARY_APP_BG,
  },
};

export const Route = () => {
  return (
    <NavigationContainer theme={customDefaultTheme}>
      <HomeScreens options={{animationEnabled: false}} />
    </NavigationContainer>
  );
};
