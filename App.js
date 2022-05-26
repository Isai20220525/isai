import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/login';
import Signup from './src/signup';
import Photo from './src/Photo';
import Header from './src/Header';
import Home from './src/Home';
import Contact from './src/Contact';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator >
//         <Stack.Screen name="Home Page" component={Home} options={{
//             headerShown: false,
//             title: 'My Home Screen',
//             headerStyle: {
//             backgroundColor: '#f4511e',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//             fontWeight: 'bold',
//             },
//             }}/>
//         <Stack.Screen name="Contact Page" component={Contact}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()
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
      
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
      <Drawer.Navigator >
        <Drawer.Screen name="Home Page" component={Home} options={{
            title: 'My Home Screen',
            headerStyle: {
            backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
            }}/>
        <Drawer.Screen name="Contact Page" component={Contact} 
        // options={{ drawerItemStyle: { display: 'none' }, }}
        />
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}

// const Tab = createBottomTabNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size }) => {
//                     let iconName = "ios-home";

//                     if(route.name === 'Home Page') {
//                     }
//                     else if (route.name === 'Contact Page') {
//                         iconName = 'ios-list';
//                     }
//                     return <Ionicons name={iconName} size={size} color={color} />;
//                 },
//             })}>
//         <Tab.Screen name="Home Page" component={Home} />
//         <Tab.Screen name="Contact Page" component={Contact}/>
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
