import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./component/Home";
import About from "./component/About";
import Login from "./component/Auth/Login";

const App = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    About: {
      screen: About
    },
    Login: {
      screen: Login
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(App);
