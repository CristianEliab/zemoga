import React from 'react';
import {View, ScrollView} from 'react-native';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';
import {SubTitle, List} from '../../components';
import styles from './Favorites.style';

const FavoritesScreen = ({favoritesItems, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <View style={styles.list}>
          <View style={styles.column}>
            <SubTitle subtitle={'Favorite Posts'} />
          </View>
          <ScrollView contentContainerStyle={styles.scrollableList}>
            {favoritesItems.map(item => (
              <List
                key={item.id}
                {...item}
                isBlock={true}
                type={'post'}
                navigation={navigation}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

FavoritesScreen.defaultProps = {
  favoritesItems: [],
};

FavoritesScreen.propTypes = {
  favoritesItems: Proptypes.array.isRequired,
};

export const mapStateToProps = ({state}) => {
  return {
    favoritesItems: state.items.filter(item => item.isFavorite),
  };
};

export default connect(mapStateToProps)(FavoritesScreen);
