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
import { compose } from "redux";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { TouchableWithoutFeedback } from "react-native";

@observer
class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isApiCall: false,
      showFilter: true,
      showingFilter:'All',
    };
  }
  componentDidMount() {
    this.fetchFilters();
  }

  getItems(item) {
    this.toggleFilter();
    this.setState({showingFilter:item.name})
    this.props.updateItems(item.name == "All" ? null : item);
  }

  renderItem = ({ item, i }) => {
    return (
      <TouchableWithoutFeedback onPress={() => this.getItems(item)}>
        <Card containerStyle={{ marginTop: 20,marginBottom:4,backgroundColor:this.state.showingFilter == item.name ? '#D4FF90' : '#fff' ,  borderRadius: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CustomText text={item.name} />
            <Icons lib="AntDesign" color={Colors.textNormal} name="right" />
          </View>
        </Card>
      </TouchableWithoutFeedback>
    );
  };

  fetchFilters() {
    this.setState({ isApiCall: true });
    apiFuncGet("filters")
      .then((resp) => {
        this.setState({ isApiCall: false, data: resp });
      })
      .catch((err) => {
        this.setState({ isApiCall: "failed" });
      });
  }

  toggleFilter() {
    HelperMethods.animateLayout();
    this.setState({ showFilter: !this.state.showFilter });
  }

  render() {
    return (
      <NetworkAwareContent
        data={this.state.data}
        apiFunc={() => this.fetchFilters()}
        isApiCall={this.state.isApiCall}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CustomText
            color={Colors.textGrey}
            onPress={() => this.toggleFilter()}
            text={`${this.state.showFilter ? "Hide" : "Show"} Filters`}
          />
          <Icons
            lib="AntDesign"
            name={this.state.showFilter ? "up" : "down"}
            color={Colors.textGrey}
            size={19}
            style={{ marginLeft: 5, top: 1 }}
          />
        </View>

        {this.state.showFilter && (
          <FlatList
            data={this.state.data}
            extraData={this.state}
            renderItem={this.renderItem}
            keyExtractor={(item, i) => i}
          />
        )}
      </NetworkAwareContent>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
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
)(Filters);
