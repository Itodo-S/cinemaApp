import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import FocusedStatusBar from '../../components/FocusedStatusBar/FocusedStatusBar';
import HomeHeaderBar from '../../components/HomeHeaderBar/HomeHeaderBar';
import HomeSearchBar from '../../components/HomeSearchBar/HomeSearchBar';
import MovieCard from '../../components/Cards/MovieCard';
import {FlatList} from 'react-native-gesture-handler';
import {useCinema} from '../../context/CinemaContext';
import Loader from '../../components/Loader/Loader';
const Home = () => {
  const {nowPlaying, isLoading} = useCinema();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar backgroundColor={'#1F293D'} />
      <HomeHeaderBar />
      <View style={styles.content}>
        <HomeSearchBar />

        <FlatList
          data={nowPlaying}
          keyExtractor={item => item?.id?.toString()}
          numColumns={2}
          renderItem={({item}) => (
            <MovieCard
              source={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
              title={item?.title}
              genres={item?.genres.join(', ')}
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
