import React, { Component } from 'react'
import { View} from 'react-native'
import backBtn from "assets/svgIcons/back.svg";
import SvgUri  from "react-native-svg-uri";
import { TouchableWithoutFeedback } from 'react-native';
export default class SvgButton extends Component {
    render() {
        const {onPress,size,color,svg} = this.props

        return (
            <TouchableWithoutFeedback onPress={()=>onPress()} >
            <View>

                <SvgUri
                  width={ size || 30}
                  height={size || 30}
                  fill={color || "#000"}
                  svgXmlData={svg || backBtn}
                />
            </View>
            </TouchableWithoutFeedback>
        )
    }
}
