import React, { Component } from 'react'
import { StyleSheet,
        View,
        Text,
        TouchableOpacity,
        ToastAndroid
       
        
    } 
    from 'react-native'
import { Actions } from 'react-native-router-flux'
let limit=10;

export default class Userinfor extends Component {
     constructor(){
        super();
        this.state = {
            data:[],
            page:1
           
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            });
        })
    }
    upPage=()=>{
        if(this.state.page==1){
            ToastAndroid.show('已为第一页',2);
        }else{
            this.setState({
                page:this.state.page-1
            })
        }
    }
    downPage=()=>{
        if(this.state.page==4){
            return null;
        }else{
            this.setState({
                page:this.state.page+1

            })
            console.log(this.state.page)
        }
    }
    
    render() {
        return (
        <View>
            <View>
               {
                this.state.data.map((item,idx)=>{

                    if(Math.ceil(idx/limit)==this.state.page){
                        let ran = Math.random();
                        return(
                         <View style={styles.a}>
                            <Text style={{width:300,left:20}}>{item.title.length>15?item.title.substring(0,15):item.title}</Text>
                            <Text >{item.create_at.substring(0,10)}</Text>
                            {
                                    ran>0.5
                                    ?<Text style={{left:30}}>已回复</Text>
                                    :<Text style={{color:'red',left:30}}>待回复</Text>
                            }
                            {/* <Text style={{left:10}}>已回复</Text> */}
                        </View>
                            )
                       
                    }   
                       
 
                    })

               }
               
            </View>
            <View style={{flexDirection:'row',justifyContent: 'space-evenly',top:30}}>
                    <TouchableOpacity onPress={this.upPage} style={styles.btn}><Text>上一页</Text></TouchableOpacity>
                    <TouchableOpacity style={{paddingTop:10}}><Text>第{this.state.page}页</Text></TouchableOpacity>
                    <TouchableOpacity onPress={this.downPage}style={styles.btn}><Text>下一页</Text></TouchableOpacity>
            </View>
        </View>

        )
    }
}
const styles=StyleSheet.create({
    btn:{
        width:100,
        height:50,
        borderRadius:20,
        backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    a:{
        height:50,
         borderBottomColor: '#ccc',
         borderBottomWidth: 1,
         flexDirection:'row',
          alignItems: 'center'


    }
   
})
