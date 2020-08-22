import "Helpers/global";
import { StyleSheet } from "react-native";
import { Colors } from "UIProps/Colors";
import Fonts from "UIProps/Fonts";

export const inputStyle = {
  borderWidth: 0,
  paddingLeft: 0,
  paddingVertical: 10,
  fontSize: 19,
  top: 5,
  // lineHeight: 20,
  // fontFamily: Fonts.medium,
};

export let labelStyle = {
  color: "#9E9E9E",
  fontFamily: Fonts.medium,
  paddingLeft: 0,
};

export let inputErrorStyle = {
  fontFamily:Fonts.regular,
  marginTop:-13,
};


export const inputContainerStyle = {
  borderBottomWidth: 1,
  marginLeft: 0,
  top: 10,
  marginBottom:30,
  lineHeight: 10,
  borderColor: "#BDBDBD",
};

export const cardStyle = {
  backgroundColor: Colors.noticeMsgBox,
  alignItems: "flex-start",
  margin: 0,
  borderRadius: 5,
  marginVertical: 10,
};
export const personaContainer = {
  flex: 1,
  width: "100%",
  backgroundColor: "#f7f7f9",
};

export const containerStyle = {
  flex: 1,
  backgroundColor: "#000",
};
