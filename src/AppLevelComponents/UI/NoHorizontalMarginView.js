import React, { Component } from 'react'
import { Text, View } from 'react-native'
import 'Helpers/global'
export default class NoHorizontalMarginView extends Component {
    render() {
        const {verticalAlso,style} = this.props
        return (
            
            <View style={{flex:0,marginHorizontal:-global.contentPadding,marginVertical:verticalAlso? -global.contentPadding : global.contentPadding,...style}}>
                {this.props.children}
            </View>
        )
    }
}
