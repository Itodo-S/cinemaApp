import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

const MovieCard = ({genres, title, source}) => {
  return (
    <View style={styles.movieCard}>
      <Image source={source} style={styles.cardImage} resizeMode="cover" />

      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubTitle}>{genres}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  movieCard: {
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 160,
    margin: 16,
    padding: 0,
    // backgroundColor: 'red',
  },

  cardImage: {
    width: 10,
    height: 230,
    marginBottom: 8,
    borderRadius: 8,
    aspectRatio: 16 / 23,
  },

  cardTitle: {
    fontWeight: '700',
    lineHeight: 19.2,
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 4,
  },

  cardSubTitle: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: '#637394',
  },
});

export default MovieCard;
