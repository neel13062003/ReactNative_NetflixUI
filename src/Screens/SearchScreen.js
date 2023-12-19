import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";

import DATA_SET from "../Data/movies.json";

const searchicon = require("../assets/icons/searchicon.png");

const image_5 = require("../assets/images/search/image_5.png");
const image_6 = require("../assets/images/search/image_6.jpg");
const image_7 = require("../assets/images/search/image_7.jpg");
const image_8 = require("../assets/images/search/image_8.jpeg");
const image_9 = require("../assets/images/search/image_9.jpg");
const image_10 = require("../assets/images/search/image_10.jpg");
const image_11 = require("../assets/images/search/image_11.jpg");
const image_12 = require("../assets/images/search/image_12.jpg");
const image_13 = require("../assets/images/search/image_13.png");
const image_14 = require("../assets/images/search/image_14.jpg");
const image_15 = require("../assets/images/search/image_15.jpg");
const image_16 = require("../assets/images/search/image_16.png");
const image_17 = require("../assets/images/search/image_17.jpg");
const image_18 = require("../assets/images/search/image_18.jpg");

const data = DATA_SET;

const SearchScreen = () => {
  const [tvShows, setTvShows] = useState(DATA_SET[0].items);
  const [movies, setMovies] = useState(DATA_SET[1].items);

  const [filteredTvShows, setFilteredTvShows] = useState(DATA_SET[0].items);
  const [filteredMovies, setFilteredMovies] = useState(DATA_SET[1].items);

  return (
    <View style={styles.container}>
      <SafeAreaView>


        <View style={styles.searchBoxArea}>
          <View style={styles.searchBox}>
            <View style={styles.iconArea}>
              <Image
                source={searchicon}
                style={styles.searchicon}
                resizeMode="contain"
              />
            </View>
            <View style={styles.inputArea}>
              <TextInput
                style={styles.inputText}
                onChangeText={(text) => {
                  const filteredTvShows = tvShows.filter((element) => {
                    const lowerCaseElement = element.title.toLowerCase();
                    const lowerCaseText = text.toLowerCase();
                    if (lowerCaseElement.includes(lowerCaseText)) {
                      return true;
                    }
                  });
                  setFilteredTvShows(filteredTvShows);

                  const filteredMovies = movies.filter((element) => {
                    const lowerCaseElement = element.title.toLowerCase();
                    const lowerCaseText = text.toLowerCase();
                    if (lowerCaseElement.includes(lowerCaseText)) {
                      return true;
                    }
                  });
                  setFilteredMovies(filteredMovies);
                }}
              />
            </View>
          </View>
        </View>



        <ScrollView>
          {filteredTvShows.length != 0 ? (
            <View style={styles.listSection}>
              <View style={styles.catNameArea}>
                <Text style={styles.catName}>TV SHOWS</Text>
                <View style={styles.catNameAreaSP1}></View>
              </View>

              <FlatList
                data={filteredTvShows}
                numColumns={3}
                key={3}
                scrollEnabled={false}
                renderItem={(items) => {
                  const element = items.item;
                  let imageName = "";

                  if (element.id == 5) {
                    imageName = image_5;
                  }
                  if (element.id == 6) {
                    imageName = image_6;
                  }
                  if (element.id == 7) {
                    imageName = image_7;
                  }
                  if (element.id == 8) {
                    imageName = image_8;
                  }
                  if (element.id == 9) {
                    imageName = image_9;
                  }
                  if (element.id == 10) {
                    imageName = image_10;
                  }
                  if (element.id == 11) {
                    imageName = image_11;
                  }

                  return (
                    <View style={styles.elementArea}>
                      <Image
                        source={imageName}
                        style={styles.imageElement}
                        resizeMode="cover"
                      />
                    </View>
                  );
                }}
              />
            </View>
          ) : null}

          {filteredMovies.length != 0 ? (
            <View style={styles.listSection}>
              <View style={styles.catNameArea}>
                <Text style={styles.catName}>MOVIES</Text>
                <View style={styles.catNameAreaSP2}></View>
              </View>

              <FlatList
                data={filteredMovies}
                numColumns={3}
                key={3}
                scrollEnabled={false}
                renderItem={(items) => {
                  const element = items.item;
                  let imageName = "";

                  if (element.id == 12) {
                    imageName = image_12;
                  }
                  if (element.id == 13) {
                    imageName = image_13;
                  }
                  if (element.id == 14) {
                    imageName = image_14;
                  }
                  if (element.id == 15) {
                    imageName = image_15;
                  }
                  if (element.id == 16) {
                    imageName = image_16;
                  }
                  if (element.id == 17) {
                    imageName = image_17;
                  }
                  if (element.id == 18) {
                    imageName = image_18;
                  }

                  return (
                    <View style={styles.elementArea}>
                      <Image
                        source={imageName}
                        style={styles.imageElement}
                        resizeMode="cover"
                      />
                    </View>
                  );
                }}
              />
            </View>
          ) : null}

          <View style={styles.sectionSP}></View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  searchBoxArea: {
    padding: 40,
    height: 50,
    justifyContent: "center",
  },
  searchBox: {
    height: 40,
    backgroundColor: "#212121",
    borderRadius: 5,
    flexDirection: "row",
  },
  iconArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputArea: {
    flex: 7,
    padding: 5,
  },
  searchicon: {
    width: 16,
    height: 16,
  },
  inputText: {
    flex: 1,
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  listSection: {
    padding: 10,
  },
  catNameArea: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  catName: {
    flex: 3,
    color: "white",
  },
  catNameAreaSP1: {
    flex: 9,
    height: 2,
    backgroundColor: "#FFFFFF50",
  },
  catNameAreaSP2: {
    flex: 12,
    height: 2,
    backgroundColor: "#FFFFFF50",
  },
  elementArea: {
    width: 116,
    height: 160,
    margin: 10,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
  },
  imageElement: {
    width: "100%",
    height: "100%",
  },
  sectionSP: {
    height: 100,
  },
});
