import React, { Component } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import Container from "AppLevelComponents/UI/Container";
import NoHorizontalMarginView from "AppLevelComponents/UI/NoHorizontalMarginView";
import { widthPercentageToDP } from "react-native-responsive-screen";
import CustomText from "AppLevelComponents/UI/CustomText";
import Fonts from "UIProps/Fonts";
import SvgButton from "AppLevelComponents/UI/SvgButton";
import LinearGradient from "react-native-linear-gradient";

export default class ComponentDesigning extends Component {
  // currently designing header
  render() {
    let width = 30;
    return (
      <Container>
        <View style={{ height: 300 }}>
          <View
            style={{
              backgroundColor: "#F5F5F5",
              width: 20,
              flex: 1,
              borderRadius: 10,
            }}
          />
          <View style={{ paddingVertical: 5 }} />
          <LinearGradient
            useAngle={true}
            angle={180}
            angleCenter={{ x: 0.25, y: 0.25 }}
            colors={["#FBC320", "#f18926"]}
            style={styles.coloredBar}
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  coloredBar: {
    width: 20,
    flex: 1,
    borderRadius: 10,
  },
});
