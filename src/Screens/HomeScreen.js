import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,  ScrollView,
} from "react-native";

import DATA_SET from "../Data/dataset.json";
import { FlatList } from "react-native";

const doraMainImage = require("../assets/images/doramainImage.png");
const image_1 = require("../assets/images/1.png");
const image_2 = require("../assets/images/2.png");
const image_3 = require("../assets/images/3.png");
const image_4 = require("../assets/images/4.png");

const star = require("../assets/icons/star.png");
const star_active = require("../assets/icons/star_active.png");

const data = DATA_SET.app;

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

const GenresSection = () => {
  const genres = data.header.genres;
  const spCutOff = genres.length - 1;
  return (
    <>
      {genres.map((element, index) => {
        return (
          <>
            <Text key={index} style={styles.genresText}>{element}</Text>
            {index === spCutOff ? null : (
              <Text style={styles.genresTextSp}>{`|`}</Text>
            )}
          </>
        );
      })}
    </>
  );
};

const CurrentlyWatchingSection = () => {
  return (
    <View style={styles.currentlyWatching}>
      <FlatList
        data={data.currentWatching}
        horizontal={true}
        renderItem={(element) => {

          let imageName = '';
          if (element.item.id == 1) { imageName = image_1 }
          if (element.item.id == 2) { imageName = image_2 }
          if (element.item.id == 3) { imageName = image_3 }
          if (element.item.id == 4) { imageName = image_4 }

          return (
            <View key={element.item.id} style={styles.currentlyWatchingPicArea}>
              <Image source={imageName} resizeMode="contain" style={styles.currentlyWatchingPic}/>
            </View>
          )
        }}
      />
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('Detail');
        }}
        style={styles.mainImageArea}
      >
        <Image
          source={doraMainImage}
          style={styles.mainImage}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View style={styles.ratingsSection}>
        <Text style={styles.number}>{data.header.rating}.0</Text>
        <View style={styles.ratingsStarSection}>
          <StarSection />
        </View>

        <View style={styles.genresSection}>
          <GenresSection />
        </View>

        <View style={styles.currentlyWatchingSection}>
          <Text style={styles.currentlyWatchingText}>Watching</Text>
          <CurrentlyWatchingSection />
        </View>
      </View>
      </ScrollView >
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  mainImageArea: {
    width: "100%",
    height: 520,
    justifyContent: "center",
  },
  mainImage: {
    width: "100%",
  },
  ratingsSection: {
    width: "100%",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    color: "white",
    fontSize: 30,
  },
  ratingsStarSection: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  star: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
  },
  starIcon: {
    width: 20,
  },
  genresSection: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom:10,
  },
  genresText: {
    color: "white",
    marginRight: 16,
    marginLeft: 16,
  },
  genresTextSp: {
    color: "white",
  },
  currentlyWatchingSection: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
    height: 180,
  },
  currentlyWatching: {
    width: "100%",
    height: "100%",
  },
  currentlyWatchingText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop:10,
  },
  currentlyWatchingPicArea: {
    width: 100,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -10,
    marginBottom:10,
  }, 
  currentlyWatchingPic: {
    width: '100%',
    marginTop: -10,
    marginRight:10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
