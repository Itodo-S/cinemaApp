import React from 'react';
import {Image, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {assets} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeHeaderBar = () => {
  return (
    <View style={styles.HomeHeaderBar}>
      <Image source={assets.logo} style={styles.logo} />
      <View>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Icon name="rocket" size={30} color="#900" />
          <Text>Nur-Sultan</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HomeHeaderBar: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#1F293D',
    height: 64,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },

  logo: {
    height: 48,
    width: 48,
  },
});

export default HomeHeaderBar;
