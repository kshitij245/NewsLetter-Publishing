import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native'
import AppHeader from '../components/AppHeader'
import db from'../config'



export default class HomeScreen extends React.Component {

  
     
    
  render(){
    return(
      <View>
        <AppHeader/>
        
        <TouchableOpacity 
            style={[styles.button,{backgroundColor:"purple"}]} 
            
            onPress={()=>this.props.navigation.navigate('HoroscopeScreen')}>
            
            <Text style={styles.buttonText}> HOROSCOPE </Text>
        
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"red"}]} 
            onPress={()=>     this.props.navigation.navigate('JokeScreen')}>
            <Text style={styles.buttonText}>READ A JOKE</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"navy"}]} 
            onPress={()=>this.props.navigation.navigate('TopNews')}>
            <Text style={styles.buttonText}>TOP NEWS</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"yellow"}]} 
            onPress={()=>this.props.navigation.navigate('Weather')}>
            <Text style={styles.buttonText}>WEATHER</Text>
          </TouchableOpacity>

           <Text style={styles.buttonText}>Rate Us</Text>

<TouchableOpacity onPress ={this.likeCount}>
  <Image
    style ={{width:50,height:50,marginLeft:50}}
    source ={require('../assets/thumbsup.png')}
  
  />

</TouchableOpacity>

<TouchableOpacity onPress ={this.dislikeCount}>
  <Image
    style ={{width:50,height:50,marginLeft:200}}
    source ={require('../assets/thumbsdown.png')}
  
  />

</TouchableOpacity>
  <Text>{this.state.like}   </Text>
    <Text>{this.state.dislike}   </Text> 
      </View>

    
     
    )

    
    
  }
     

 likePressed(){
  var like = db.ref('Rating/'+'/')
  like.update ('likePressed:1')
    
  
 }
    
  dislikePressed(){
  var dislike = db.ref('Rating/'+'/')
  dislike.update ('dislikePressed:1')
    
  
 }  

  likeCount(){
  this.setState({like:this.state.like+1})
    
  
 }

   dislikeCount(){
  this.setState({like:this.state.dislike+1})
    
  
 }
  constructor(){
    super();
    this.state={
      like:0,
      dislike:0
    }
  } 


}




    

    
  





const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
  },
  buttonText : {
    textAlign : 'center',
    color : 'white'
  }
})




      







    

  