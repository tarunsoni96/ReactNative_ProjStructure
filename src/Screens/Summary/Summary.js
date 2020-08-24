import React, { Component } from "react";
import { Text, View } from "react-native";
import CustomText from "AppLevelComponents/UI/CustomText";
import Container from "AppLevelComponents/UI/Container";
import Fonts from "UIProps/Fonts";
import NetworkAwareContent from "AppLevelComponents/UI/NetworkAwareContent";
import HelperMethods from "../../Helpers/Methods";
import SubHeader from "../../AppLevelComponents/UI/SubHeader";
import MobxStore from "StorageHelpers/MobxStore";
import { observer } from "mobx-react";

import Constants from "Helpers/Constants";
import { apiFuncGet } from "ServiceProviders/ApiCaller";
import { FlatList } from "react-native";
import { Card } from "react-native-elements";
import Icons from "AppLevelComponents/UI/Icons";
import { Colors } from "UIProps/Colors";
import { TouchableWithoutFeedback } from "react-native";
import { compose } from "redux";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import Line from "Helpers/line";
import { SafeAreaView } from "react-native";
import CustomButton from "AppLevelComponents/UI/CustomButton";

@observer
class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isApiCall: false,
    };
  }

  getData = () => {};

  onRefresh = () => {};

  onBackPress = () => {
    HelperMethods.appExitPrompter();
  };

  componentDidMount() {
    this.fetchHotels();
  }

  fetchHotels() {
    this.setState({ isApiCall: true });
    apiFuncGet("hotels")
      .then((resp) => {
        this.setState({ isApiCall: false, data: resp });
      })
      .catch((err) => {
        this.setState({ isApiCall: "failed" });
      });
  }

  renderItem = ({ item, i }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          this.props.navigation.navigate("Shopping", { hotel: item })
        }
      >
        <Card containerStyle={{ marginTop: 20, borderRadius: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CustomText text={item.title} />
            <Icons lib="AntDesign" color={Colors.textNormal} name="right" />
          </View>
        </Card>
      </TouchableWithoutFeedback>
    );
  };

  renderItem = ({ item, i }) => {
    return (
      <Card containerStyle={{ marginTop: 20,marginBottom:7, borderRadius: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CustomText style={{ flex: 1 }} text={item.name} />

          <CustomText style={{}} text={`${item.qty} x $100`} />
        </View>
      </Card>
    );
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container headerTitle="Order summary"  >
          <FlatList
            data={this.props.selectedFoodItems}
            renderItem={this.renderItem}
            keyExtractor={(item, i) => i}
          />
          <Line />
          <Card containerStyle={{marginBottom:4}} >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <CustomText style={{ flex: 1 }} text={"Total"} />
              <CustomText text={"$300"} />
            </View>
          </Card>
        </Container>

        <CustomButton text="Checkout" />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedFoodItems: state.reducer.selectedFoodItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavigation
)(Summary);
