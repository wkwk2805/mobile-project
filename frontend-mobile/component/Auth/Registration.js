import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import axios from "axios";
import hostname from "../../util/hostname";

const Registration = ({ navigation }) => {
  const [info, setInfo] = useState({});
  const signup = async () => {
    try {
      const res = await axios.put(`${hostname}/userinfo`, info);
      if (res.data === info.u_email) {
        alert("회원가입이 완료되었습니다.");
        navigation.navigate("Login");
      } else {
        alert("회원가입이 불가합니다.");
      }
    } catch (error) {
      alert("회원가입이 불가합니다.");
      console.log(error);
    }
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
      <TouchableOpacity style={styles.button} onPress={signup}>
        <Text> Sign up </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

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

export default Registration;
