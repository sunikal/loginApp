import React, { Component } from "react";
import { Header,List,ListItem,Left,Body,Right,Thumbnail,Container,Button,Title,Badge, Content,Card,CardItem,Icon} from "native-base";
import {
  View,
  Text,
  Image,
  FlatList
} from "react-native";



export default class Example extends Component {

  constructor(props){
    super(props);
  }
  render() {
    return (
      <Container style={{marginLeft: 10,marginRight: 10,color: '#E5E5E5'}}>
        <Text style={{justifyContent:'center',alignItems:'center',fontSize:40,marginTop:60,marginLeft:40}}>Example</Text>
        
        
      </Container>
    );
  }
}

