import React, { Component } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import "Helpers/global";
import { Colors } from "UIProps/Colors";
import Icons from "AppLevelComponents/UI/Icons";

import Container from "AppLevelComponents/UI/Container";
import TGHeader from "TagMangoComponents/TGHeader";
import Fonts from "UIProps/Fonts";
import ThreeDotMenu from "AppLevelComponents/UI/ThreeDotMenu";
import { withNavigation } from "react-navigation";
import CreatorFanMenuTrigger from "TagMangoComponents/CreatorFanMenuTrigger";
import VideoShoutoutListItem from "TagMangoComponents/VideoShoutoutListItem";
import HelperMethods from "Helpers/Methods";
import TGLogicHelpers from "TagMangoComponents/TGLogicHelpers";
import CustomText from "AppLevelComponents/UI/CustomText";
import ReviewCreatorListItem from "TagMangoComponents/ReviewCreatorListItem";
import { widthPercentageToDP } from "react-native-responsive-screen";
import ContactListItem from "TagMangoComponents/ContactListItem";
import SingleSideShadow from "AppLevelComponents/UI/SingleSideShadow";
import { GiftedChat, Send } from "react-native-gifted-chat";
import TGBottomSheet from "TagMangoComponents/TGBottomSheet";
import PostAttachments from "TagMangoComponents/PostAttachments";

class Chat extends Component {
  constructor(props) {
    super(props);

    this.options = [{ text: this.state.show, img: "" }];
  }
  state = {
    show: "creator",
    messages: [],
    showAttachPopup:false,
    msg:''
  };
  triggerText() {
    HelperMethods.animateLayout();
    this.setState({ show: this.state.show == "creator" ? "fan" : "creator" });
  }

  renderSend = (props) => {
    this.sendProps = props;
    const { params } = this.props.navigation.state;
    if (params?.type == "sports") {
      sendBtnColor = Colors.colorSports;
    } else if (params?.type == "travel") {
      sendBtnColor = Colors.colorTravel;
    }

    if (this.state.blocked) {
      return null;
    }
    return (
      <TouchableOpacity style={{}} onPress={() => this.triggerOnSend(props)}>
        <Text
          style={{
            fontFamily: Fonts.medium,
            fontSize: 18,
            color: Colors.accent,
            alignSelf: "center",
          }}
        >
          SEND
        </Text>
      </TouchableOpacity>
    );
  };

  onInputEdit(msg) {
    if (this.timerHandle != null) {
      clearTimeout(this.timerHandle); // ***
      this.timerHandle = 0; // ***
    }

    // if (!this.state.isTyping) {
    //   this.emitTyping();
    // }

    this.setState({ msg, isTyping: true }, () => {});

    // this.timerHandle = setTimeout(() => {
    //   // ***
    //   this.setState({ isTyping: false });
    //   this.emitStopTyping(); // ***
    //   this.timerHandle = 0; // ***
    // }, 1400);
  }

