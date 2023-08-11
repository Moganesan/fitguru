import React from "react";
import styled from "styled-components";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import Ripple from "react-native-material-ripple";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import firebaseApp from "../firebaseConfig";

export default class Workouts extends React.Component {
  componentDidMount() {
    const { title } = this.props.route.params;
    this.props.navigation.setOptions({ title: title });
    // this.workoutsList = firebaseApp
    //   .database()
    //   .ref()
    //   .child("workouts")
    //   .child(title);
    // this.workoutsList.on("value", (snap) => {
    //   let data = [];
    //   snap.forEach((child) => {
    //     data.push(child.val());
    //   });
    //   console.log(data);
    // });
  }

  render() {
    return (
      <Container>
        <Title>
          <Bar />
          <TitleText>20 mins</TitleText>
          <TitleText>-</TitleText>
          <TitleText>10 workouts</TitleText>
        </Title>

        <ScrollView>
          <Line />
          <View>
            <Workout>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../assets/Gif/workout.gif")}
              />
              <Items>
                <WorkoutTitle>JUMPING JACKS</WorkoutTitle>
                <WorkoutTiming>00:20</WorkoutTiming>
              </Items>
            </Workout>
            <Line />
          </View>

          <View>
            <Workout>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../assets/Gif/workout.gif")}
              />
              <Items>
                <WorkoutTitle>JUMPING JACKS</WorkoutTitle>
                <WorkoutTiming>00:20</WorkoutTiming>
              </Items>
            </Workout>
            <Line />
          </View>
          <View>
            <Workout>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../assets/Gif/workout.gif")}
              />
              <Items>
                <WorkoutTitle>JUMPING JACKS</WorkoutTitle>
                <WorkoutTiming>00:20</WorkoutTiming>
              </Items>
            </Workout>
            <Line />
          </View>
          <View>
            <Workout>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../assets/Gif/workout.gif")}
              />
              <Items>
                <WorkoutTitle>JUMPING JACKS</WorkoutTitle>
                <WorkoutTiming>00:20</WorkoutTiming>
              </Items>
            </Workout>
            <Line />
          </View>
          <View>
            <Workout>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../assets/Gif/workout.gif")}
              />
              <Items>
                <WorkoutTitle>JUMPING JACKS</WorkoutTitle>
                <WorkoutTiming>00:20</WorkoutTiming>
              </Items>
            </Workout>
            <Line />
          </View>
          <View>
            <Workout>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../assets/Gif/workout.gif")}
              />
              <Items>
                <WorkoutTitle>JUMPING JACKS</WorkoutTitle>
                <WorkoutTiming>00:20</WorkoutTiming>
              </Items>
            </Workout>
            <Line />
          </View>
          <View>
            <Workout>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("../assets/Gif/workout.gif")}
              />
              <Items>
                <WorkoutTitle>JUMPING JACKS</WorkoutTitle>
                <WorkoutTiming>00:20</WorkoutTiming>
              </Items>
            </Workout>
            <Line />
          </View>
          <Ripple
            onPress={() => {
              this.props.navigation.navigate("Waiting");
            }}
            rippleOpacity={1}
            rippleColor={"white"}
          >
            <Button>
              <Text style={{ color: "white", fontSize: hp("2%") }}>START</Text>
            </Button>
          </Ripple>
        </ScrollView>
      </Container>
    );
  }
}

const Container = styled.View`
  background-color: white;
  margin-bottom: 50px;
  height: ${hp("100%")};
  width: ${wp("100%")};
`;

const Title = styled.View`
  flex-direction: row;
  padding: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
`;

const TitleText = styled.Text`
  font-weight: bold;
  font-size: ${Math.round(hp("2%"))};
  color: #444444;
`;

const Bar = styled.View`
  border: 2px solid #0fbab8;
  margin-right: 5px;
`;

const Line = styled.View`
  border: 1px solid #dadada;
`;

const Workout = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px;
`;

const Items = styled.View`
  margin-left: 20px;
`;

const WorkoutTitle = styled.Text`
  color: #444444;
  font-weight: bold;
  font-size: ${Math.round(hp("2%"))};
`;

const WorkoutTiming = styled.Text`
  margin-top: 10px;
  color: #8a8a8a;
`;

const Button = styled.View`
  width: ${Math.round(wp("50%"))};
  height: ${Math.round(hp("6%"))};
  align-items: center;
  text-align: center;
  align-self: center;
  justify-content: center;
  margin-top: ${Math.round(hp("3%"))};
  margin-bottom: ${Math.round(hp("20%"))};
  background-color: #ff384a;
  box-shadow: 0px 4px 20px rgba(255, 56, 74, 0.5);
  border-radius: 50px;
`;
