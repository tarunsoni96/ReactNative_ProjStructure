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

@observer
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isApiCall: false,
    };
  }

  getData = () => {};

  onRefresh = () => {
  };

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
      <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Shopping',{hotel:item}) }>

      <Card containerStyle={{ marginTop: 20,marginBottom:5,borderRadius:10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <CustomText text={item.title} />
          <Icons lib="AntDesign" color={Colors.textNormal} name="right" />
        </View>
      </Card>
      </TouchableWithoutFeedback>

    );
  };

  render() {
    return (
      <Container
        onBackPress={this.onBackPress}
        showHeader={false}
      >
        <SubHeader title={"Awesome App"} />
        <NetworkAwareContent
          data={this.state.data}
          apiFunc={() => this.fetchHotels()}
          isApiCall={this.state.isApiCall}
        >
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, i) => i}
          />
        </NetworkAwareContent>
      </Container>
    );
  }
}

export default Dashboard;
