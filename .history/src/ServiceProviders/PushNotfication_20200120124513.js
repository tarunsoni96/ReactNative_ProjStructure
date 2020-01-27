import React, { Component } from "react";
import {Linking,AppState, AsyncStorage } from "react-native";
import HelperMethods from 'Helpers/Methods'

import { Colors } from "UIProps/Colors";
import firebase from "react-native-firebase";
import { withNavigation } from "react-navigation";

 class PushNotification extends Component {

  state = {
    appState: AppState.currentState
  }
  async componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    this.checkPermission();
    this.createNotificationListeners(); //add this line
}

_handleAppStateChange = (nextAppState) => {
  if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
    this.getToken()
  }
  this.setState({appState: nextAppState});
}

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);

    this.notificationListener;
    this.notificationOpenedListener;
  }

  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  async createNotificationListeners() {
    this.notificationListener = firebase
      .notifications()
      .onNotification(notification => {
        const { title, body,click_action } = notification;
        const localNotificationSound = new firebase.notifications.Notification({
          sound: "default",
          show_in_foreground: true,
        })

          // .setNotificationId(notification.notificationId)
          .setTitle(notification.title)
          .setBody(notification.body)
          .setData(notification.data)
          .android.setChannelId("fcm_default_channel") // e.g. the id you chose above
          .android.setSmallIcon('ic_notification') // create this icon in Android Studio
          .android.setColor(Colors.accent)
          .android.setPriority(firebase.notifications.Android.Priority.High);

        firebase.notifications().displayNotification(localNotificationSound);
      });

    const channel = new firebase.notifications.Android.Channel(
      "fcm_default_channel",
      "University",
      firebase.notifications.Android.Importance.High
    ).setDescription("None");
    firebase.notifications().android.createChannel(channel);


    this.notificationOpenedListener = firebase
    .notifications()
    .onNotificationOpened(notificationOpen => {
      const { title, body,data } = notificationOpen.notification;
      alert(JSON.stringify( data))
    });

  /*
  * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
  * */
    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
      alert(title)
    }

  }

  async getToken() {
    
    let fcmToken = await AsyncStorage.getItem("fcmToken");
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        await AsyncStorage.setItem("fcmToken", fcmToken);
      }
    }
    if(fcmToken){
      this.props.tokenSetter(fcmToken)
    }
    console.log(fcmToken);
  }

  async requestPermission() {
    try {
      firebase.messaging().requestPermission().then((resp)=>{
        this.getToken();
      }).catch(() => {
      if(HelperMethods.isPlatformIos()){
        this.goToSettings()
      } else {
        this.requestPermission()
      }
      })
    } catch (error) {
    }
  }

  goToSettings(){
    HelperMethods.showAlert('You have to enable notifications from the settings',"Go To Settings",'Cancel',()=>{
      this.goToSettings()
    },()=>{
        Linking.openURL('app-settings://notification/LawApp')
    },'Browse for now')
  }

  render() {
    return null;
  }
}

export default PushNotification