import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import { Colors } from "UIProps/Colors";
import InputValidations from "Helpers/InputValidations";
import {
  inputStyle,
  inputErrorStyle,
  labelStyle,
  
  inputContainerStyle,
} from "UIProps/Styles";
import InputIcon from "./InputIcon";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";
import CustomText from "../CustomText";
import Fonts from "UIProps/Fonts";

var FloatingLabel = require("react-native-floating-labels");

export default class MobileNumber extends Component {
  state = {
    error: "",
    wantToEdit: undefined,
    text: "",
  };

  setText(text) {
    if (this.props.inputValueGetter == undefined) {
      alert("Please provide input value getter function to this component");
      return;
    }

    this.setState({ text, wantToEdit: true });
    InputValidations.validatePhone(text, (valid, error) => {
      if (this.state.error.length == 0 && !valid) HelperMethods.animateLayout();

      this.setState({ error });
      if (valid) {
        if (this.state.error.length > 0) HelperMethods.animateLayout();

        this.props.inputValueGetter(text);
      }
    });
  }

  render() {
    let { label,err,forceErr, value, style,onSubmit,limit } = this.props;
    return (
      <>
        <FloatingLabel
          labelStyle={labelStyle}
          inputStyle={[inputStyle,]}
          maxLength={limit}
          onChangeText={(text) => this.setText(text)}
          value={this.state.wantToEdit ? this.state.text : value}
          returnKeyType="done"
          onSubmitEditing={onSubmit}
          keyboardType="numeric"
          style={[inputContainerStyle, style]}
        >
          {label || "Phone number"}
        </FloatingLabel>

        { forceErr ? (
          <CustomText
            size={14}
            font={Fonts.regular}
            style={inputErrorStyle}
            text={forceErr}
            color="red"
          />) : null 
        }

        {this.state.error && this.state.text ? (
          <CustomText
            size={14}
            font={Fonts.regular}
            style={inputErrorStyle}
            text={err || this.state.error}
            color="red"
          />
        ) : null}
      </>
    );
  }
}

