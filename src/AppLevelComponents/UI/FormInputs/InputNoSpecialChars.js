import React, { Component } from "react";
import { Text, View } from "react-native";
import { Input } from "react-native-elements";
import { Colors } from "UIProps/Colors";
import InputValidations from "Helpers/InputValidations";
import {
  inputsError,
  inputStyle,
  labelStyle,
  inputContainerStyle
} from "UIProps/Styles";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";

import InputIcon from "./InputIcon";

export default class InputNoSpecialChars extends Component {
  state = {
    error: "",
    wantToEdit:undefined,
    text: ""
  };

  setText(text) {
    this.setState({ text,wantToEdit:true });
    InputValidations.validationNoSpecialChars(text, (valid, error) => {
      if (this.state.error.length == 0 && !valid) HelperMethods.animateLayout();

      this.setState({ error });
      if (valid) {
        if (this.state.error.length > 0) HelperMethods.animateLayout();

        this.props?.inputValueGetter(text);
      }
    });
  }


  render() {
    let { autoFocus,value,label, placeholder } = this.props;
    
    return (
      <Input
        label={label || 'Label'}
        labelStyle={labelStyle}
        autoFocus={autoFocus || false}
        inputContainerStyle={inputContainerStyle}
        onChangeText={text => this.setText(text)}
        placeholder={placeholder || 'Placeholder'}
        inputStyle={inputStyle}
        value={this.state.wantToEdit ? this.state.text : value}
        placeholderTextColor={Colors.inputs_placeholders}
        errorStyle={inputsError}
        errorMessage={this.state.error}
        blurOnSubmit={true}
        
        {...this.props}

      />
    );
  }
}
