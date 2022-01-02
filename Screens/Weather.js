import {Text,View ,Button} from 'react-native'

import * as React from 'react';


export default class Weather extends React.Component{
    
    render(){
       return(
         <View>
                <Text style={{
        fontWeight:"bold",
        fontSize:30
       
      }}> Here is the weather fore cast for today </Text>



      <Text style={{
        fontWeight:"bold",
        fontSize:30
              
      }}> Today there will be a sunny Day With A slight chance of rain  </Text>

      </View>
       )  


    }

}