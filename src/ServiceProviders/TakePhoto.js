import React, { Component } from 'react'
import { Text, View,PermissionsAndroid } from 'react-native'
import ImagePicker from 'react-native-image-picker';
import {default as ImagePickerCustomized }  from 'react-native-image-crop-picker';

const options = {
    title: 'Select Profile picture',
    quality:0.9,
    cameraType:'front',
    allowsEditing:true,
    noData:true,
    maxWidth: 400,
    maxHeight:400,
    storageOptions: { skipBackup: true, path: 'images', cameraRoll: true, waitUntilSaved: false }
  };

  const multiplePickerOptions = {
          compressQuality:50,
          cropping: true,
          writeTempFile:false,
          mediaType:'photo',
          title:'Select profile picture',
          // cropping:true,
}

  export const TakePhoto = function(callback){
    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = { uri: response.uri };
      
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          callback(source)
            // return source
          
        }
      });
  }

  export const openCam = function(callback){
    ImagePicker.launchCamera(options, (response) => {
        console.log('Response = ', response);
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = { uri: response.uri };
          callback(source)
        }
      });
  }

  export const openGallery = function(callback){
    ImagePickerCustomized.openPicker(multiplePickerOptions).then((response) => {
      callback(response)
    }).catch(err => {
    })

    }

      export const openGalleryMultiple = function(callback){
        ImagePickerCustomized.openPicker(multiplePickerOptions).then((response) => {
          callback(response)
        }).catch(err => {
        })
        
      }
      
      export const openCamMultiple = function(callback){
          ImagePickerCustomized.openCamera({...multiplePickerOptions,cropping: true,width:500,height:500,multiple:true}).then((response) => {
                callback(response)
            })
  
          }

          export const cropPhoto = function(path,callback){
            ImagePickerCustomized.openCropper({
              path: path,
                width: 300,
                height: 400
            }).then((response) => {
                  callback(response)
              })
    
            }

  
