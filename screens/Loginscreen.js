import * as React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";

const LoginScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    secureTextEntry: true,
  });

  const textInputChange = (val) => {
    setData({
      ...data,
      email: val,
    });
  };
  return (
    <ImageBackground
      source={require("../assets/Background_2.png")}
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/LoginLogo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.loginTab}>
          <TextInput
            placeholder="Username"
            style={styles.textInput}
            onChangeText={(val) => textInputChange(val)}
          />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry
          />
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.pwtext}>Forgot Password?</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.loginScreenButton}
          >
            <Text style={styles.loginText}> Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.newBtn}>
          <Text style={{ color: "rgba(156, 168, 189,1.0)" }}>New?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
            <Text style={{ fontWeight: "bold", color: "orange" }}>
              {" "}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  logo: {
    width: 125,
    height: 125,
    resizeMode: "contain",
  },
  loginTab: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 15,
    paddingVertical: 15,
    marginHorizontal: 20,
  },
  textInput: {
    borderBottomColor: "rgba(239, 239, 239, 1.0)",
    borderBottomWidth: 1,
    marginTop: 20,
    marginBottom: 15,
    height: 30,
  },
  logoContainer: {
    justifyContent: "flex-start",
    marginTop: "30%",
    alignItems: "center",
  },
  loginScreenButton: {
    paddingHorizontal: 40,
    paddingVertical: 13,
    backgroundColor: "orange",
    borderRadius: 30,
    borderWidth: 1,
    alignItems: "center",
    borderColor: "orange",
  },
  pwtext: {
    marginBottom: 20,
    marginTop: 8,
    fontSize: 12,
    fontWeight: "500",
  },
  newBtn: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    flexDirection: "row",
  },
});

export default LoginScreen;
