// import React,{useState,useEffect}from 'react';
// import {
//  StyleSheet,
//  View,
//  Text,
//  Image

// } from 'react-native';
// import {Grid,Icon} from '@ant-design/react-native'; 
// import {Router,Overlay,Scene, Tabs,Drawer,Lightbox,Modal,Actions}from 'react-native-router-flux';
// import Msg from './components/Msg';
// import Doc from './components/Doc';
// import MgDetail from './components/MgDetail';
// import Mybox from './components/Mybox';
// import ShowMyName from './components/ShowMyName';
// import Login from './components/Login';
// import Home from './components/Home';
// import Message from './components/Message';
// import Mylist from './components/Mylist';
// const rootUrl='https://www.fastmock.site/mock/6c817a1c528ddff2a4644f3a63fc47d3/api'
// const App= () => {
//   let now=0;
//   useEffect(()=>{
//      fetch(rootUrl+'/topics?limit=5')
//       .then(res=>res.json())
//       .then(res=>console.log(JSON.stringify(res)))
//   },[])

//   return (
//     <Router
//           backAndroidHandler={()=>{
//             if(Actions.currentScene != 'home'){
//               Actions.pop();
//               return true;
//             }else{
//               if(new Date().getTime()-now<2000){
//                 BackHandler.exitApp();
//               }else{
//                 ToastAndroid.show('确定要退出吗',100);
//                 now = new Date().getTime();
//                 return true;
//               }
//             }
            
//           }}
//     >
//     <Overlay>
//      <Modal key='modal'hideNavBar>
//      <Lightbox key='lightbox'>
//       <Drawer
//         key='drawer'
//         contentComponent={()=><Text>drawer</Text>}
//         drawerIcon={()=><Icon name='menu'/>}
//         drawerWidth={400}

//       >
//         <Scene key='root'>

//           {/* 实现tabs */}
//           <Tabs key='tabbar'
//             hideNavBar
//             activeTintColor='red'
//             inactiveTintColor='blue'
//             tabBarStyle={{backgroundColor:'#ccc'}}         >
//             {/* 首页栏 */}
//             <Scene key='msg'
//               title='消息'
//               // icon={
//               //   ()=><Image 
//               //       style={{width:30,height:30}}
//               //       source={require('./assets/icon/user.png')}/>}
//               icon={
//                 ({focused})=><Icon
//                     color={focused?'red':'green'}
//                     name='file'
//                 />
//               }
//             >
//                 <Scene key='ms'component={Msg}/>
//                 <Scene 
//                   key='mylist'
//                    hideTabBar
//                    hideDrawerButton
//                   component={Mylist}
//                   />
//             </Scene>

//              {/* 文档栏*/}
//             <Scene key='doc'
//               title='文档'
//             >
//                 <Scene key='docs'component={Doc}/>

//             </Scene>
//           </Tabs>
//           {/* 默认显示第一个Scene,如果没放在第一个，可以加inital属性*/}
//             {/* <Scene 
//               key='msg' title='消息'
//               titleStyle={{flex:1,textAlign:'center',color:'red'}}
//               component={Msg}/>
//             <Scene 
//               key='mgdetail'title='消息详情'
//               // backButtonImage={require('./assets/icon/user.png')}
//               // backTitle='消息'
//               titleStyle={{flex:1,textAlign:'center',color:'red'}}
//               renderRightButton={<View></View>}
//               component={MgDetail}              
//             />
//             <Scene 
//               key='doc'title='文档'
//               titleStyle={{flex:1,textAlign:'center'}}
//               renderRightButton={<View></View>}
//               component={Doc}/>
//              */}

//         </Scene>
//         </Drawer>
//         <Scene key='light'component={Mybox}/>
//       </Lightbox>
//       <Scene key='login'component={ShowMyName}/>
//       <Scene key='login1'component={Login}/>
    
//      </Modal>
//      <Scene component={Message}/>
//      </Overlay>
     

//     </Router>
//   );
// };

// const styles = StyleSheet.create({
 
 
   
  
// });

// export default App;





import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image, 
	BackHandler,ToastAndroid,AsyncStorage
} from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/home/Home';
import Goods from './src/goods/Goods';
import Login from './src/common/Login';
import Register from './src/common/Register';
import Userinfor from './src/userinfor/Userinfor';
import SwiperPage from './src/common/SwiperPage';
import Publish from './src/userinfor/Publish';



console.disableYellowBox = true;

const App = () => {
	let isExit=false;
	BackHandler.addEventListener('back',()=>{
	  console.log('back');
	  
	  if(isExit){
		BackHandler.exitApp();
		return false;
  
	  }
	  ToastAndroid.show('确定要退出吗',ToastAndroid.SHORT);
	  isExit=true;
	  setTimeout(()=>{
		isExit=false;
	  },2000)
	  return true;
	})
	let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		init();
	},[])
	let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}

	return (
		<Router
			
		>
			<Overlay>
			<Modal key="modal" hideNavBar>
				<Lightbox key="lightbox">
					<Drawer 
						key="drawer"
						contentComponent={()=><Text>drawer</Text>}
						drawerIcon={()=><Icon name="menu"/>}
						drawerWidth={400}
					>
						<Scene key="root">
							<Tabs 
								key='tabbar'
								hideNavBar
								activeTintColor="red"
								inactiveTintColor="blue"
								tabBarStyle={{backgroundColor:'#ccc'}}
							>
								{/* 首页 */}
								<Scene key='homePage'
								hideNavBar
									title='首页'
									icon={
										({focused})=><Icon 
											color={focused?'red':'blue'} 
											name="home"
										/>
									}
								>
									<Scene key='home' 
										component={Home}
									/>
								</Scene>
								{/* 商品分类 */}
								<Scene key='goodsPage'
								hideNavBar
									title='商品分类'
									icon={
										({focused})=><Icon 
											color={focused?'red':'blue'} 
											name="file"
										/>
									}
									
								>
									<Scene key="goods" component={Goods}/>
								</Scene>
								{/* 用户中心 */}
								<Scene 
									hideDrawerButton
									icon={({focused})=>
										<Icon 
											color={focused?'red':'blue'} 
											name='file'/>
										}
									title="用户中心"
									
								>
								<Scene 
									key='userPage'
									
									component={Userinfor}
								/>
									<Scene 
										key='fabu'title='我的发布'
										hideTabBar
										titleStyle={{flex:1,textAlign:'center',color:'red'}}
										renderRightButton={<View></View>}
										component={Publish}              
									/>
								</Scene>
							

								
								 
								
							</Tabs>
						</Scene>
					</Drawer>
					{/* <Scene key='light' component={Mybox}/> */}
				</Lightbox>

				<Scene initial={!isLogin} key="login" component={Login} />
				<Scene key="register" component={Register}/>

				{/* <Scene key="login" component={ShowMyName}/> */}
				{/* <Scene key="login1" component={Login}/> */}
			</Modal>
			{/* <Scene component={Message}/> */}
			</Overlay>
		</Router>
	);
};

export default App;