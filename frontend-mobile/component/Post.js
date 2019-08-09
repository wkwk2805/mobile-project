import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./Post/Home";
import About from "./Post/About";

const Post = createStackNavigator(
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

export default createAppContainer(Post);
