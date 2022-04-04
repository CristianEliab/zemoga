import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, View} from 'react-native';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';
import {Route} from './routes/index.route';
import {enableScreens} from 'react-native-screens';
import {result} from 'lodash';
import {OverlaySpinner} from './components';

import {appContainerStyle, statusBarStyle} from './themes/application.styles';
enableScreens();

const App = ({showSpinner}) => {
  return (
    <View style={appContainerStyle}>
      <StatusBar translucent {...statusBarStyle} />
      <Route />
      <OverlaySpinner showSpinner={showSpinner} />
    </View>
  );
};

App.defaultProps = {
  showSpinner: 0,
};

App.propTypes = {
  showSpinner: Proptypes.number.isRequired,
};

export const mapStateToProps = ({spinner}) => ({
  showSpinner: result(spinner, 'count', 0),
});

export default connect(mapStateToProps)(App);
