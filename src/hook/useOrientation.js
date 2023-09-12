import { useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";

function useOrientarion() {
  const [orientation, setOrientation] = useState(null);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (height > width) {
      setOrientation("portrait");
    } else {
      setOrientation("landscape");
    }
  }, [height, width]);

  return { orientation };
}

export default useOrientarion;
