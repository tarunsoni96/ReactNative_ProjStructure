import React, { Component } from "react";
import { Text, View } from "react-native";
import { Input } from "react-native-elements";
import {Colors} from "UIProps/Colors";
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

export default class Email extends Component {
  state = {
    error: "",
wantToEdit:undefined,
    text: ""
  };

  setText(text) {
    if(this.props.inputValueGetter == undefined){
      alert('Please provide input value getter function to this component')
      return
    }
    this.setState({ text,wantToEdit:true });
    InputValidations.validateEmail(text, (valid, error) => {
      if (this.state.error.length == 0 && !valid) HelperMethods.animateLayout();
HelperMethods.animateLayout()
      this.setState({ error });
      if (valid) {
        if (this.state.error.length > 0) HelperMethods.animateLayout();

        this.props.inputValueGetter(text);
      } else {
        this.props.inputValueGetter(undefined); //set undefined for showing errors alert to user in this class parent
      }
    });
  }

  render() {
    let { label, value, style,onSubmit } = this.props;
   
   
    return (
      <>
        <FloatingLabel
          labelStyle={labelStyle}
          inputStyle={inputStyle}
          onChangeText={(text) => this.setText(text)}
          value={this.state.wantToEdit ? this.state.text : value}
          returnKeyType="done"
          onSubmitEditing={onSubmit}
          // keyboardType="numeric"
          style={[inputContainerStyle, style]}
        >
          {label || "Email address"}
        </FloatingLabel>
        {this.state.error && this.state.text ? (
          <CustomText
            size={14}
            font={Fonts.regular}
            text={this.state.error}
            style={inputErrorStyle}

            color="red"
          />
        ) : null}
      </>
    );
  }
}
