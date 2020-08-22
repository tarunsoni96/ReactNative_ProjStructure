import React, { Component, Fragment } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";
import {TakePhoto} from 'ServiceProviders/TakePhoto'

import CustomText from "AppLevelComponents/UI/CustomText";
import AntDesign from 'react-native-vector-icons/AntDesign'
import {camera } from "UIProps/Colors";
import { Transition } from "react-navigation-fluid-transitions";

import EStyleSheet from "react-native-extended-stylesheet";
import {Colors} from "UIProps/Colors";
import { withNavigation } from "react-navigation";
import Icons from "./Icons";

let valObj = {
  image: ""
};

let currentContext 
class ProfilePic extends Component {
  state = {
    profilePic: undefined
  };

  componentWillReceiveProps(nextProps){
      let {pic} = nextProps
      this.setState({profilePic:pic})
  }

  removePhoto = () => {
    HelperMethods.animateLayout()
    this.setState({profilePic:undefined})
  }
  
  navigateProfile(){
    this.props.navigation.navigate('Profile')
    }

    tapFunc(){
      TakePhoto((resp) => {
        HelperMethods.animateLayout()
        this.setState({profilePic:resp.uri})
      })
    }

  render() {
      let {showCam,pic,size,style} = this.props
    return (
      <View>
      <Image
        source={pic?.uri ? pic  : require("assets/img/avatar.png")}
        resizeMode="cover"
        style={{
          borderWidth: 2,
          borderColor: "#EBEDF2",
          borderRadius: 100,
          width:  size || 100,
          height: size || 100,

          ...style
        }}
      />
      {showCam && 
      <View style={[{ position: "absolute", bottom: 0, left: 0 }]}>
        <Image
          source={require("assets/img/avatarCam.png")}
          resizeMode="cover"
          style={{ borderRadius: 40, width: 30, height: 30 }}
        />
      </View>
      }
    </View>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  circle: {
    borderRadius: 100 / 2,
    backgroundColor: "#F7FAFD",
    alignItems: "center",
    justifyContent: "center",
    alignSelf:'flex-start',
  },
  
});
export default  withNavigation(ProfilePic)