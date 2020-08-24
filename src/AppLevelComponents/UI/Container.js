import React, { Component } from "react";
import {
  SafeAreaView,
  RefreshControl,
  ScrollView,
  View,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";
import "Helpers/global";
import EStyleSheet from "react-native-extended-stylesheet";
import { Colors } from "UIProps/Colors";
import BackHandlerSingleton from "ServiceProviders/BackHandlerSingleton";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LinearGradient from "react-native-linear-gradient";
import Header from "./Header";

export default class Container extends Component {
  renderForIOS() {
    let {
      refreshingData,
      refSetter,
      scrollEnabled,
      safeAreaColor,
      onRefresh,
      showHeader = true,
      contentStyle,
      headerTitle,
      extraScrollheight,
      showGradient,
    } = this.props;
    return (
      <>
        <SafeAreaView
          style={{ flex: 0, backgroundColor: safeAreaColor || "#fff" }}
        />
        <SafeAreaView style={{ flex: 1, backgroundColor: safeAreaColor }}>
          <StatusBar translucent={true} barStyle="dark-content" />
          {showHeader === false ? null : (
            <View style={{ padding: global.contentPadding }}>
              <Header title={headerTitle} />
            </View>
          )}
          <KeyboardAwareScrollView
            behavior="padding"
            ref={(ref) => {
              refSetter = ref;
            }}
            refreshControl={
              <RefreshControl
                refreshing={refreshingData}
                onRefresh={onRefresh || undefined}
              />
            }
            nestedScrollEnabled
            extraScrollHeight={extraScrollheight || undefined}
            scrollEnabled={scrollEnabled == undefined ? true : scrollEnabled}
            keyboardShouldPersistTaps="always"
            contentContainerStyle={[styles.contentFixed, { ...contentStyle }]}
            behavior="padding"
          >
            <View
              style={{
                marginBottom: showGradient ? widthPercentageToDP(30) : 0,
                flex: 1,
              }}
            >
              {this.props.children}
            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </>
    );
  }

  renderForAndroid() {
    let {
      refreshingData,
      onRefresh,
      scrollEnabled,
      contentStyle,
      showHeader = true,
      extraScrollheight,
      showGradient,
      headerTitle,
    } = this.props;

    return (
      <>
        <StatusBar backgroundColor="#fff" barStyle={"dark-content"} />

        {showHeader === false ? null : (
          <View style={{ padding: global.contentPadding }}>
            <Header title={headerTitle} />
          </View>
        )}
        <KeyboardAwareScrollView
          behavior="padding"
          refreshControl={
            onRefresh && (
              <RefreshControl
                refreshing={refreshingData}
                onRefresh={onRefresh || undefined}
              />
            )
          }
          extraScrollHeight={extraScrollheight || undefined}
          scrollEnabled={scrollEnabled == undefined ? true : scrollEnabled}
          keyboardShouldPersistTaps="handled"
          nestedScrollEnabled
          contentContainerStyle={[styles.contentFixed, { ...contentStyle }]}
        >
          <View
            style={{
              marginBottom: showGradient ? widthPercentageToDP(30) : 0,
              flex: 1,
            }}
          >
            {this.props.children}
          </View>
        </KeyboardAwareScrollView>
        {/* <LinearGradient
    style={{position:'absolute', bottom:0, width:'100%', height:100}}
    colors={['rgba(255, 255, 255, 0.1)', '#fff']}
    pointerEvents={'none'}
  /> */}
      </>
    );
  }

  render() {
    return (
      <>
        {<BackHandlerSingleton onBackPress={this.props.onBackPress} />}
        {HelperMethods.isPlatformAndroid()
          ? this.renderForAndroid()
          : this.renderForIOS()}
      </>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  container: {
    width: "100%",
  },

  contentFixed: {
    flexGrow: 1,
    padding: global.contentPadding,
  },

  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: "0rem",
    width: "100%",
  },
});
