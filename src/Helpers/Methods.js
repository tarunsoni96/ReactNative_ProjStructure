import {
  Alert,
  Dimensions,
  BackHandler,
  Platform,
  Linking,
  LayoutAnimation,
  ToastAndroid,
} from "react-native";
import Snackbar from "react-native-snackbar";
import axios from "axios";
import NetInfo from "@react-native-community/netinfo";

import axiosCancel from "axios-cancel";
import NavigationService from "ServiceProviders/NavigationService";
import { NavigationActions, StackActions } from "react-navigation";
import moment from "moment";
import "Helpers/global";
import { Colors } from "UIProps/Colors";
import Constants from "Helpers/Constants";
import { storeToken, getToken } from "DataManagers/UserDataManager";
import AsyncStorageHandler from "StorageHelpers/AsyncStorageHandler";
import MobxStore from "StorageHelpers/MobxStore";

let timer;
// let baseUrl = 'http://192.168.29.212:80/'
let baseUrl = "https://my-json-server.typicode.com/tarunsoni96/FakeRestData/";
let counter = 2;

var CancelToken = axios.CancelToken;
var cancel;
const reqTimeout = 15000;

const HelperMethods = {
  showAlert: function(
    message,
    btnPositive,
    btnNegative,
    onPress_btnNegative,
    onPress_btnPositive
  ) {
    Alert.alert(
      "Alert",
      message,
      [
        {
          text: btnNegative,
          onPress:
            onPress_btnNegative == "" ? () => {} : () => onPress_btnNegative(),
          style: "cancel",
        },
        { text: btnPositive, onPress: () => onPress_btnPositive() },
      ],
      { cancelable: false }
    );
  },

  animateLayout: function() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  },

  getBaseUrl: function() {
    return baseUrl;
  },

  isPlatformAndroid: function() {
    return Platform.OS == "android";
  },

  isPlatformIos: function() {
    return Platform.OS == "ios";
  },

  isConnected: function() {
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then((state) => {
        if(this.isPlatformIos()){

          resolve(true);
        } else {

          resolve(state.isConnected);
        }
      });
    });
  },

  isLoggedIn: function() {
    AsyncStorageHandler.get("userInfoObj", (val) => {
      if (val == null || Object.keys(val).length == 0) {
        return false;
      } else {
        return true
      }
    });
  },

  makeNetworkCall: function(
    apiName,
    formData,
    callBack,
    method = "GET",
    skipToken = false,
    image = false
  ) {
    if (skipToken) {
      const Headers = {
        "Content-Type": image ? "multipart/form-data" : "application/json",
      };
      this.makeApiCall(apiName, Headers, formData, callBack, method);
    } else {
      const Headers = {
        Authorization: `${MobxStore.getUserObjKey("token")}`,
        "Content-type": "application/json",
      };
      this.makeApiCall(apiName, Headers, formData, callBack, method);
    }

    // this.isConnected().then(connected => {
    //   if(!connected){
    //     callBack(false,true)
    //     this.snackbar('No internet connection')
    //   } else {
    //     if(skipToken){
    //       const Headers = { 'Content-Type': 'application/json' }
    //       this.makeApiCall(apiName,Headers,formData,callBack,method)
    //     } else {
    //       getToken().then((val) => {
    //       const Headers = { 'Authorization': `Bearer ${val}` }
    //       this.makeApiCall(apiName,Headers,formData,callBack,method)
    //     })
    //     }
    //   }
    // })
  },

  promiseTimeout: function(msec, callBack) {
    if (timer) {
      clearTimeout(timer);
    }

    return (promise) => {
      const timeout = new Promise((yea, nah) => {
        timer = setTimeout(() => {
          callBack(false, true);
          cancel();
        }, msec);
      });
      return Promise.race([promise, timeout]);
    };
  },

  makeApiCall: function(apiName, headers, formData, callBack, method) {
    axios.interceptors.request.use((request) => {
      console.log("Starting Request", request);
      return request;
    });
    // axios.interceptors.response.use(response => console.log('reponse', response))
    this.promiseTimeout(reqTimeout, callBack)(
      axios({
        url: baseUrl + apiName,
        data: method == "POST" ? formData : null,
        headers,
        cancelToken: new CancelToken(function executor(c) {
          cancel = c;
        }),
        method,
      })
        .then((response) => {
          clearTimeout(timer);
          callBack(response.data, false);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            this.snackbar(`Request timeout, please retry`, "OK", () => {});
          } else {
            callBack(false, error.response);
            // this.snackbar(`Api ${error}`,'OK',()=>{})
          }
        })
    );
  },

  isOdd: function(num) {
    if (num & 1) {
      return true;
    } else {
      return false;
    }
  },

  logout: function(navigation,lastUserType) {
    AsyncStorageHandler.delete(Constants.userInfoObj, () => {
      MobxStore.updateUserObj({})
      navigation.navigate("SignupStack");
      MobxStore.storeLastUserType(lastUserType)
    });
  },

  navigateHome: function() {},

  snackbar: function(
    message,
    actionFuncTitle = "OK",
    actionFunc = () => {},
    length
  ) {
    let snackLen =
      length == "short" ? Snackbar.LENGTH_SHORT : Snackbar.LENGTH_LONG;
    Snackbar.show({
      backgroundColor: Colors.accent,
      title: message,
      duration: snackLen,
      action: {
        title: actionFuncTitle,
        color: "#fff",
        onPress: () => {
          actionFunc();
        },
      },
    });
  },

  capitailizeFirst: (String.prototype = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }),

  openGMaps: function(lat, lng, label) {
    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q=",
    });
    const latLng = `${lat},${lng}`;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });
    Linking.openURL(url);
  },

  formatAMPM: function(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  },

  makeCall: function(mob) {
    Linking.openURL(`tel:${mob}`);
  },

  openAppinPS: function(packageName) {
    Linking.openURL("market://details?id=" + packageName + "&hl=en");
  },

  appExitPrompter: function() {
    if (counter == 2) {
      setTimeout(() => {
        counter = 2;
      }, 2000);
      ToastAndroid.show("Press again to Quit", 1000);
    }
    counter -= 1;
    if (counter == 0) BackHandler.exitApp();
  },

  switchToLangSelector: function() {
    NavigationService.navigate("langSelectorStack", {
      isForLanguageChange: true,
    });
  },

  formatDate_DMY: function(date) {
    //requires date in format 2-2-2 or 2/2/2 with time or without time
    return moment(date).format("DD/MM/YYYY");
  },

  formatDate_DMYEnglish: function(date) {
    //requires date in format 2-2-2 or 2/2/2 with time or without time
    return moment(date).format("DD-MMM-YYYY");
  },

  formatDate_DMYEnglishNoDash: function(date) {
    //requires date in format 2-2-2 or 2/2/2 with time or without time
    let str = moment(date).format("DD-MMM-YYYY");
    str = str?.replace(/-/g, " ");
    return str;
  },

  formatDate_ll: function(date) {
    //requires date in format 2-2-2 or 2/2/2 with time or without time
    return moment(date).format("ll");
  },

  formatDate_DMEnglish: function(date) {
    //requires date in format 2-2-2 or 2/2/2 with time or without time
    return moment(date).format("DD-MMM");
  },

  formatDate_Month_Date: function(date) {
    //requires date in format 2-2-2 or 2/2/2 with time or without time
    let month = moment(date).format("mmmm");
    let dateNumber = moment(date).format("d");
    return `${month} ${dateNumber}`;
  },

  isIphoneXorAbove: function() {
    const dimen = Dimensions.get("window");
    return (
      Platform.OS === "ios" &&
      !Platform.isPad &&
      !Platform.isTVOS &&
      (dimen.height === 812 ||
        dimen.width === 812 ||
        (dimen.height === 896 || dimen.width === 896))
    );
  },
};

export default HelperMethods;
