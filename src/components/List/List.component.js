import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Proptypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../themes/constants.styles';
import {noop} from 'lodash';
import styles from './List.style';

class List extends Component {
  render() {
    const {
      title,
      id,
      addFavorites,
      isFavorite,
      isBlock,
      navigation,
      body,
      type,
      email,
      name,
    } = this.props;
    return (
      <View>
        {type === 'comment' ? (
          <View style={styles.container2}>
            <View style={styles.row}>
              <Text
                accessible={false}
                style={[styles.text2, {color: colors.PRIMARY_TEXT}]}>
                Name: {name}
              </Text>
              <Text
                accessible={false}
                style={[styles.text2, {color: colors.PRIMARY_TEXT}]}>
                Email: {email}
              </Text>
              <Text
                accessible={false}
                style={[styles.text2, {color: colors.PRIMARY_TEXT}]}>
                Comment: {body}
              </Text>
            </View>
          </View>
        ) : (
          <TouchableOpacity
            accessible={type === 'comment' ? false : true}
            style={styles.container}
            onPress={() => {
              navigation.navigate('Detalle', {post: {id: id, title, body}});
            }}>
            <View style={styles.column}>
              <Text
                accessible={false}
                style={[styles.text, {color: colors.PRIMARY_TEXT}]}>
                {title}
              </Text>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                accessible={isBlock}
                accessibilityRole={'button'}
                onPressOut={addFavorites}>
                <Icon
                  name={'star'}
                  size={24}
                  color={
                    isBlock
                      ? colors.PRIMARY_FAVORITE
                      : isFavorite
                      ? colors.PRIMARY_FAVORITE
                      : colors.PRIMARY_INACTIVE
                  }
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

List.defaultProps = {
  title: '',
  addFavorites: noop,
};

List.propTypes = {
  text: Proptypes.string,
  addFavorites: Proptypes.func,
};

export default List;
