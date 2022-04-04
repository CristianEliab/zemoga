import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';
import {
  fetchPostItems,
  deletePostItems,
  addPostItem,
} from '../../stores/actions/todo.action';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Button, List, SubTitle} from '../../components';
import {lighterWhite} from '../../utils/color.util';
import styles from './Home.style';
import {colors} from '../../themes/constants.styles';

const Home = ({
  postItems,
  fetchPost,
  deleteAllPosts,
  addFavorites,
  navigation,
}) => {
  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name={'refresh'}
          color={colors.PRIMARY_APP_BG}
          size={35}
          onPress={() => {
            fetchPost();
          }}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <View style={styles.list}>
          <View style={styles.column}>
            <SubTitle subtitle={'Recent Posts'} />
            <View style={styles.deleteAllButton}>
              <Button
                onPress={() => deleteAllPosts()}
                icon={{
                  name: 'trash-outline',
                  color: lighterWhite,
                  size: 24,
                }}
              />
            </View>
          </View>
          <ScrollView contentContainerStyle={styles.scrollableList}>
            {postItems.map(item => (
              <List
                key={item.id}
                {...item}
                addFavorites={() => addFavorites(item.id)}
                navigation={navigation}
                type={'post'}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

Home.defaultProps = {
  postItems: [],
};

Home.propTypes = {
  postItems: Proptypes.array.isRequired,
};

export const mapStateToProps = ({state}) => {
  return {
    postItems: state.items,
  };
};

export const mapDispatchToProps = dispatch => ({
  fetchPost: () => dispatch(fetchPostItems()),
  addFavorites: id => dispatch(addPostItem(id)),
  deleteAllPosts: () => dispatch(deletePostItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
