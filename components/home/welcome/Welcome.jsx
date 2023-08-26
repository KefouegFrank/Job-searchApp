import React from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import styles from "./welcome.style";
import { icons } from "../../../constants";

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View>
        <Text style={styles.container}>Hello Frank</Text>
        <Text style={styles.welcomeMessage}>Find your dream job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="what are you looking for"
            placeholderTextColor="gray"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtn}
          />
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default Welcome;
