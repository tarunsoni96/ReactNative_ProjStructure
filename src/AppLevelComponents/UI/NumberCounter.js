import React, { Component } from "react";
import { StyleSheet, TouchableWithoutFeedback,TouchableOpacity, View } from "react-native";
import "Helpers/global";
import ProfilePic from "AppLevelComponents/UI/ProfilePic";
import CustomText from "AppLevelComponents/UI/CustomText";
import Fonts from "UIProps/Fonts";
import Line from "Helpers/line";
import { withNavigation } from "react-navigation";
import Icons from "AppLevelComponents/UI/Icons";
import { TextInput } from "react-native";
import { Colors } from "UIProps/Colors";
class NumberCounter extends Component {
  render() {
    const { navigate,quant, title, subtitle,increaseDecrease } = this.props;
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>increaseDecrease('decrease')} style={styles.circle}>
                <Icons lib='AntDesign' name='minus' size={14} color='#BDBDBD' />
            </TouchableOpacity>
                <CustomText text={quant} color={Colors.textNormal} style={{paddingHorizontal:13}} size={16} />
            <TouchableOpacity onPress={()=>increaseDecrease('increase')} style={styles.circle}>
                <Icons lib='AntDesign' name='plus' size={14} color='#BDBDBD' />
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    // alignSelf:'flex-end',
    flexDirection:'row',
    alignItems:'center',
  },

  row2: {
    marginBottom: 11,
    flexDirection: "row",
  },

  circle: {
      width:  24,
      height: 24,
      borderRadius: 100 / 2,
      alignItems: "center",
      borderColor:'#BDBDBD',
      borderWidth:2.3,
      justifyContent: "center"
    },
});
export default withNavigation(NumberCounter);
