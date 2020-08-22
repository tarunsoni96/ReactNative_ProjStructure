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

import Constants from 'Helpers/Constants'

@observer
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isApiCall: false
    };
  }

  getData = () => {};

  onRefresh = () => {
  };
  
  
  onBackPress = () => {
    HelperMethods.appExitPrompter()
  };

  componentDidMount(){
    // alert(MobxStore.var1)
  }

  
  render() {
    return (
      <Container onBackPress={this.onBackPress} onRefresh={this.onRefresh} refreshingData={this.state.refreshingData} >
      <SubHeader title={'APP NAME'}  />
          <NetworkAwareContent
            data={this.state.data}
            apiFunc={this.getData}
            isApiCall={this.state.isApiCall}
          ></NetworkAwareContent>

      </Container>
    );
  }
}

export default Dashboard;
