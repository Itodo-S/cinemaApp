import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import FocusedStatusBar from '../../components/FocusedStatusBar/FocusedStatusBar';
import HomeHeaderBar from '../../components/HomeHeaderBar/HomeHeaderBar';
import HomeSearchBar from '../../components/HomeSearchBar/HomeSearchBar';
const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar backgroundColor={'#1F293D'} />
      <HomeHeaderBar />
      <View style={styles.content}>
        <HomeSearchBar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1A2232',
  },
});
export default Home;
