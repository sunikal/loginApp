import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  FlatList
} from "react-native";
import { Header,ListItem,Body,Right,Container,Title,Card,Left} from "native-base";
import listUsersList from '../json/user.json';


export default class Dashboard extends Component {

  constructor(props){
    super(props);
  }

  renderItemComponent=({item})=>{
    
    return(
      <View>
        <Card style={{marginRight: 10,paddingRight: 15}}>
            <ListItem thumbnail>
              <Body>
                <View style={{flex: 1,flexDirection: 'column'}}>
                  <Text style={{color:'#222222',fontWeight:'bold',fontSize:16,flexShrink:1}}>{item.name}</Text>
                  <Text note style={{fontSize:12,color:'#222222',}}>{item.email}</Text>
                  <View style ={{flex: 1,flexDirection:'row'}}>
                      <Text style={{color:'#333333',fontWeight:'bold',fontSize:11,marginTop:10,}}>{item.phoneNumber}</Text>
                      <Right>
                        <Text style={{color:'#fdfdfd',fontWeight:'bold',fontSize:11,marginTop:10,marginRight:7}}>{item.age}</Text>
                      </Right>
                  </View>
                </View>
              </Body>
              
            </ListItem>
        </Card>
      </View>
    )
  }

  

  render() {
    return (
    
    
      <Container >
          <Header hasTabs  androidStatusBarColor= '#6A2FF9' style={{color:'#6A2FF9',backgroundColor:'#6A2FF9'}}>
            
            <Body style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Title>USERS</Title>
            </Body>
           
        </Header>
        <View style={{marginLeft: 10,marginRight: 10,color: '#E5E5E5'}}>
            <FlatList
                data={listUsersList.userlist}
                renderItem={item => this.renderItemComponent(item)}
                keyExtractor={item => item.id.toString()}
            />
        </View>
        
        
      </Container>
    );
  }
}

