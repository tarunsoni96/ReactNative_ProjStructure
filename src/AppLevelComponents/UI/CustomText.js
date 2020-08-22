import React, { Component } from "react";
import { Text, Image } from "react-native";
import "Helpers/global";
import "Helpers/Methods";
import EStyleSheet from "react-native-extended-stylesheet";
import { LanguageConsumer } from "AppLevelComponents/LanguageSelector/LanguageContext";
import { Colors } from "UIProps/Colors";
import Fonts from "UIProps/Fonts";
import HelperMethods from "Helpers/Methods";
import Constants from "Helpers/Constants";
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen";


export default class CustomText extends Component {
  render() {
    let {
      size,
      onPress,
      textAlign,
      type,
      color,
      font,
      padding,
      numberOfLines,
      fit,
      text,
      style,
      regular
    } = this.props;
    let rem = global.rem;

    padding = padding == undefined && 1
    
    return (
      <LanguageConsumer>
        {context => {
          
          return (
            <Text
              adjustsFontSizeToFit={fit}
              numberOfLines={fit ? 1 : numberOfLines}
              allowFontScaling={true}
              onPress={onPress ? () => onPress() : onPress}
              style={[
                styles.text,
                {
                  fontSize:size || 18.5,
                  color: color || Colors.textDark,
                  top:1,
                  fontFamily: font || (regular ? Fonts.regular :  Fonts.medium),
                  textAlign: textAlign ,
                  ...style
                }
              ]}
            >
              {text}
            </Text>
          );
        }}
      </LanguageConsumer>
    );
  }
}

const styles = EStyleSheet.create({
  text: {
    textAlign: "center",
    marginVertical:heightPercentageToDP(-0.14),
  }
});
