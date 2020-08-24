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
import {
    decreaseFoodQtyFunction, increaseFoodQtyFunction
  } from "AppLevelComponents/Redux/ActionCreators/ActionCreator";
@observer
class FoodItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
quant:0,
    };
  }

  increaseDecrease(type) {
    const {name} = this.props.item
    let reduxIndex = 0
     reduxIndex = this.props.selectedFoodItems?.findIndex((v) => v.name == name);
    let obj = { name, qty: this.state.quant };
    HelperMethods.animateLayout()
    if (type == "increase") {
        this.props.increaseQty(obj);
    } else if(reduxIndex > -1) {
        this.props.decreaseQty(obj);
    }
  }



  render() {
      const {item,selected} = this.props
    let reduxIndex = this.props.selectedFoodItems?.findIndex((v) => v.name == item.name);

    return (
        <Card containerStyle={{ marginTop: 20,marginBottom:4, borderRadius: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CustomText style={{ flex: 1 }}  text={item.name} />
          <NumberCounter
            quant={this.props.selectedFoodItems[reduxIndex] ? this.props.selectedFoodItems[reduxIndex].qty : 0}
            increaseDecrease={(type) => this.increaseDecrease(type,item)}
          />
        </View>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedFoodItems: state.reducer.selectedFoodItems,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseQty: (obj) => dispatch(increaseFoodQtyFunction(obj)),
    decreaseQty: (obj) => dispatch(decreaseFoodQtyFunction(obj)),
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNavigation
)(FoodItem);
