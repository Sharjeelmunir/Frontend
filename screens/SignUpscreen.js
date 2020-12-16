import * as React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";

const SignUpScreen = () => {
  const [data, setData] = React.useState({
    email:'',
    password:'',
    secureTextEntry:true
  }) ;
  // const [email, setEmail] = useState("") 
  // const [password, setPassword] = useState("") 

const textInputChange = (val) => {
    setData({
      ...data,
      email: val,
    });
}
const handlePassword = (val) => {
  setData({
    ...data,
    password:val
  })
}

  const submitData = () => {
    console.log(data)
    fetch("http://localhost:3000/posts",{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    }) 
  .then(res => res.json())
  .catch(err => console.log('Error', err))
  .then(data => console.log('Success', data));
  }

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
            placeholder="Email"
            // value={email}
            style={styles.textInput}
            onChangeText={(val) => textInputChange(val)}
          />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            onChangeText={(val) => handlePassword(val)}
            secureTextEntry
          />
          <TouchableOpacity
            onPress={() => submitData()}
            style={styles.loginScreenButton}
          >
            <Text style={styles.loginText}> Sign Up</Text>
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

export default SignUpScreen;
