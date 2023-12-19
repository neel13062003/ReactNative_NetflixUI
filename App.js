import React from "react";
import { Image, View,ScrollView,StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./src/Screens/LoginScreen";
import Register from "./src/Screens/Register";
import ForgotPassword from "./src/Screens/ForgotPassword";

import HomeScreen from "./src/Screens/HomeScreen";
import SearchScreen from "./src/Screens/SearchScreen";
import DownloadScreen from "./src/Screens/DownloadScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import DetailScreen from "./src/Screens/DetailScreen";
import CastScreen from "./src/Screens/CastScreen";

const footer_home = require("./src/assets/icons/footer_icons/footer_home.png");
const footer_home_active = require("./src/assets/icons/footer_icons/footer_home_active.png");
const footer_search = require("./src/assets/icons/footer_icons/footer_search.png");
const footer_search_active = require("./src/assets/icons/footer_icons/footer_search_active.png");
const footer_download = require("./src/assets/icons/footer_icons/footer_download.png");
const footer_download_active = require("./src/assets/icons/footer_icons/footer_download_active.png");
const footer_profile = require("./src/assets/icons/footer_icons/footer_profile.png");
const footer_profile_active = require("./src/assets/icons/footer_icons/footer_profile_active.png");

const footer_login = require("./src/assets/icons/footer_icons/footer_login.png");
const footer_register = require("./src/assets/icons/footer_icons/footer_register.png");

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    // <ScrollView contentContainer Style={styles.scrollContainer}>
    <NavigationContainer>
        
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: "#1A1A1A",
            height: 80,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "600",
            marginTop: -12,
            letterSpacing: -0.3,
            textTransform: "uppercase",
          },
          tabBarIcon: ({ focused }) => {
            let icon = "";
            let size = 30;
            if (route.name === "Home") {
              size = 30;
              icon = focused ? footer_home_active : footer_home;
            } else if (route.name === "Search") {
              size = 27;
              icon = focused ? footer_search_active : footer_search;
            } else if (route.name === "Download") {
              size = 25;
              icon = focused ? footer_download_active : footer_download;
            } else if (route.name === "Profile") {
              size = 23;
              icon = focused ? footer_profile_active : footer_profile;
            } else if (route.name == "Login"){
              size = 23;
              icon = focused ? footer_login : footer_login;
            } else if (route.name == "Register"){
              size = 23;
              icon = focused ? footer_register : footer_register;
            }

            return (
              <Image
                source={icon}
                resizeMode="contain"
                style={{ width: size }}
              />
            );
          },
          tabBarActiveTintColor: "#FFB224",
          tabBarInactiveTintColor: "#FFFFFF90",
        })}
      >
        <Tab.Screen name="Home" component={StackScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Download" component={DownloadScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Register" component={Register} />
        {/* <Tab.Screen name="ForgotPassword" component={ForgotPassword} /> */}
      </Tab.Navigator>
      <StatusBar hidden />
      
    </NavigationContainer>
  );
};

function StackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Initial" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Cast" component={CastScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

export default App;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
});