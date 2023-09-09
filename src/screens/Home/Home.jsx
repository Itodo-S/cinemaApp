import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import FocusedStatusBar from '../../components/FocusedStatusBar/FocusedStatusBar';
import HomeHeaderBar from '../../components/HomeHeaderBar/HomeHeaderBar';
import HomeSearchBar from '../../components/HomeSearchBar/HomeSearchBar';
import MovieCard from '../../components/Cards/MovieCard';
import {FlatList} from 'react-native-gesture-handler';
import {movieList} from '../../../data/movieList';
import {useCinema} from '../../context/CinemaContext';
const Home = () => {
  const {nowPlaying} = useCinema();

  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar backgroundColor={'#1F293D'} />
      <HomeHeaderBar />
      <View style={styles.content}>
        <HomeSearchBar />

        <FlatList
          data={movieList}
          keyExtractor={item => item.title}
          numColumns={2}
          renderItem={({item}) => (
            <MovieCard
              source={item.image}
              title={item.title}
              genres={item.genres}
            />
          )}
        />
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
