import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Colors } from "UIProps/Colors";
import RadioButton from "react-native-radio-button";

export default class CustomRadioButton extends Component {
    render() {
        const {selected,onPress = ()=>{}} = this.props
        return (
            
        <RadioButton
        innerColor={Colors.accent}
        outerColor={Colors.accent}
        size={10}
        animation={"bounceIn"}
        isSelected={ selected || false}
          onPress={() =>onPress()}
      />
        )
    }
}
