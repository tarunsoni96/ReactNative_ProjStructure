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
import Bottomsheet from "./Bottomsheet";
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
      let {profilePic} = this.state
      let {size,pic,style,showCameraIcon,canNavigateToProfile} = this.props
    return (
      <TouchableOpacity style={{alignItems:'center'}} onPress={ ()=> this.tapFunc() }>
        <View style={styles.circle}>
          <Image style={{width:100,height:100,borderRadius:100}} source={{uri:profilePic == undefined ? 'https://chapters.theiia.org/central-mississippi/About/ChapterOfficers/person-placeholder.jpg' : profilePic }} />
        </View>
        <CustomText text="Upload photo" style={{ marginTop: 10 }} />

      {profilePic && 
        <TouchableOpacity onPress={this.removePhoto}  style={{position:'absolute',top:10,backgroundColor:'#000',right:0,borderRadius:100/4,height:25}} >
          <Icons lib='Material' name='close' size={23} color='red' />
        </TouchableOpacity> 
      }
      </TouchableOpacity>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,


  container: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: Colors.dark,
    
    alignItems: "center",
    justifyContent: "center"
  },

  circle: {
    borderRadius: 100 / 2,
    backgroundColor: "#F7FAFD",
    borderColor: Colors.blue,borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  
});
export default  withNavigation(ProfilePic)