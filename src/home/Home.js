import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    SafeAreaView,
    ScrollView,
   
   
} from 'react-native';
import {Grid,Icon} from '@ant-design/react-native'; 

export default class Home extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={{width:'100%',height:60,backgroundColor:'#f23030'}}>
                    <View style={{flexDirection:'row',height:40,justifyContent:'center'}}>                        
                        <View style={{width:'80%',backgroundColor:'#fff',
                            borderRadius:2,
                            // marginRight:10,
                            alignItems:'center',
                            flexDirection:'row',
                            paddingLeft:20,
                            
                        }}>
                            <Image style={{width:20,height:20,marginLeft:10}}source={require('../../assets/搜索.png')}/>
                            <TextInput placeholder='请输入您要搜索的关键字'/>                   
                        </View>
                        <Icon style={{paddingTop:10,paddingLeft:10}}name='shop'/>
                    </View>
                </View>
                
                <ScrollView horizontal={true}>
                        <View >
                             <Image style={{width:490}} source={require('../../assets/3.jpg')}/>
                         </View>
                        <View>
                            <Image style={{width:490}} source={require('../../assets/3.jpg')}/>
                        </View>
                        <View>
                            <Image style={{width:490}} source={require('../../assets/3.jpg')}/>
                        </View>

                </ScrollView>
               
               
                <View style={{width:'100%',height:70,backgroundColor:'#fff',flexDirection:'row'}}>
                    <Image style={{marginTop:10,width:50,height:50}}source={require('../../assets/维修.png')}/>
                    <Text style={{fontSize:15,marginTop:20,marginLeft:20}}>居家维修保养</Text>
                    <Text style={{fontSize:20,marginTop:20,marginLeft:240,color:'#bfbfbf'}}>></Text>
                </View>
                <View style={{width:'100%',height:70,backgroundColor:'#fff',flexDirection:'row',marginTop:10}}>
                    <Image style={{marginTop:10,width:50,height:50}}source={require('../../assets/维修.png')}/>
                    <Text style={{fontSize:15,marginTop:20,marginLeft:20}}>住宿优惠</Text>
                    <Text style={{fontSize:20,marginTop:20,marginLeft:270,color:'#bfbfbf'}}>></Text>
                </View>
                <View style={{width:'100%',height:70,backgroundColor:'#fff',flexDirection:'row',marginTop:10}}>
                    <Image style={{marginTop:10,width:50,height:50}}source={require('../../assets/维修.png')}/>
                    <Text style={{fontSize:15,marginTop:20,marginLeft:20}}>出行接送</Text>
                    <Text style={{fontSize:20,marginTop:20,marginLeft:270,color:'#bfbfbf'}}>></Text>
                </View>
                <View style={{width:'100%',height:70,backgroundColor:'#fff',flexDirection:'row',marginTop:10}}>
                    <Image style={{marginTop:10,width:50,height:50}}source={require('../../assets/维修.png')}/>
                    <Text style={{fontSize:15,marginTop:20,marginLeft:20}}>礼物放送</Text>
                    <Text style={{fontSize:20,marginTop:20,marginLeft:270,color:'#bfbfbf'}}>></Text>
                </View>
               <View style={{width:300,height:50,backgroundColor:'red',marginLeft:'20%',marginTop:10}}>
                        <Text style={{color:'#ffffff',paddingTop:10,paddingLeft:125}}>发布需求</Text>
                </View>
                <View>
                    <Text style={{marginTop:10,marginLeft:'40%',color:'#bfbfbf'}}>翼族之家，版权所有</Text>
                </View>
                   
                
                

                
            </SafeAreaView>
            
           
        )
    }
}
const styles = StyleSheet.create({
 
  
   
  
});