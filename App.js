import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import Post from './src/components/Post';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height
export default function App() {
  const fotos = [{id:1,usuario:'felipe'}, {id:2,usuario:'alberto'}, {id:3,usuario:'rafael'}];

  return (
    <FlatList style={styles.container} 
      keyExtractor={item => item.id} 
      data={fotos}
      renderItem={
        ({item}) => 
       <Post foto={ item }></Post>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:25
  }
});