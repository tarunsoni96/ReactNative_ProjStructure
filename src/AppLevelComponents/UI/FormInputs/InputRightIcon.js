import React, { Component } from "react";
import { TextInput, Image, View } from "react-native";
import { Input } from "react-native-elements";

import { Colors } from "UIProps/Colors";
import InputValidations from "Helpers/InputValidations";
import {
  inputStyle,
  labelStyle,
  inputErrorStyle,
  inputContainerStyle,
} from "UIProps/Styles";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";
import photograph from "assets/img/photograph.svg";
import SvgUri from "react-native-svg-uri";

import InputIcon from "./InputIcon";
import CustomText from "../CustomText";
import Fonts from "UIProps/Fonts";
import Icons from "../Icons";
import { widthPercentageToDP } from "react-native-responsive-screen";
var FloatingLabel = require("react-native-floating-labels");

export default class InputRightIcon extends Component {
  state = {
    error: "",
    wantToEdit: undefined,
    text: "",
  };

  setText(text) {
    this.setState({ text, wantToEdit: true });
    InputValidations.validationUserName(text, (valid, error) => {
      if (this.state.error.length == 0 && !valid) HelperMethods.animateLayout();

      this.setState({ error });
      if (valid) {
        if (this.state.error.length > 0) HelperMethods.animateLayout();

        this.props.inputValueGetter(text);
      }
    });
  }

  render() {
    let {
      keyboardType,
      value,
      maxLength,
      style,
      placeholder,
      onSubmit,
    } = this.props;

    return (
      <>
        {/* <TextInput
        blurOnSubmit
        keyboardType={keyboardType}
          placeholder={placeholder}
          maxLength={maxLength || undefined}
          // value='dsadsdExercitation labore laboris laboris sunt pariatur laboris eiusmod culpa nostrud ipsum Lorem veniam.'
          style={{ marginTop: 30,paddingLeft:0, fontSize: 26, fontFamily:HelperMethods.isPlatformIos () ?  Fonts.semiBold : undefined,...style }}
          multiline
        >
          
        </TextInput>
        {this.state.error && this.state.text ? (
          <CustomText
            size={14}
            font={Fonts.regular}
            style={inputErrorStyle}
            text={this.state.error}
            color="red"
          />
        ) : null}
       */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#F5F6F7",
            fontSize: 15,
            borderRadius: 40,
            flex: 1,
          }}
        >
          <Input
            blurOnSubmit
            keyboardType={keyboardType}
            multiline
            placeholder={placeholder}
            maxLength={maxLength || undefined}
            inputStyle={{ fontSize: widthPercentageToDP(4.2) }}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            containerStyle={{
              flex: 1,
              height:45,
              borderWidth: 0,
              // padding:0
            }}
          />
          <SvgUri
            width={18}
            height={18}
            style={{ marginRight: 20 }}
            fill={"#000"}
            svgXmlData={photograph}
          />
        </View>
      </>
    );
  }
}
