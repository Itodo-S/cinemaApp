import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loader}>
        <ActivityIndicator
          size="large"
          color="#ffffff"
          style={styles.activityIndicator}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A2232',
  },
  loader: {
    alignItems: 'center',
  },

  activityIndicator: {
    position: 'absolute',
  },
});

export default Loader;
