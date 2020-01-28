import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height
export default class Post extends Component {
    render(){
    return ( 
        <View>
            <View style={styles.cabecalho}>
                <Image source={require('../../resources/img/img-fundo.png')}  
                style={ styles.fotoDePerfil }></Image>
                <Text>{this.props.foto.usuario}</Text>
            </View>
            <Image source={require('../../resources/img/img-fundo.png')}  
            style={ styles.foto }></Image>
        </View>
        /*
        <ScrollView style={ { marginTop:20 } }>
        { fotos.map(foto => 
            <View key={foto.id}>
            <Text>{foto.usuario}</Text>
            <Image source={require('./resources/img/img-fundo.png')}  
            style={ { width: width, height: height/2} }></Image>
            </View>
        )}
        
        </ScrollView>
        */
    );
    }
}

const styles = StyleSheet.create({
  cabecalho: {
    margin:10, 
    flexDirection:"row", 
    alignItems:"center"
  },
  fotoDePerfil: { 
    marginRight:10, 
    borderRadius:20, 
    width: 40, 
    height: 40
  },
  foto: { 
    width: width,
    height: height/2
    }
}); 