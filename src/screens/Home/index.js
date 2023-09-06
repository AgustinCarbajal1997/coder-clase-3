import { Image, Text, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

const Home = ({ mode }) => {
  return (
    <View style={[styles.container, styles[mode]]}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://e7.pngegg.com/pngimages/755/307/png-clipart-arecaceae-beach-beaches-beach-computer-wallpaper.png",
          }}
        />
      </View>
    </View>
  );
};

export default Home;
