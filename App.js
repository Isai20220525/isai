import {StatusBar} from 'expo-status-bar'
import * as React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Login from './src/login'
import Signup from './src/signup'
import Photo from './src/Photo'
import Header from './src/Header'
import Home from './src/Home'
import Contact from './src/Contact'

import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

function DrawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{title: 'Home'}}
      />
      <Drawer.Screen
        name="Photo"
        component={Photo}
        options={{title: 'Photo'}}
      />
      <Drawer.Screen
        name="MyStack"
        component={MyStack}
        options={{title: 'Menu'}}
      />
    </Drawer.Navigator>
  )
}

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{title: 'Signup'}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Login'}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{title: 'Contact'}}
      />
      <Stack.Screen
        name="Photo"
        component={Photo}
        options={{title: 'Photo'}}
      />
      <Stack.Screen
        name="Header"
        component={Header}
        options={{title: 'Header'}}
      />
      <Stack.Screen
        name="DrawerNav"
        component={DrawerNav}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <MyStack /> */}
      <DrawerNav />
    </NavigationContainer>
  )
}
