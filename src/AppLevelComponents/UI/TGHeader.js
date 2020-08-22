import React, { Component } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import Container from "AppLevelComponents/UI/Container";
import NoHorizontalMarginView from "AppLevelComponents/UI/NoHorizontalMarginView";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import CustomText from "AppLevelComponents/UI/CustomText";
import Fonts from "UIProps/Fonts";
import SvgButton from "AppLevelComponents/UI/SvgButton";
import backBtn from "assets/svgIcons/back.svg";

import { withNavigation } from "react-navigation";
import Icons from "AppLevelComponents/UI/Icons";

class TGHeader extends Component {
  render() {
    let commonVal = widthPercentageToDP(80);
    const {
      x,
      hideBG,
      back,
      hideBack,
      hideTitle,
      subtitleAppender,
      title,
      subTitle,
      marginBottom,
      onBack
    } = this.props;
    return (
      <NoHorizontalMarginView verticalAlso>
        <View
          style={{
            marginBottom: hideBG ? widthPercentageToDP(8)  :  marginBottom || widthPercentageToDP(63),
          }}
        >
          <ImageBackground
            style={{
              width: "100%",
              position: hideBG ? undefined : "absolute",
              height: hideBG ? undefined : commonVal,
              top: 0,
              left: 0,
              paddingVertical: 15,
              paddingHorizontal: 14,
            }}
            source={!hideBG && require("assets/img/headerBG.png")}
          >
        
            <View style={styles.headerTop}>
              {!hideBack &&
                (x ? (
                  <Icons
                    lib="AntDesign"
                    color="#616161"
                    // style={{marginLeft:-4}}
                    onPress={() => this.props.navigation.pop()}
                    size={25}
                    name={"close"}
                  />
                ) : (
                  <SvgButton
                    svg={backBtn}
                    size={20}
                    onPress={() => onBack ? onBack() : this.props.navigation.pop()}
                  />
                ))}

              {
                this.props.children //rightView
              }
            </View>

            {!hideTitle && (
              <CustomText
                // font={Fonts.semiBold}
                text={title || "Header Title"}
                style={{
                  marginTop: 20,
                  marginLeft:2,
                  fontFamily:Fonts.semiBold,
                  color: "#212121",
                  fontSize: widthPercentageToDP(7),
                }}
              />
            )}
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {subTitle && (
                <CustomText
                  font={Fonts.regular}
                  text={subTitle || "Subtitle here"}
                  style={{
                    marginRight: subtitleAppender ? 8 : 14,
                    marginTop: 13,
                    color: "#9E9E9E",
                    marginLeft:2,

                    lineHeight: 23,
                    fontSize: widthPercentageToDP(4),
                  }}
                />
              )}

              {typeof subtitleAppender == 'string' ? (
                <CustomText
                  font={Fonts.regular}
                  text={subtitleAppender}
                  style={{
                    // marginHorizontal: 14,

                    marginTop: 10,
                    color: "#424242",
                    fontSize: widthPercentageToDP(4),
                  }}
                />
              ) 
              :
              subtitleAppender
              }
            </View>

           
          </ImageBackground>

          
        </View>
        
      </NoHorizontalMarginView>
    );
  }
}

const styles = StyleSheet.create({
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default withNavigation(TGHeader);
