import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import SearchIcon from 'react-native-vector-icons/Octicons';

const HomeSearchBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const closeSearch = () => {
    setIsSearchVisible(false);
  };

  return (
    <View style={styles.barContainer}>
      {isSearchVisible ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#637394"
            onChangeText={text => setSearchText(text)}
            value={searchText}
          />
          <TouchableOpacity onPress={closeSearch}>
            <SearchIcon name="x" size={18} color={'#637394'} />
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Text style={styles.barText}>Now in cinemas</Text>
          <TouchableOpacity onPress={toggleSearch}>
            <SearchIcon name="search" size={18} color={'#637394'} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  barText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
  },

  inputContainer: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#637394',
    borderRadius: 8,
    paddingHorizontal: 10,
  },

  searchInput: {
    flex: 1,
    height: 40,
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default HomeSearchBar;
