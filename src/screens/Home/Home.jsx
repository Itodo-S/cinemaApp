import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import FocusedStatusBar from '../../components/FocusedStatusBar/FocusedStatusBar';
import HomeHeaderBar from '../../components/HomeHeaderBar/HomeHeaderBar';
const Home = () => {
  return (
    <SafeAreaView>
      <FocusedStatusBar backgroundColor={'#1F293D'} />
      <HomeHeaderBar />
    </SafeAreaView>
  );
};

export default Home;
