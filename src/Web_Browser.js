import { StyleSheet} from 'react-native'
import React from 'react'
import * as WebBrowser from 'expo-web-browser'
import { Button, View, Text } from 'react-native'
import { useState } from 'react'

const Web_Browser = () => {
  const [result,setResult] = useState(null)
    const handelWeb =async()=>{
        let res = await WebBrowser.openBrowserAsync('https://expo.dev')
        setResult(res)
    }
  
  return (
    <View style={styles.container}>
        <Button title='Click' onPress={handelWeb}/>
        <Text>{result && JSON.stringify(result)}</Text>
    </View>
  )
}

export default Web_Browser

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})