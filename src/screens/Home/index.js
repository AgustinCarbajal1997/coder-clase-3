import { Image, View } from "react-native";
import React from "react";
import styles from "./styles";
import useOrientarion from "../../hook/useOrientation";

const Home = ({ mode }) => {
  const { orientation } = useOrientarion();
  console.log("orientation", orientation);
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
      </View>
    </View>
  );
};

export default Home;
