import { StyleSheet} from 'react-native'
import WebView from 'react-native-webview'
// import React from 'react'

const WebPage = () => {
  return (
    <WebView
        originWhitelist={['*']}
        source={{html:'<h2><center>I Am Sagnik Biswas.</center></h2>'}}
    />
  )
}

export default WebPage

const styles = StyleSheet.create({})