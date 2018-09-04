import { Navigation } from "react-native-navigation";

import SideMenu from "./sideMenuScreen";
import Home from "./home/home";
import Hot from "./home/hot";
import Feed from "./home/feed";
import Post from "./single-post/post";
import Profile from "./profile/profile";
import Author from "./author-profile/author";
import Login from "./login/login";
import Wallet from "./wallet/wallet";
import Editor from "./editor/editor";
import Discover from "./discover/discover";
import Settings from "./settings/settings";
import Notifications from "./notifications/notification";
import PostCard from "../components/post-card/postCard";

function registerScreens() {
    Navigation.registerComponent("navigation.eSteem.Home", () => Home);
    Navigation.registerComponent("navigation.eSteem.Hot", () => Hot);
    Navigation.registerComponent("navigation.eSteem.Feed", () => Feed);
    Navigation.registerComponent("navigation.eSteem.Post", () => Post);
    Navigation.registerComponent("navigation.eSteem.Login", () => Login);
    Navigation.registerComponent("navigation.eSteem.Wallet", () => Wallet);
    Navigation.registerComponent("navigation.eSteem.Editor", () => Editor);
    Navigation.registerComponent("navigation.eSteem.Discover", () => Discover);
    Navigation.registerComponent("navigation.eSteem.Settings", () => Settings);
    Navigation.registerComponent(
        "navigation.eSteem.Notifications",
        () => Notifications
    );
    Navigation.registerComponent(
        "navigation.eSteem.SideMenuScreen",
        () => SideMenu
    );
    Navigation.registerComponent("navigation.eSteem.Profile", () => Profile);
    Navigation.registerComponent("navigation.eSteem.Author", () => Author);
    Navigation.registerComponent("navigation.eSteem.PostCard", () => PostCard);
}

module.exports = {
    registerScreens,
};