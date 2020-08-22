import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Loader from './Loader'
import {Colors} from "UIProps/Colors";

export default class ApiCallView extends Component {
    render() {
        const {isApiCall,color,style} = this.props
        return (
            <>
            {isApiCall ?  
            <View style={{alignSelf:'flex-start',...style}} >

            <Loader size={'small'} color={color ||Colors.accent } />
            </View>
            :
            this.props.children
            }
            </>
        )
    }
}
