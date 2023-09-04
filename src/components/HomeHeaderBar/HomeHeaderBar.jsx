import React from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {assets} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Ico from 'react-native-vector-icons/Entypo';

const HomeHeaderBar = () => {
  return (
    <View style={styles.HomeHeaderBar}>
      <Image source={assets.logo} style={styles.logo} />
      <View style={{flexDirection: 'row'}}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Icon
            name={'location-dot'}
            size={24}
            color="#637394"
            style={{marginRight: 5}}
          />
          <Text
            style={{
              fontWeight: 700,
              fontSize: 14,
              lineHeight: 16.8,
              color: '#FFFFFF',
            }}>
            Nur-Sultan
          </Text>
        </View>

        <View
          style={{alignItems: 'center', flexDirection: 'row', marginLeft: 30}}>
          <Ico
            name="language"
            size={24}
            color="#637394"
            style={{marginRight: 5}}
          />

          <Text
            style={{
              fontWeight: 700,
              fontSize: 14,
              lineHeight: 16.8,
              color: '#FFFFFF',
            }}>
            Eng
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: '#FF8036',
              width: 70,
              height: 40,
              borderRadius: 8,
              marginLeft: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>Log in</Text>
          </TouchableOpacity>
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
