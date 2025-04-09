import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/navigation-screens/Home";
import About from "./src/navigation-screens/About";
import Login from "./src/navigation-screens/Login";
import { Alert, Button, StyleSheet, Text, TouchableOpacity } from "react-native";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyLogin from './src/NativeWind/MyLogin';

// const Stack = createNativeStackNavigator();
// const sayHello = () => {
//   Alert.alert('Hello', 'Hello user');
// }

// const HeaderTitle = () => (
//   <TouchableOpacity onPress={sayHello} style={{ marginLeft: 10 }}>
//     <Text style={{ color: 'red', fontSize: 16 }}>One</Text>
//   </TouchableOpacity>
// );
// const HeaderRight = () => (
//   <TouchableOpacity onPress={() => Alert.alert('Hello', 'Hello user')} style={{ marginRight: 10 }}>
//     <Text style={{ color: 'green', fontSize: 16 }}>Two</Text>
//   </TouchableOpacity>
// );

// const Drawer = createDrawerNavigator();

// const Tab = createBottomTabNavigator();

// const getTabBarIcon = (routeName, focused, color, size) => {
//   let iconName;
//   if(routeName === 'Home'){
//     iconName = focused ? 'home' : 'home-outline'
//   }else if(routeName === 'About'){
//     iconName = focused ? 'person' : 'person-outline'
//   }else if(routeName === 'Login'){
//     iconName = focused ? 'settings' : 'settings-outline'
//   }
//   return <Icon name={iconName} size={size} color={color} />
// }


const  Tab = createMaterialTopTabNavigator();


const App = () => {
  return( 

    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor : '#007bff',
        tabBarInactiveTintColor : 'gray',
        tabBarStyle : { backgroundColor : '#fff'},
        tabBarIndicatorStyle : {
          backgroundColor : '#007bff',
          height : 3,
        },
        tabBarLabelStyle : { fontSize : 16, fontWeight: 'bold'}
      }}
      >
        <Tab.Screen name='Home' component={MyLogin}/>
        <Tab.Screen name='About' component={About}/>
        <Tab.Screen name='Login' component={Login}/>
      </Tab.Navigator>
    </NavigationContainer>


    // <NavigationContainer>
    //   <Tab.Navigator 
    //   screenOptions={({ route }) => ({
    //     tabBarIcon : ({focused, color, size}) => getTabBarIcon(route.name, focused, color, size),
    //     tabBarActiveTintColor : '#007bff',
    //     tabBarInactiveTintColor : 'gray',
    //     tabBarStyle : {
    //       paddingBottom : 5,
    //       height : 60
    //     }
    //   })}
    //   >
    //     <Tab.Screen name='Home' component={Home} />
    //     <Tab.Screen name='About' component={About} />
    //     <Tab.Screen name='Login' component={Login} />
    //   </Tab.Navigator>
    // </NavigationContainer>


    // <NavigationContainer>
    //   <Drawer.Navigator 
    //     screenOptions={{
    //       drawerStyle : {
    //         backgroundColor : '#e6e6e6',
    //         width : 240
    //       },
    //       drawerLabelStyle : {
    //         fontSize : 18,
    //         color : '#333'
    //       },
    //       headerStyle : {
    //         backgroundColor : '#6200ee'
    //       },
    //       headerTintColor : '#fff',
    //       headerTitleAlign : 'center'
    //     }}
    //   >
    //     <Drawer.Screen name="Login" component={Login} />
    //     <Drawer.Screen name="Home" component={Home} />
    //     <Drawer.Screen name="About" component={About} />
    //   </Drawer.Navigator>
    // </NavigationContainer>  


      // <NavigationContainer>
      //   <Stack.Navigator 
      //     screenOptions={{
      //       headerStyle : styles.header,
      //       headerTitleStyle : styles.headerTitle,
      //       headerTintColor : '#fff',
      //       contentStyle : styles.screen
      //     }}
      //     >
      //     <Stack.Screen name="MyHeader" component={MyHeader} 
      //     options={{
      //       title:'',
      //       headerTitle : HeaderTitle,
      //       headerRight : HeaderRight
      //     }}
      //     />
      //     <Stack.Screen name='Login' component={Login} 
          // options={{
          //   title : 'Login Form', 
          //   headerTintColor : 'red',
          //   headerTitleStyle : {
          //     fontSize : 30,
          //     color : 'yellow'
          //   },
          //   headerStyle : {
          //     backgroundColor : 'red '
          //   }
          // }}
      //     />
      //     <Stack.Screen name='Home' component={Home} options={{headerShown : false}}/>
      //     <Stack.Screen name='About' component={About} />
      //   </Stack.Navigator>
      // </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   header : {
//     backgroundColor : '#6200ee'
//   },
//   headerTitle : {
//     fontWeight : 'bold',
//     fontSize : 26,
//   },
//   screen : {
//     backgroundColor : 'lightgreen'
//   }
// });

export default App;

