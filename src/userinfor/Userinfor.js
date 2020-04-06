import React, { Component } from 'react'
import {
	  View,
      SafeAreaView,
	  StyleSheet,
	  Text,
	  Image,
	  ImageBackground,
	  ScrollView,

	} from 'react-native'
import {Grid,Icon} from '@ant-design/react-native'; 
import {Actions} from 'react-native-router-flux';
export default class Userinfor extends Component {
    render() {
        return (
        <SafeAreaView>
         <ScrollView>
            <View style={{width:'100%',height:250,backgroundColor:'red'}}>
            	<Image style={{marginLeft:'38%'}}source={require('../../assets/头像.png')}/>
            	<Text style={{marginLeft:'41%',marginTop:50,color:'white'}}>BINNU&nbsp; DHILLON</Text>
            </View>
            <View style={{width:'100%',height:70,backgroundColor:'white',flexDirection:'row'}}>
                    <Icon style={{paddingTop:10,paddingLeft:10}}name='shop'/>
                    <Text style={{fontSize:15,marginTop:10,marginLeft:20,color:'#bfbfbf'}}>我的个人中心</Text>
                   
            </View>
            <View style={{flexDirection:'row',backgroundColor:'white',justifyContent:'space-around',flexWrap:'wrap',width:'100%',paddingLeft:70}}>
                <View style={{width:130,height:100,backgroundColor:'white'}}>
                    <Icon style={{paddingTop:10,paddingLeft:10}}name='shop'/>
                    <Text style={{marginTop:20,color:'#bfbfbf'}}>账户管理</Text>
                </View>
                <View style={{width:130,height:100,backgroundColor:'white'}}>
                    <Icon style={{paddingTop:10,paddingLeft:10}}name='shop'/>
                    <Text style={{marginTop:20,color:'#bfbfbf'}}>收货地址</Text>
                </View>
                <View style={{width:130,height:100,backgroundColor:'white'}}>
                    <Icon style={{paddingTop:10,paddingLeft:10}}name='shop'/>
                    <Text style={{marginTop:20,color:'#bfbfbf'}}>我的信息</Text>
                   
                </View>
                <View style={{width:130,height:100,backgroundColor:'white'}}>
                    <Icon style={{paddingTop:10,paddingLeft:10}}name='shop'/>
                    <Text style={{marginTop:20,color:'#bfbfbf'}}>我的订单</Text>
                </View>
                <View style={{width:130,height:100,backgroundColor:'white'}}>
                    <Icon style={{paddingTop:10,paddingLeft:10}}name='shop'/>
                    <Text style={{marginTop:20,color:'#bfbfbf'}}>我的二维码</Text>
                </View>
                <View style={{width:130,height:100,backgroundColor:'white'}}>
                    <Icon style={{paddingTop:10,paddingLeft:10}}name='shop'/>
                    <Text style={{marginTop:20,color:'#bfbfbf'}}>我的积分</Text>
                   
                </View>
                <View style={{width:'100%',height:100,backgroundColor:'white'}}>
                    <Icon style={{paddingTop:10,paddingLeft:10}}name='shop'/>
                    <Text style={{marginTop:20,color:'#bfbfbf'}}>我的收藏</Text>
                   
           		</View>
                
          	</View>
          	


          	 <View style={{width:'100%',height:70,backgroundColor:'white',flexDirection:'row',marginTop:20}}>
                    <Icon style={{paddingTop:10,paddingLeft:10}}name='shop'/>
                    <Text style={{fontSize:15,marginTop:10,marginLeft:20,color:'#bfbfbf'}}>E族活动</Text>
                   
            </View>
            <View style={{flexDirection:'row',backgroundColor:'white',justifyContent:'space-around',flexWrap:'wrap',width:'100%',paddingLeft:70}}>
                <View style={{width:130,height:100,backgroundColor:'white'}}>
                    <Icon style={{paddingTop:10,paddingLeft:10}}name='shop'/>
                    <Text style={{marginTop:20,color:'#bfbfbf'}}>居家维修保养</Text>
                </View>
                <View style={{width:130,height:100,backgroundColor:'white'}}>
                    <Icon style={{paddingTop:10,paddingLeft:10}}name='shop'/>
                    <Text style={{marginTop:20,color:'#bfbfbf'}}>出行接送</Text>
                </View>
                <View style={{width:130,height:100,backgroundColor:'white'}}>
                    <Icon style={{paddingTop:10,paddingLeft:10}}name='shop'/>
                    <Text style={{marginTop:20,color:'#bfbfbf'}}>我的受赠人</Text>
                   
                </View>
                <View style={{width:130,height:100,backgroundColor:'white'}}>
                    <Icon style={{paddingTop:10,paddingLeft:10}}name='shop'/>
                    <Text style={{marginTop:20,color:'#bfbfbf'}}>我的住宿优惠</Text>
                </View>
                <View style={{width:130,height:100,backgroundColor:'white'}}>
                    <Icon style={{paddingTop:10,paddingLeft:10}}name='shop'/>
                    <Text style={{marginTop:20,color:'#bfbfbf'}}>我的活动</Text>
                </View>
                <View style={{width:130,height:100,backgroundColor:'white'}}>
                    <Icon style={{paddingTop:10,paddingLeft:10}}name='shop'/>
                   
                    <Text 
                        onPress={()=>{Actions.fabu()}}
                        style={{marginTop:20,color:'#bfbfbf'}}
                    >我的发布</Text>
                   
                </View>
                
                
          	</View>
          	  <View>
                    <Text style={{marginTop:10,marginLeft:'40%',color:'#bfbfbf'}}>BINNU&nbsp; DHILLON|退出</Text>
              </View>
          	
          </ScrollView>
          	
        </SafeAreaView>

        )
    }
}
