import React, { useEffect } from "react";
import { Text } from "react-native";
import Menu from "./Menu";
import Layout from "./Layout";

const Home = prop => {
  return (
    <Layout>
      <Menu nav={prop.navigation} />
      <Text>Hello React Native</Text>
    </Layout>
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
