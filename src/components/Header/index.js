import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import THEME from "../../utils/themes";
const Header = ({ changeMode, setScreen, screen }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>AL MUNDO .com</Text>
        <View>
          <TouchableOpacity onPress={changeMode} activeOpacity={0.8}>
            <FontAwesome
              name="lightbulb-o"
              size={24}
              color={THEME.colors.orange}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => setScreen("home")} activeOpacity={0.8}>
          <View style={styles.buttonMenu}>
            <FontAwesome
              name="home"
              size={24}
              color={
                screen === "home" ? THEME.colors.orange : THEME.colors.white
              }
            />
            <Text
              style={[
                styles.textMenu,
                screen === "home" && styles.textMenuFocused,
              ]}
            >
              Home
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setScreen("searcher")}
          activeOpacity={0.8}
        >
          <View style={styles.buttonMenu}>
            <FontAwesome
              name="search"
              size={24}
              color={
                screen === "searcher" ? THEME.colors.orange : THEME.colors.white
              }
            />
            <Text
              style={[
                styles.textMenu,
                screen === "searcher" && styles.textMenuFocused,
              ]}
            >
              Searcher
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
