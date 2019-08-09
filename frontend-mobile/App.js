import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Home from "./component/Post/Home";
import About from "./component/Post/About";
import Login from "./component/Auth/Login";
import Registration from "./component/Auth/Registration";
import Post from "./component/Post";

const App = createSwitchNavigator(
  {
    Login: {
      screen: Login
    },
    Registration: {
      screen: Registration
    },
    Post: {
      screen: Post
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(App);
