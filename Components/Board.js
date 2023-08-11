import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class Board extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: "2%",
          justifyContent: "center",
        }}
      >
        <View style={styles.Board1}>
          <Text style={styles.BoardText1}>Workouts</Text>
          <Text style={styles.BoardText2}>30</Text>
        </View>

        <View style={styles.Board2}>
          <Text style={styles.BoardText1}>KCAL</Text>
          <Text style={styles.BoardText2}>30</Text>
        </View>

        <View style={styles.Board3}>
          <Text style={styles.BoardText1}>MINUTES</Text>
          <Text style={styles.BoardText2}>30</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Board1: {
    width: wp("30"),
    height: 90,
    overflow: "hidden",
    backgroundColor: "#FF565E",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10,
  },
  Board2: {
    width: wp("30"),
    height: 90,
    overflow: "hidden",
    backgroundColor: "#40DF9F",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  Board3: {
    width: wp("30"),
    height: 90,
    overflow: "hidden",
    backgroundColor: "#FFC542",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  BoardText1: {
    fontWeight: "bold",
    color: "white",
    marginBottom: "2%",
    fontSize: hp("2.5"),
  },
  BoardText2: {
    fontWeight: "bold",
    color: "white",
    marginTop: "2%",
    fontSize: hp("2.5"),
  },
});
