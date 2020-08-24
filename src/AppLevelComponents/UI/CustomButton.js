import React, { Component } from "react";
import { Keyboard, Text, TouchableWithoutFeedback } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import CustomText from "AppLevelComponents/UI/CustomText";
import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import { Button } from "react-native-elements";
import "Helpers/global";

import HelperMethods from "Helpers/Methods";
import { Colors } from "UIProps/Colors";
import Fonts from "UIProps/Fonts";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Loader from "./Loader";

export default class CustomButton extends Component {
  state = {
    animation: "",
  };
  onPress() {
    let { onPress } = this.props;
    if (!onPress) {
      alert("Provide onpress prop");
      return;
    }
    onPress();
    Keyboard.dismiss();
  }

  componentWillReceiveProps(nextProps) {
    const { isApiCall } = nextProps;
    this.setState({ animation: isApiCall == "failed" ? "shake" : "" });
  }

  renderGradient() {
    let { text, containerStyle, gradStyle, half, isApiCall ,fixed} = this.props;
    return (
      <LinearGradient
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          right: 16,
          height: 150,
          justifyContent: "flex-end",
          
        }}
        colors={["rgba(255, 255, 255, 0.1)", "#fff"]}
        // pointerEvents={"none"}
      >
          <TouchableWithoutFeedback onPress={() => this.onPress()}>
        <Animatable.View
          animation={this.state.animation}
          useNativeDriver={true}
          duration={600}
          style={[
            {
              width: "100%",
              marginVertical:10,
              ...containerStyle,
            },
            half && { width: widthPercentageToDP(38), alignSelf: "flex-end" },
          ]}
        >
            <LinearGradient
              useAngle={true}
              angle={180}
              angleCenter={{ x: 0.25, y: 0.25 }}
              colors={["#FBC320", "#f18926"]}
              style={[
                styles.btn,

                {
                  
                  padding: widthPercentageToDP(4),
                  alignItems: "center",
                  ...gradStyle,
                },
              ]}
            >
              {isApiCall ? (
                <Loader color={"#fff"} />
              ) : (
                <CustomText
                  font={Fonts.medium}
                  text={text || "Button"}
                  letterSpacing={0.5}
                  size={wp(4.5)}
                  color="#fff"
                  marginBottom={heightPercentageToDP(-0.5)}
                />
              )}
            </LinearGradient>
        </Animatable.View>
          </TouchableWithoutFeedback>
      </LinearGradient>
    );
  }

  renderNormal() {
    let { text, containerStyle, gradStyle, half, isApiCall } = this.props;
    return (
      <Animatable.View
        animation={this.state.animation}
        useNativeDriver={true}
        duration={600}
        style={[
          {
            width: "100%",
            ...containerStyle,
          },
          half && { width: widthPercentageToDP(38), alignSelf: "flex-end" },
        ]}
      >
        <TouchableWithoutFeedback onPress={() => this.onPress()}>
          <LinearGradient
            useAngle={true}
            angle={180}
            angleCenter={{ x: 0.25, y: 0.25 }}
            colors={["#FBC320", "#f18926"]}
            style={[
              styles.btn,
              {
                padding: widthPercentageToDP(4),
                alignItems: "center",
                ...gradStyle,
              },
            ]}
          >
            {isApiCall ? (
              <Loader  color={"#fff"} />
            ) : (
              <CustomText
                font={Fonts.medium}
                text={text || "Button"}
                letterSpacing={0.5}
                size={wp(4.5)}
                color="#fff"
                marginBottom={heightPercentageToDP(-0.5)}
              />
            )}
          </LinearGradient>
        </TouchableWithoutFeedback>
      </Animatable.View>
    );
  }
  render() {
    let { showGradient } = this.props;
    return <>{showGradient ? this.renderGradient() : this.renderNormal()}</>;
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  button: {
    height: "54rem",
    justifyContent: "center",
    backgroundColor: Colors.accent,
    borderRadius: 4,
  },

  btn: {
  },
});
