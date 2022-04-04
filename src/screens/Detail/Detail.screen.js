import React, {useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';
import {SubTitle, List} from '../../components';
import {fetchDetailPost} from '../../stores/actions/todo.action';
import styles from './Detail.style';
import {colors} from '../../themes/constants.styles';

const DetailScreen = ({route, commentsList, fetchDetailPost}) => {
  const {post} = route.params;
  useEffect(() => {
    fetchDetailPost({id: post.id});
  }, [post]);

  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <View style={styles.list}>
          <View style={styles.column}>
            <SubTitle subtitle={'Description:'} />
          </View>
          <View style={styles.column}>
            <Text
              accessible={false}
              style={[styles.text, {color: colors.PRIMARY_BG_TEXT_CONTRAST}]}>
              {post.body}
            </Text>
          </View>
          <View style={styles.column}>
            <SubTitle subtitle={'Comments'} />
          </View>
          <ScrollView contentContainerStyle={styles.scrollableList}>
            {commentsList.map(item => (
              <List key={item.id} {...item} type={'comment'} />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

DetailScreen.defaultProps = {
  commentsList: [],
};

DetailScreen.propTypes = {
  commentsList: Proptypes.array.isRequired,
};

export const mapStateToProps = ({state}) => {
  return {
    commentsList: state.comments,
  };
};

export const mapDispatchToProps = dispatch => ({
  fetchDetailPost: id => dispatch(fetchDetailPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
