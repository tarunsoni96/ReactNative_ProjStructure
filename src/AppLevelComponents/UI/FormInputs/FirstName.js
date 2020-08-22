import React, { Component } from "react";
import { Text, View } from "react-native";
import { Input } from "react-native-elements";
import { Colors } from "UIProps/Colors";
import InputValidations from "Helpers/InputValidations";
import {
  inputStyle,
  labelStyle,
  inputErrorStyle,
  inputContainerStyle
} from "UIProps/Styles";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";

import InputIcon from "./InputIcon";
import CustomText from "../CustomText";
import Fonts from "UIProps/Fonts";
var FloatingLabel = require("react-native-floating-labels");

export default class FirstName extends Component {
  state = {
    error: "",
    wantToEdit:undefined,
    text: ""
  };

  setText(text) {
    this.setState({ text,wantToEdit:true });
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
    let { label, value, style,onSubmit,disabled } = this.props;
    
    return (
     
      <>
        <FloatingLabel
        editable={!disabled}
          labelStyle={labelStyle}
          inputStyle={inputStyle}
          onChangeText={(text) => this.setText(text)}
          value={this.state.wantToEdit ? this.state.text : value}
          returnKeyType="done"
          onSubmitEditing={onSubmit}
          // keyboardType="numeric"
          style={[inputContainerStyle, style]}
        >
          {label || "Name"}
        </FloatingLabel>
        {this.state.error && this.state.text ? (
          <CustomText
            size={14}
            font={Fonts.regular}
            style={inputErrorStyle}

            text={this.state.error}
            color="red"
          />
        ) : null}
      </>
    );
  }
}
