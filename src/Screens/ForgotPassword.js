import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";


import { useNavigation } from "@react-navigation/native";

const logo = require("../assets/icons/logo.png");
const backIcon = require("../assets/icons/backIcon.png");

const ForgotPassword = () => {

  
  const navigation = useNavigation();
  const handleBackButtonPress = () => {
    // Go back to the previous screen
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TouchableOpacity style={styles.backButtonArea} activeOpacity={0.9} onPress={handleBackButtonPress}>
          <Image
            source={backIcon}
            style={styles.backIcon}
            resizeMode="contain"
          />
          <Text style={styles.backText}>BACK</Text>
        </TouchableOpacity>

        <View style={styles.logoArea}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.logoName}>PHOTOPLAY</Text>

          <Text style={styles.forgotPasswordHeadText}>FORGOT PASSWORD?</Text>
          <Text style={styles.forgotPasswordSubText}>
            Enter the email address you used to create your account and we will
            email you a link to reset your password
          </Text>
        </View>

        <View style={styles.formBox}>
          <Text style={styles.label}>EMAIL</Text>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              placeholderTextColor={"#A2A2A2"}
              placeholder="email here"
            />
          </View>

          <TouchableOpacity style={styles.loginButton} activeOpacity={0.9}>
            <Text style={styles.loginButtonText}>SEND EMAIL</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  backButtonArea: {
    width: 80,
    height: 50,
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  backIcon: {
    width: 12,
    height: 12,
  },
  backText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF90",
  },
  logoArea: {
    height: 420,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginTop: 10,
    width: 90,
    height: 90,
  },
  logoName: {
    color: "#FFBB3B",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1.1,
  },
  forgotPasswordHeadText: {
    marginTop: 35,
    fontWeight: "bold",
    fontSize: 14,
    color: "#FFFFFF",
  },
  forgotPasswordSubText: {
    width: 250,
    marginTop: 14,
    textAlign: "center",
    color: "#BFBFBF",
  },
  formBox: {
    zIndex: 10,
    marginTop: -50,
    alignSelf: "center",
    width: 360,
    height: 200,
    padding: 10,
  },
  label: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 1,
  },
  inputArea: {
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 8,
    // height: 47,
    color: "white",
    backgroundColor: "#212121",
  },
  input: {
    width: 280,
    // height: 40,
    padding: 10,
    paddingBottom: 13,
    color: "white",
    fontSize: 17,
    backgroundColor: "#212121",
    marginLeft: 10,
  },
  loginButton: {
    marginTop: 12,
    width: "100%",
    borderRadius: 8,
    height: 50,
    backgroundColor: "#FFBB3B",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
