import { Container,Button } from 'native-base';
import React from 'react';
import { Dimensions,StyleSheet, Text, View, TextInput, TouchableOpacity,ImageBackground, StatusBar, Alert } from 'react-native';



const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
          userName: "",
          password: "",
        };
      }

  
      updateuserName = (text) => {
        this.setState({userName: text})
      }
    
      updatePassword = (text) => {
        this.setState({password: text})
      }


      _submit = () => {
        if(this.state.userName.trim() != "" && this.state.password != ""){
          if(this.state.userName == "hruday@gmail.com" && this.state.password == "hruday123"){
            this.props.navigation.navigate("Dashboard");
          }
        }else{
          Alert.alert("Login Fail","Please Enter Username/Password");
        }
      }


 

  render(){
    return (
      <Container>
          <StatusBar  barStyle="dark-content" />
          <ImageBackground source={require('../../images/bg.png')} style={{ flex:1,height: null, width: null,justifyContent: 'center',alignItems:"center"}}>
      <View style={styles.container}>
      
        <Text style={styles.logo}>Login App</Text>
        
        <View style={styles.inputView} >
        <TextInput ref="name" 
        
          style={styles.inputText}
          placeholder='hruday@gmail.com'
          value={this.state.userName} 
					keyboardType = 'email-address'
					autoCapitalize = 'none'
					onChangeText = {this.updateuserName}
        />
         
        </View>
        <View style={styles.inputView} >
        <TextInput ref="newPassword"
            value={this.state.password} 
            style={styles.inputText}
            placeholder="hruday123" 
            secureTextEntry={true}
			  		onChangeText = {this.updatePassword}
        />
          
        </View>
        <View>
            <Button block style={styles.btStyle} onPress={() => this._submit(this.email, this.password)}>
                <Text style={{color: '#ffffff',fontFamily: 'Nunito Sans',fontSize: 16}}>LOGIN</Text>
            </Button>
        </View>
        <View style={{flexDirection:'row',marginTop: 15}}>
          <View style={styles.accountRow}>
            <TouchableOpacity onPress={() =>
							this.props.navigation.navigate("Example")}>
              <Text style={styles.forgot}>Create Account</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.accountRow}>
            <TouchableOpacity onPress={() =>
							this.props.navigation.navigate("Example")}>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
      </ImageBackground>
    
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft:15,
    marginRight:15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:20,
    color:"#ffffff",
    marginBottom:20
  },
  inputView:{
    backgroundColor:'#ffffff',
    borderRadius:25,
    marginBottom:20,
    width: SCREEN_WIDTH-100,

  },
  inputText:{
    color:'#333333',
    marginLeft: 10
  },
  forgot:{
    color:"white",
    fontSize:13
  },
  loginBtn:{
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  accountRow:{
    flex:1,alignItems:"center",justifyContent:"center",
  },
  btStyle:{
    backgroundColor: '#6A2FF9',
    marginTop: 5,
    borderRadius: 8,
    width: SCREEN_WIDTH-100,
    justifyContent:'center',
  },
  wrapper: {
    display: "flex"
  },
  inputFiled: {
    paddingTop: 5,
    paddingBottom: 5,
    color: '#333333',
  },
  action:{
    flexDirection:'row',
    borderColor:'rgba(34, 34, 34, 0.12)',
    borderWidth:1,
    borderRadius: 4,
  }

});