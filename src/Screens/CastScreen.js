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
  ScrollView,
} from "react-native";

import DATA_SET from "../Data/dataset.json";

const backIcon = require("../assets/icons/backIcon.png");

const image_1 = require("../assets/images/movies/image_1.png");
const image_2 = require("../assets/images/movies/image_2.png");
const image_3 = require("../assets/images/movies/image_3.png");
const image_4 = require("../assets/images/movies/image_4.png");

const main_image = require("../assets/images/cast/MichaelPena.png");
const circle_transparent = require("../assets/images/cast/circle_transparent.png");
const data = DATA_SET.app.cast;

const CastScreen = (props) => {
  const { navigation, route } = props;
  const filteredElement = data.filter(
    (element) => element.id == route.params.ID
  );
  const info = filteredElement[0];
  const profile = filteredElement[0].profile.actor;
  const { firstName, lastName } = splitName(info.name);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TouchableOpacity
          style={styles.backButtonArea}
          onPress={() => navigation.goBack()}
          activeOpacity={0.4}
        >
          <Image
            source={backIcon}
            style={styles.backIcon}
            resizeMode="contain"
          />
          <Text style={styles.backText}>BACK</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <View style={styles.main_imageArea}>
        <Image
          source={main_image}
          style={styles.main_image}
          resizeMode="contain"
        />
      </View>
      <Image source={circle_transparent} style={styles.circle_transparent} />

      <View style={styles.nameArea}>
        <Text style={styles.firstname}>{firstName}</Text>
        <Text style={styles.lastname}>{lastName}</Text>
      </View>

      <ScrollView>
        <View style={styles.infoTextArea}>
          <Text style={styles.infoText}>{profile.info.text}</Text>
        </View>

        <View style={styles.knownForArea}>
          <View style={styles.knownForTextArea}>
            <Text style={styles.knownForText}>Known For</Text>
          </View>

          <FlatList
            data={profile.knownFor}
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
                  style={styles.knownForPicArea}
                  activeOpacity={0.9}
                  onPress={() => {
                    if (element.item.profile == "Unknown") {
                      Alert.alert("No Info");
                    } else {
                      // navigation.navigate("Cast", { ID: element.item.id });
                    }
                  }}
                >
                  <Image
                    source={imageName}
                    resizeMode="contain"
                    style={styles.knownForPic}
                  />
                  <Text style={styles.knownForPicText}>
                    {element.item.movieTitle}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

function splitName(name) {
  const parts = name.trim().split(" ");
  const firstName = parts[0];
  const lastName = parts[1];
  return { firstName, lastName };
}

export default CastScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
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
  main_imageArea: {
    width: "100%",
    marginTop: 10,
  },
  main_image: {
    width: "100%",
    height: 300,
  },
  circle_transparent: {
    position: "absolute",
    marginTop: 100,
    width: "70%",
    height: 330,
    opacity: 0.6,
    alignSelf: "center",
  },
  nameArea: {
    marginTop: -50,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  firstname: {
    fontSize: 30,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  lastname: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  infoTextArea: {
    marginTop: 10,
    padding: 20,
  },
  infoText: {
    color: "#FFFFFF",
    fontSize: 17,
  },
  knownForArea: {
    width: "100%",
    marginTop: 20,
  },
  knownForTextArea: {
    margin: 10,
  },
  knownForText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  knownForPicArea: {
    width: 115,
    marginRight: 5,
    marginLeft: 10,
    alignItems: "center",
  },
  knownForPic: {
    width: "100%",
    marginTop: -55,
  },
  knownForPicText: {
    marginTop: -45,
    color: "white",
  },
});
