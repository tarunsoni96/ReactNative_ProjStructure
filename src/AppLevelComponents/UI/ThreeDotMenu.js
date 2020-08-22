import React, { Component } from "react";
import { Image, View, StyleSheet } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import CustomText from "./CustomText";
import Icons from "./Icons";
import SvgButton from "./SvgButton";
export default class ThreeDotMenu extends Component {
  render() {
    const { optionsArr,onPress,children } = this.props;
    return (
      <Menu>
        <MenuTrigger>
        {children ? 
        children
        :
          <Icons
            lib="Entypo"
            name="dots-three-vertical"
            size={20}
            color="#9E9E9E"
          />
        }
        </MenuTrigger>
        <MenuOptions>
          {optionsArr?.map((item, index) => {
            return (
              <MenuOption
                style={styles.optionStyle}
                onSelect={() => onPress(item.text)}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                {item.img ?
                  <Image
                    source={item.img || require("assets/img/copylink.png")}
                    style={styles.img}
                    resizeMode="contain"
                  />

                  : null
                }
                  <View style={{ paddingHorizontal: 6 }} />
                  <CustomText text={item.text.charAt(0).toUpperCase() + item.text.slice(1)} size={15} color="#424242" />
                </View>
              </MenuOption>
            );
          })}
        </MenuOptions>
      </Menu>
    );
  }
}

const styles = StyleSheet.create({
  optionStyle: {
    padding: 10,
    color: "red",
  },

  img: {
    width: 15,
    height: 15,
    marginLeft: 6,
  },
});
