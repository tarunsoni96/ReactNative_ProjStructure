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
import Filters from "./Filters";
import Line from "Helpers/line";
import NumberCounter from "AppLevelComponents/UI/NumberCounter";
import FoodItem from "./FoodItem";
import { SafeAreaView } from "react-native";
import CustomButton from "AppLevelComponents/UI/CustomButton";

@observer
class Shopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showing: "All",
      
      isApiCall: false,
    };
  }

  componentDidMount() {
    this.fetchItems();
  }

  renderItem = ({ item, i }) => {
    return (
      <FoodItem  item={item} />
    );
  };



  fetchItems(item) {
    this.setState({ isApiCall: true });
    apiFuncGet(item ? "items/" + item.id : "items")
      .then((resp) => {
        this.setState({
          isApiCall: false,
          showing: item?.name || "All",
          data: Array.isArray(resp) ? resp : [resp],
        });
      })
      .catch((err) => {
        this.setState({ isApiCall: "failed" });
      });
  }

  render() {
    const { hotel } = this.props.navigation.state.params;
    return (
      <SafeAreaView style={{flex:1}}>
      <Container onBackPress={this.onBackPress} headerTitle={`${hotel.title}`}>
        <Filters updateItems={(item) => this.fetchItems(item)} />
        <Line style={{ marginVertical: 20 }} />

        {this.state.data.length > 0 && (
          <CustomText text={this.state.showing} />
        )}

        <NetworkAwareContent
          data={this.state.data}
          apiFunc={() => {}}
          isApiCall={this.state.isApiCall}
        >
          <FlatList
            data={this.state.data}
            extraData={this.state}
            renderItem={this.renderItem}
            //   keyExtractor={(item, i) => i}
          />
        </NetworkAwareContent>
      </Container>
      {this.props.selectedFoodItems.length > 0 && 
      <CustomButton onPress={()=>this.props.navigation.navigate('Summary')} text="Procced" />
      }
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
)(Shopping);
