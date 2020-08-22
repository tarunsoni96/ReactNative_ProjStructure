import React from 'react'
import {View} from 'react-native'
import '../Helpers/global'
import LinearGradient from "react-native-linear-gradient";

const Line = ({style}) => {
        return(
            <View
          style={{width:'100%',height:1,backgroundColor:'#EBEBEB',...style}}
         />
        )
}

const styles = {
    line:{
        width:null,
        height:1,
        width:global.deviceWidth,
        backgroundColor:'#eee'
    },
    line_vertical:{
        width:1,
        height:30,
        backgroundColor:'#777777',
        top:-50,
    }

}

export default Line