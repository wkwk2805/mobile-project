import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import hostname from "../../util/hostname";

const Login = ({ navigation }) => {
  const [info, setInfo] = useState({});
  const loginEvent = async () => {
    try {
      const res = await axios.post(`${hostname}/confirm`, info);
      if (res.data && res.data.result) {
        alert("로그인 성공");
        navigation.navigate("Post");
      } else {
        alert(res.data.msg);
      }
    } catch (error) {
      console.log(error);
      alert("로그인 실패");
    }
  };
  const signupEvent = () => {
    navigation.navigate("Registration");
  };
  const changeEvent = (text, branch) => {
    setInfo({
      ...info,
      [branch]: text
    });
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <TextInput
        style={styles.inputText}
        placeholder="email@gmail.com"
        onChangeText={text => changeEvent(text, "u_email")}
        value={info.email}
      />
      <TextInput
        style={styles.inputText}
        placeholder="password"
        onChangeText={text => changeEvent(text, "u_password")}
        value={info.password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={loginEvent}>
        <Text> Login </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center", marginTop: 5 }}
        onPress={signupEvent}
      >
        <Text>Sign up</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

Login.navigationOptions = { header: null };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  inputText: {
    padding: 10,
    margin: 5,
    marginTop: 0,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "grey"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginLeft: 5,
    marginRight: 5
  }
});

export default Login;
