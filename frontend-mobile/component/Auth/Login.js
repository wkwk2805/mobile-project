import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";

const Login = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <TextInput style={styles.inputText} placeholder="email@gmail.com" />
      <TextInput style={styles.inputText} placeholder="password" />
      <TouchableOpacity style={styles.button}>
        <Text> Login </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: "center", marginTop: 5 }}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

Login.navigationOptions = {
  title: "Login"
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

export default Login;
