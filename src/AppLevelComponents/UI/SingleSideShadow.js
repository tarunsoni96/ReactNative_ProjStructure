import React from 'react'
import { View, StyleSheet, ViewPropTypes } from 'react-native'
import LinearGradient from "react-native-linear-gradient";


const SingleSideShadow = ({ children, style,rotated }) => (
<LinearGradient start={{ x: 1, y: 0 }} end={{ x: 1, y: 0.7 }} colors={['#ECEBEC', '#FFF']} style={{height:8,transform: [{
    rotate: rotated ? '-180deg' : '0deg'}],...style}}  />
);

export default SingleSideShadow;