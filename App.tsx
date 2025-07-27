 

import type React from "react"
import { useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar, Platform } from "react-native"
import "react-native-gesture-handler"
import { Colors } from "./src/styles/colors"
import SplashScreen from "./src/screens/SplashScreen"
import IntroScreen from "./src/screens/IntroScreen"
import SignInScreen from "./src/screens/SignInScreen"
import SignUpScreen from "./src/screens/SignUpScreen"
import MainTabNavigator from "./src/navigation/MainTabNavigator"

const Stack = createNativeStackNavigator()

const App: React.FC = () => {
  useEffect(() => {
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor(Colors.background, true)
      StatusBar.setBarStyle("light-content", true)
    }
  }, [])

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} translucent={false} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
          }}
          initialRouteName="Splash"
        >
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{
              animation: "none", // Equivalent to animationEnabled: false
            }}
          />

          <Stack.Screen
            name="Intro"
            component={IntroScreen}
            options={{
              animation: "default",
            }}
          />

          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              animation: "default",
            }}
          />

          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
              animation: "default",
            }}
          />

          <Stack.Screen
            name="Main"
            component={MainTabNavigator}
            options={{
              animation: "default",
              gestureEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
