import React, { Component } from "react";
import { TextInput, View } from "react-native";
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

import InputIcon from "./InputIcon";
import CustomText from "../CustomText";
import Fonts from "UIProps/Fonts";
var FloatingLabel = require("react-native-floating-labels");

export default class HeaderInput extends Component {
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
      if(this.props.validate === false){

        this.props.inputValueGetter(text);
        return
      }
      if (valid) {
        if (this.state.error.length > 0) HelperMethods.animateLayout();

        this.props.inputValueGetter(text);
      }
    });
  }

  render() {
    let {
      keyboardType,
      customErr,
      value,
      maxLength,
      style,
      autoFocus,
      placeholder,
      onSubmit,
    } = this.props;

    return (
      <>
        <TextInput
          blurOnSubmit
          returnKeyType="done"
          autoFocus={autoFocus || false}
          onChangeText={(text) => this.setText(text)}
          keyboardType={keyboardType}
          placeholder={placeholder}
          maxLength={maxLength || undefined}
          // value='dsadsdExercitation labore laboris laboris sunt pariatur laboris eiusmod culpa nostrud ipsum Lorem veniam.'
          style={{
            marginTop: 30,
            paddingLeft: 0,
            fontSize: 26,
            fontFamily: HelperMethods.isPlatformIos()
              ? Fonts.semiBold
              : undefined,
            ...style,
          }}
          multiline
        />
        {this.state.error && this.state.text ? (
          <CustomText
            size={14}
            font={Fonts.regular}
            style={inputErrorStyle}
            text={customErr || this.state.error}
            color="red"
          />
        ) : null}
      </>
    );
  }
}
