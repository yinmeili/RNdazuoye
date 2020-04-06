import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';
const App= () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView >          
          <View style={{flexDirection:'row',height:40,justifyContent:'center'}}>
              <View style={{width:'90%',backgroundColor:'#ccc',
              borderRadius:2,
              marginRight:10,
              alignItems:'center',
              flexDirection:'row',
              paddingLeft:20,
              
            }}>
                
                <TextInput placeholder='请输入商品名称'/>
                <Image style={{width:20,height:20,marginLeft:260}}source={require('../../assets/搜索.png')}/>
              </View>
          </View>
          <View style={{flexDirection:'row',paddingLeft:20,justifyContent:'center',marginTop:10}}>
              <View><Text style={{fontSize:15,color:'red'}}>综合</Text></View>
              <View><Text style={styles.a}>销量</Text></View>
              <View><Text style={styles.a}>新品</Text></View>
              <View><Text style={styles.a}>价格</Text></View>
              <View><Text style={styles.a}>信用</Text></View>
          </View>
          <View style={{flexDirection:'row',backgroundColor:'#eeeeee',justifyContent:'space-around',flexWrap:'wrap',width:'100%'}}>
                <View style={{width:200,height:250,backgroundColor:'white',marginTop:20}}>
                    <Image style={{width:150,height:150,marginLeft:20,marginTop:10}}source={require('../../assets/1.jpg')}/>
                    <Text style={{marginTop:20}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                    <Text style={{fontSize:15,color:'red',marginTop:10}}>36.00</Text>
                </View>
                <View style={{width:200,height:250,backgroundColor:'white',marginTop:20}}>
                    <Image style={{width:150,height:150,marginLeft:20,marginTop:10}} source={require('../../assets/2.jpg')}/>
                    <Text style={{marginTop:20}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                    <Text style={{fontSize:15,color:'red',marginTop:10}}>36.00</Text>
                </View>
                <View style={{width:200,height:250,backgroundColor:'white',marginTop:20}}>
                    <Image style={{width:150,height:150,marginLeft:20,marginTop:10}}source={require('../../assets/1.jpg')}/>
                    <Text style={{marginTop:20}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                    <Text style={{fontSize:15,color:'red',marginTop:10}}>36.00</Text>
                </View>
                <View style={{width:200,height:250,backgroundColor:'white',marginTop:20}}>
                    <Image style={{width:150,height:150,marginLeft:20,marginTop:10}} source={require('../../assets/2.jpg')}/>
                    <Text style={{marginTop:20}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                    <Text style={{fontSize:15,color:'red',marginTop:10}}>36.00</Text>
                </View>
                <View style={{width:200,height:250,backgroundColor:'white',marginTop:20}}>
                    <Image style={{width:150,height:150,marginLeft:20,marginTop:10}}source={require('../../assets/1.jpg')}/>
                    <Text style={{marginTop:20}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                    <Text style={{fontSize:15,color:'red',marginTop:10}}>36.00</Text>
                </View>
                <View style={{width:200,height:250,backgroundColor:'white',marginTop:20}}>
                    <Image style={{width:150,height:150,marginLeft:20,marginTop:10}} source={require('../../assets/2.jpg')}/>
                    <Text style={{marginTop:20}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                    <Text style={{fontSize:15,color:'red',marginTop:10}}>36.00</Text>
                </View>
          </View>

        
        </ScrollView>  
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
 
  a:{
      paddingLeft:50,
      fontSize:15
  }
   
  
});

export default App;





