import { StyleSheet } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const Web = () => {
  return (
    <WebView
        source={{uri:'https://www.youtube.com/'}}
    />
  )
}

export default Web

const styles = StyleSheet.create({})