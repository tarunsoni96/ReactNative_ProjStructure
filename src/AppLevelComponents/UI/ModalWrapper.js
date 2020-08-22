import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import CustomText from 'AppLevelComponents/UI/CustomText'
import {Colors} from "UIProps/Colors";
import Fonts from "UIProps/Fonts";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Modal from 'react-native-modal';

export default class ModalWrapper extends Component {

    render() {
        const {
            style,
            visible,
            closeModal,
            posPress,
          } = this.props;
        return (
            <Modal
        animationIn='slideInUp'
        swipeDirection="down"
          
          animationInTiming={500}
        isVisible={visible}
        onSwipeComplete={()=>closeModal()}
        onBackButtonPress={() => {
          closeModal();
        }}

        onBackdropPress={() => closeModal()}
      >
            <View style={[{},style]} >
            
                {this.props.children}
            </View>
          </Modal>
        )
    }
}
