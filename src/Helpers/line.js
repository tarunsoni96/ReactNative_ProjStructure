import React from 'react'
import {View} from 'react-native'
import '../Helpers/global'
import LinearGradient from "react-native-linear-gradient";

const Line = ({style}) => {
        return(
            <View
          style={{width:'100%',marginVertical:20,height:1,backgroundColor:'#EBEBEB',...style}}
         />
        )
}

export default Line