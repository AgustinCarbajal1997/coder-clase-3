import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import useOrientarion from "../../hook/useOrientation";

const Home = ({ mode, navigation }) => {
  const { orientation } = useOrientarion();

  return (
    <View style={[styles.container, styles[mode]]}>
      <View>
        <Image
          style={
            orientation === "portrait"
              ? styles.imagePortrait
              : styles.imageLanscape
          }
          source={{
            uri: "https://e7.pngegg.com/pngimages/755/307/png-clipart-arecaceae-beach-beaches-beach-computer-wallpaper.png",
          }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Searcher")}>
            <Text style={styles.buttonText}>Buscador de lugares</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