  renderInputToolbar = (props) => {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            alignItems:this.state.msg.length > 26 ? "flex-end" : 'center',
            flex: 1,
            paddingTop: 15,
          }}
        >
          <Icons
            lib="Material"
            name="plus"
            color="#424242"
            size={35}
            style={{ marginLeft: -6 }}
            onPress={() => this.toggleAttach()}
          />
          <TextInput
            {...props}
            //   autoFocus
            multiline
            onChangeText={(msg) => this.onInputEdit(msg)}
            value={this.state.msg}
            //   onFocus={() => this.hideAttach(HelperMethods.isPlatformAndroid())}
            style={{
              fontSize: 18,
              // fontFamily: Fonts.medium,
              padding: 15,
              paddingVertical: 0,
              flex: 1,
            }}
            placeholder="Send message"
          />
        </View>
      </>
    );
  };

  renderSend = (props) => {
    return (
      <TouchableOpacity style={{}} onPress={() => this.triggerOnSend(props)}>
        <Text
          style={{
            fontFamily: Fonts.medium,
            fontSize: 18,
            top: HelperMethods.isPlatformIos() ? -3 : 0,
            color: Colors.accent,
          }}
        >
          SEND
        </Text>
      </TouchableOpacity>
    );
  };

  triggerOnSend(props, isImage, url) {
    if (this.state.loadingPrevMsg) {
      let alrt = "Please wait, loading previous messages";
      HelperMethods.isPlatformAndroid()
        ? HelperMethods.snackbar(alrt)
        : alert(alrt);
      return;
    }

    // this.hideAttach(true);

    if (isImage) {
      props.onSend({ url }, true);
    } else if (this.state.msg) {
      props.onSend({ text: this.state.msg }, true);
      this.setState({ msg: "" });
    }
  }

  onSend(messages = []) {
    this.giftedChatRef.scrollToBottom();
    if (messages[0].text && messages[0].text.trim().length == 0) {
      return;
    }
    if (messages[0].text) {
      messages[0].text = messages[0].text.trim();
    }
    HelperMethods.animateLayout();
    this.setState(
      (previousState) => ({
        messages: GiftedChat.append(previousState.messages, messages[0]),
      }),
      () => {
        const { params } = this.props.navigation.state || {};
        if (messages[0].url) {
          // this.sendMsg(myUserId, clientId, "", messages[0].url, "image");
        } else {
          // this.sendMsg(myUserId, params?.clientId, messages[0].text.trim());
        }
      }
    );
  }

  toggleAttach() {
    Keyboard.dismiss();
    HelperMethods.animateLayout();
    // this.setState({ showAttachPopup: !this.state.showAttachPopup });
    this.rfSheetAttachs.open()

  }

  renderMsgBubble = (text) => {
    bgColor = text.position == "left" ? "#F5F5F5" : "#FDF2E7";
    if (text.currentMessage?.url?.length > 0) { //images
      if (text.position == "left") {
        return (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              marginLeft: 10,
            }}
          >
            <Image
              style={{
                borderRadius: 60,
                width: 40,
                height: 40,
                position: "absolute",
                zIndex: 100,
              }}
              source={{ uri: text.currentMessage.profile_picture }}
            />
            <View
              style={{
                padding: 3,
                marginVertical: 2,
                borderRadius: 10,
                backgroundColor: bgColor,
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  color: tintColor,
                  fontFamily: Fonts.medium,
                  paddingLeft: 5,
                }}
              >
                {text.currentMessage.first_name}
              </Text>

              <Image
                source={{ uri: text.currentMessage?.url }}
                style={{ width: 200, borderRadius: 10, height: 180 }}
                resizeMode="cover"
              />
            </View>
          </View>
        );
      } else {
        return (
          <View
            style={{
              padding: 3,
              marginVertical: 2,
              borderRadius: 10,
              backgroundColor: bgColor,
            }}
          >
            <Image
              source={{ uri: text.currentMessage?.url }}
              style={{ width: 200, borderRadius: 10, height: 180 }}
              resizeMode="cover"
            />
          </View>
        );
      }
    }

    if (text.position == "left") {
      return (
        <View
          style={{ padding: 13, borderRadius: 10, backgroundColor: bgColor }}
        >
          <Text
            style={{
              color: "#616161",
              fontSize: 16,
              fontFamily: Fonts.regular,
            }}
          >
            {text.currentMessage.text}
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CustomText text="Sayantan" size={14} color="#BDBDBD" />
            <CustomText
              text={"\u2B24"}
              style={{ paddingHorizontal: 5 }}
              size={4}
              color="#BDBDBD"
            />
            <CustomText text="9 Jun 2020" size={14} color="#BDBDBD" />
          </View>
        </View>
      );
    } else {
      return (
        <View
          style={{
            padding: 13,
            marginHorizontal: 13,
            borderRadius: 10,
            backgroundColor: bgColor,
            marginTop:15

          }}
        >
          <Text
            style={{
              color: "#616161",
              fontSize: 16,
              fontFamily: Fonts.regular,
            }}
          >
            {text.currentMessage.text}
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CustomText text="Sent" size={14} color="#BDBDBD" />
            <CustomText
              text={"\u2B24"}
              style={{ paddingHorizontal: 5 }}
              size={4}
              color="#BDBDBD"
            />
            <CustomText text="9 Jun 2020" size={14} color="#BDBDBD" />
          </View>
        </View>
      );
    }
  };

  componentDidMount(){
  }

  render() {
    return (
      <>
        <GiftedChat
          renderAvatar={null}
          ref={(ref) => (this.giftedChatRef = ref)}
          renderComposer={this.renderInputToolbar}
          renderSend={this.renderSend}
          renderBubble={this.renderMsgBubble}
          isAnimated
          extraData={this.state}
          style={{ zIndex: 1 }}
          containerStyle={styles.containerStyle}
          messages={this.state.messages}
          keyboardShouldPersistTaps="always"
          onSend={(messages) => this.onSend(messages)}
          user={
            {
              // _id: MobxStore.userObj.user_id
            }
          }
          //   renderBubble={this.msgBubble}
          //   bottomOffset={this.isIphoneXorAbove() ? 23 : -9.1}
          //   renderSystemMessage={this.renderSystemMsg}
          renderFooter={this.renderFooter}
          //   renderLoading={this.renderLoader}
        />

          <TGBottomSheet
            height={90}
            hideSave
            onRef={(ref) => (this.rfSheetAttachs = ref)}
          >
            
            <PostAttachments />
          </TGBottomSheet>
      </>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "#fff",
    marginHorizontal: -global.contentPadding,
    paddingHorizontal: global.contentPadding,
    borderTopWidth: 0,
  },
});

export default withNavigation(Chat);
