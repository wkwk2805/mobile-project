import React from "react";
import { Text } from "react-native";
import Menu from "./Menu";

const About = ({ navigation }) => {
  return (
    <>
      <Menu nav={navigation} />
      <Text>Hello About</Text>
    </>
  );
};

About.navigationOptions = {
  title: "About",
  headerStyle: {
    backgroundColor: "purple"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};

export default About;
