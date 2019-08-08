import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Menu = ({ nav }) => {
  const move = root => {
    nav.navigate(root);
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          move("Home");
        }}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          move("About");
        }}
      >
        <Text>About</Text>
      </TouchableOpacity>
    </>
  );
};

export default Menu;
