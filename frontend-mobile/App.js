import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./component/Home";
import About from "./component/About";
import Layout from "./component/Layout";

const App = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    About: {
      screen: About
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(App);
