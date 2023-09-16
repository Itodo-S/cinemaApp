import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import LeftIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const GoBackHeader = ({icon}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.goBackContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <LeftIcon name="left" size={24} color="#637394" />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>The Batman</Text>
      </View>

      {icon && (
        <View style={styles.iconContainer}>
          {/* Render your additional icon here */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  goBackContainer: {
    width: '100%',
    height: 64,
    backgroundColor: '#1F293D',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },

  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },

  titleText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '700',
  },

  iconContainer: {
    marginRight: 16,
  },
});

export default GoBackHeader;
