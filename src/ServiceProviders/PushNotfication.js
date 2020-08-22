import React, { Component } from "react";
import { Linking, AppState, AsyncStorage } from "react-native";
import HelperMethods from "Helpers/Methods";

import { Colors } from "UIProps/Colors";
import firebase from "react-native-firebase";
import { withNavigation } from "react-navigation";

class PushNotification extends Component {
  state = {
    appState: AppState.currentState,
  };
  async componentDidMount() {
    AppState.addEventListener("change", this._handleAppStateChange);
    this.checkPermission();
    this.createNotificationListeners(); //add this line
  }

  _handleAppStateChange = (nextAppState) => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      this.getToken();
    }
    this.setState({ appState: nextAppState });
  };

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);

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
    const channel = new firebase.notifications.Android.Channel("customSoundNotificationChannelId","customSoundNotificationChannel",firebase.notifications.Android.Importance.High).setDescription("ChannelName").setSound("rush.mp3");
    firebase.notifications().android.createChannel(channel);

    this.notificationListener = firebase.notifications().onNotification((noti) => {
        const { title, body,  } = noti;
        const notification = new firebase.notifications.Notification()
          .setTitle(title)
          .setSound(channel.sound)
          .setBody(body)
          .android.setSmallIcon("ic_notification") // create this icon in Android Studio
          .android.setColor(Colors.accent);

        notification.android.setChannelId(channel.channelId);
        firebase.notifications().displayNotification(notification);
      });

    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened((notificationOpen) => {
        const { title, body, data } = notificationOpen.notification;
        alert(JSON.stringify(data));
      });

    /*
     * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
     * */
    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
      alert(title);
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
    if (fcmToken) {
      // this.props.tokenSetter(fcmToken)
    }
    console.log(fcmToken);
  }

  async requestPermission() {
    try {
      firebase
        .messaging()
        .requestPermission()
        .then((resp) => {
          this.getToken();
        })
        .catch(() => {
          if (HelperMethods.isPlatformIos()) {
            this.goToSettings();
          } else {
            this.requestPermission();
          }
        });
    } catch (error) {}
  }

  goToSettings() {
    HelperMethods.showAlert(
      "You have to enable notifications from the settings",
      "Go To Settings",
      "Cancel",
      () => {},
      () => {
        Linking.openURL("app-settings://notification");
      },
      "Browse for now"
    );
  }

  render() {
    return null;
  }
}

export default PushNotification;
