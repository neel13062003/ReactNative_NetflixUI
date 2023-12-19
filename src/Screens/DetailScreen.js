import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Alert,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import DATA_SET from "../Data/dataset.json";

const detailbgimage = require("../assets/images/detailbgimage.png");
const image_1 = require("../assets/images/cast/cast_1.png");
const image_2 = require("../assets/images/cast/cast_2.png");
const image_3 = require("../assets/images/cast/cast_3.png");
const image_4 = require("../assets/images/cast/cast_4.png");

const backIcon = require("../assets/icons/backIcon.png");
const play_button = require("../assets/icons/play_button.png");
const star = require("../assets/icons/star.png");
const star_active = require("../assets/icons/star_active.png");

const data = DATA_SET.app;

const GenresSection = () => {
  const genres = data.header.genres;
  const spCutOff = genres.length - 1;
  return (
    <>
      {genres.map((element, index) => {
        return (
          <>
            <Text key={index} style={styles.genresText}>{`${element}`}</Text>
            {index === spCutOff ? null : (
              <Text style={styles.genresTextSp}>{`|`}</Text>
            )}
          </>
        );
      })}
    </>
  );
};

const StarSection = () => {
  const maxStars = [0, 1, 2, 3, 4];
  const currentStars = data.header.rating;

  return (
    <>
      {maxStars.map((element) => {
        if (element < currentStars) {
          return (
            <View style={styles.star}>
              <Image
                source={star_active}
                resizeMode="contain"
                style={styles.starIcon}
              />
            </View>
          );
        } else {
          return (
            <View style={styles.star}>
              <Image
                source={star}
                resizeMode="contain"
                style={styles.starIcon}
              />
            </View>
          );
        }
      })}
    </>
  );
};

const DetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <SafeAreaView>
          <TouchableOpacity
            style={styles.backButtonArea}
            onPress={() => navigation.goBack()}
            activeOpacity={0.9}
          >
            <Image
              source={backIcon}
              style={styles.backIcon}
              resizeMode="contain"
            />
            <Text style={styles.backText}>BACK</Text>
          </TouchableOpacity>
        </SafeAreaView>

        <TouchableOpacity style={styles.play_buttonArea} activeOpacity={0.4}>
          <Image
            source={play_button}
            resizeMode="cover"
            style={styles.play_button}
          />
        </TouchableOpacity>

        <View style={styles.bgcover}>
          <LinearGradient
            colors={["orange", "transparent"]}
            style={styles.topGradient}
          ></LinearGradient>
          <View style={styles.detailbgimageArea}>
            <Image
              source={detailbgimage}
              resizeMode="cover"
              style={styles.detailbgimage}
            />
          </View>
          <LinearGradient
            colors={["transparent", "green"]}
            style={styles.bottomGradient}
          >
            <View style={styles.mainImageBottomSection}>
              <Text style={styles.mainImageBottomSectionText}>
                {data.header.title}
              </Text>
              <View style={styles.genresSection}>
                <GenresSection />
              </View>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.ratingsSection}>
          <Text style={styles.number}>{data.header.rating}.0</Text>
          <View style={styles.ratingsStarSection}>
            <StarSection />
          </View>
        </View>

        <View style={styles.descriptionTextArea}>
          <Text style={styles.descriptionText}>{data.header.summary}</Text>
        </View>

        <View style={styles.watchNowButtonArea}>
          <TouchableOpacity activeOpacity={0.9} style={styles.watchNowButton}>
            <Text style={styles.watchNowButtonText}>WATCH NOW</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.castArea}>
          <View style={styles.castTextArea}>
            <Text style={styles.castText}>Cast</Text>
          </View>

          <FlatList
            data={data.cast}
            horizontal={true}
            renderItem={(element) => {
              let imageName = "";
              if (element.item.id == 1) {
                imageName = image_1;
              }
              if (element.item.id == 2) {
                imageName = image_2;
              }
              if (element.item.id == 3) {
                imageName = image_3;
              }
              if (element.item.id == 4) {
                imageName = image_4;
              }

              return (
                <TouchableOpacity
                  key={element.item.id}
                  style={styles.castPicArea}
                  activeOpacity={0.9}
                  onPress={() => {
                    if (element.item.profile == 'Unknown') {
                      Alert.alert("No Info");
                    } else {
                      navigation.navigate('Cast', { ID: element.item.id });
                    }

                  }}
                >
                  <Image
                    source={imageName}
                    resizeMode="contain"
                    style={styles.castPic}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    maxHeight: "100%",
  },
  scrollview: {
    flex: 1,
    marginBottom: 20,
  },
  bgcover: {
    width: "100%",
    zIndex: -1,
    position: "absolute",
  },
  backButtonArea: {
    width: 80,
    height: 50,
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  backIcon: {
    width: 12,
    height: 12,
  },
  backText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  play_buttonArea: {
    marginTop: 120,
    width: "100%",
    position: "absolute",
    height: 130,
    justifyContent: "center",
    alignItems: "center",
  },
  play_button: {
    width: 60,
    height: 60,
  },
  topGradient: {
    zIndex: 10,
    position: "absolute",
    width: "100%",
    height: 100,
  },
  bottomGradient: {
    zIndex: 10,
    position: "absolute",
    top: 250,
    width: "100%",
    height: 100,
  },
  mainImageBottomSection: {
    padding: 10,
    width: "100%",
    height: "100%",
  },
  mainImageBottomSectionText: {
    marginTop: 30,
    color: "white",
    fontSize: 20,
  },
  genresSection: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -15,
    marginTop: 10,
  },
  genresText: {
    color: "white",
    marginRight: 16,
    marginLeft: 16,
  },
  genresTextSp: {
    color: "white",
  },
  ratingsSection: {
    width: "100%",
    marginTop: 260,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingsStarSection: {
    width: "100%",
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: "white",
    fontSize: 27,
  },
  star: {
    justifyContent: "center",
    alignItems: "center",
    width: 25,
  },
  starIcon: {
    width: 15,
  },
  detailbgimageArea: {
    width: "100%",
    height: 340,
  },
  detailbgimage: {
    width: "100%",
    height: "100%",
  },
  descriptionTextArea: {
    margin: 10,
    marginTop: 30,
  },
  descriptionText: {
    color: "#CBCBCB",
    fontSize: 17,
  },
  watchNowButtonArea: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  watchNowButton: {
    marginTop: 20,
    width: 170,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#FFBB3B",
    justifyContent: "center",
    alignItems: "center",
  },
  watchNowButtonText: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  castArea: {
    width: "100%",
    height: 210,
    marginTop: 20,
  },
  castTextArea: {
    margin: 10,
  },
  castText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  castPicArea: {
    width: 115,
    height: 160,
    marginRight: 5,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  castPic: {
    width: "100%",
    marginTop: 10,
    marginBottom:20,
  },
});
