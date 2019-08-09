import React, { useEffect } from "react";
import { Text } from "react-native";
import Menu from "./Menu";

const Home = prop => {
  return (
    <>
      <Menu nav={prop.navigation} />
      <Text>Hello React Native</Text>
    </>
  );
};

Home.navigationOptions = {
  title: "Home",
  headerStyle: {
    backgroundColor: "#f4511e"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};

export default Home;
