// index.ts
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "../app.json";

// Register for native (Android/iOS) and web
AppRegistry.registerComponent(appName, () => App);

// Web-specific render
if (typeof document !== "undefined") {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById("root"),
  });
}
