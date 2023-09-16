import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const AboutTabScreen = () => (
  <View style={styles.tabContent}>
    <Text>About Tab</Text>
  </View>
);

const SessionTabScreen = () => (
  <View style={styles.tabContent}>
    <Text>Session Tab</Text>
  </View>
);

const initialLayout = {width: Dimensions.get('window').width};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialLayout={initialLayout}
      tabBarOptions={{
        activeTintColor: 'blue',
        labelStyle: styles.label,
        style: styles.tabBar,
        indicatorStyle: styles.indicator,
      }}>
      <Tab.Screen name="About" component={AboutTabScreen} />
      <Tab.Screen name="Session" component={SessionTabScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#1F293D',
  },
  indicator: {
    backgroundColor: 'blue',
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabNavigator;
