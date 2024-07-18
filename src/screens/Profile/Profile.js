import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from './components/ProfileHeader';
import ProfileInfo from './components/ProfileInfo';
import ProfileBio from './components/ProfileBio';
import ProfileStory from './components/ProfileStory';
import posts from '../../data/posts';

export default function Profile() {
  const screenWidth = Dimensions.get('window').width;
  const numColumns = 3;
  const ImageSize = (screenWidth - (numColumns + 1) * 2) / numColumns;

  const renderProps = ({item}) => (
    <TouchableOpacity>
      <Image
        source={{uri: item.image}}
        style={{width: ImageSize, height: ImageSize, margin: 1}}
      />
    </TouchableOpacity>
  );
  return (
    <ScrollView style={styles.container}>
      <Header />
      <ProfileInfo />
      <ProfileBio />
      <ProfileStory />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
        data={posts}
        renderItem={renderProps}
        contentContainerStyle={styles.photoGrid}
        style={{marginTop: 15}}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  photoGrid: {
    paddingHorizontal: 5,
  },
});
