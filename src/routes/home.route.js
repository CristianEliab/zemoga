import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Favorites from '../screens/Favorites/Favorites.screen';
import Detail from '../screens/Detail/Detail.screen';
import Home from '../screens/Home/Home.screen';

import {colors, fonts} from '../themes/constants.styles';

const Stack = createStackNavigator();
const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'ios-star' : 'ios-star-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.PRIMARY_APP_BG,
        inactiveTintColor: colors.PRIMARY_APP_BG,
        labelStyle: {
          fontSize: fonts.FONT_SIZE_XS,
          fontFamily: fonts.FONT_FAMILY_REGULAR,
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
};

const AppScreens = () => (
  <AppStack.Navigator
    screenOptions={() => ({
      headerStyle: {
        backgroundColor: colors.PRIMARY_HEADER_BG,
      },
      headerTitleStyle: {
        color: colors.PRIMARY_APP_BG,
        fontSize: fonts.FONT_SIZE_XL,
        fontFamily: fonts.FONT_FAMILY_BOLD,
      },
    })}>
    <Stack.Screen
      name="Home"
      component={MyTabs}
      options={{
        title: 'ZEMOGA',
      }}
    />
    <Stack.Screen name="Detalle" component={Detail} />
  </AppStack.Navigator>
);

export default AppScreens;
