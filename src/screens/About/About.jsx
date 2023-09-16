import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import FocusedStatusBar from '../../components/FocusedStatusBar/FocusedStatusBar';
import GoBackHeader from '../../components/GoBackHeader/GoBackHeader';
import AboutTabView from '../../components/TabView/AboutTabView';

const About = ({route}) => {
  const {movieId} = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar backgroundColor={'#1F293D'} />
      <GoBackHeader />

      <AboutTabView />
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
export default About;
