import React, { useState, useEffect } from "react";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

import Home from "./components/Home.js";

const App = () => {
  let [fontsLoaded] = useFonts({
    acnh: require("./assets/fonts/nintendoP_Humming-E_002pr.otf"),
  });

  if (fontsLoaded) {
    return <Home />;
  } else {
    return <AppLoading />;
  }
};

export default App;
