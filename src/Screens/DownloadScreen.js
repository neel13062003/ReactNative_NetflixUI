import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView, ScrollView,
} from "react-native";

import DATA_SET from "../Data/download.json";

const image_1 = require("../assets/images/download/image_1.png");
const image_2 = require("../assets/images/download/image_2.png");
const image_3 = require("../assets/images/download/image_3.png");
const image_4 = require("../assets/images/download/image_4.png");
const image_5 = require("../assets/images/download/image_5.png");
const image_6 = require("../assets/images/download/image_6.png");

const data = DATA_SET;

const DownloadScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.listPallet}>
          {data.map((element) => {
            let imageName = "";
            if (element.id == 1) {
              imageName = image_1;
            }
            if (element.id == 2) {
              imageName = image_2;
            }
            if (element.id == 3) {
              imageName = image_3;
            }
            if (element.id == 4) {
              imageName = image_4;
            }
            if (element.id == 5) {
              imageName = image_5;
            }
            if (element.id == 6) {
              imageName = image_6;
            }
            return (
              <View style={styles.elementArea} key={element.id}>
                <View style={styles.elementImageArea}>
                  <Image
                    source={imageName}
                    style={styles.elementImage}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.elementInfoArea}>
                  <Text style={styles.elementInfoTitle}>{element.title}</Text>
                  <View style={styles.elementInfo}>
                    {element.episodes !== 0 ? (
                      <>
                        <Text style={styles.elementInfo1}>
                          {element.episodes} Episodes
                        </Text>
                        <Text style={styles.elementInfo1}> | </Text>
                      </>
                    ) : null}

                    <Text style={styles.elementInfo2}>{element.size}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DownloadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  safeArea: {
    flex: 1,
  },
  listPallet: {
    margin: 20,
  },
  elementArea: {
    flexDirection: "row",
    marginBottom: 25,
  },
  elementImageArea: {
    width: 170,
  },
  elementImage: {
    width: "100%",
    height: 100,
  },
  elementInfoArea: {
    flex: 1,
    padding: 13,
    justifyContent: "center",
  },
  elementInfoTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 5,
  },
  elementInfo: {
    flexDirection: "row",
  },
  elementInfo1: {
    color: "#FFFFFF95",
  },
  elementInfo2: {
    color: "#FFFFFF95",
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
