import { View } from "react-native";
import Home from "./src/screens/Home";
import Searcher from "./src/screens/Searcher";
import Header from "./src/components/Header";
import { useState } from "react";
import { useFonts } from "expo-font";
import { FONTS } from "./src/utils/fonts";

export default function App() {
  const [fontsLoaded] = useFonts(FONTS);
  const [screen, setScreen] = useState("home");
  const [mode, setMode] = useState("lightmode");

  const changeMode = () => {
    setMode(mode === "lightmode" ? "darkmode" : "lightmode");
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Header
          mode={mode}
          changeMode={changeMode}
          setScreen={setScreen}
          screen={screen}
        />
      </View>
      {screen === "home" && <Home />}
      {screen === "searcher" && <Searcher mode={mode} />}
    </View>
  );
}
