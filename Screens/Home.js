import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome5";
import Slides from "../Components/Slides";
import { Container, Row, Col } from "react-grid-system";
import Board from "../Components/Board";
import Cards from "../Components/Cards";
import { connect } from "react-redux";
import Ripple from "react-native-material-ripple";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import firebaseApp from "../firebaseConfig";

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

export default class Home extends React.Component {
  state = {
    CardData: [],
    workoutCardData: [],
  };
  componentDidMount() {
    this.CardData = firebaseApp.database().ref().child("cards");
    this.getCardData(this.CardData);
    this.workoutCardData = firebaseApp.database().ref().child("workoutcards");
    this.getworkoutCardData(this.workoutCardData);
  }

  getCardData = (db) => {
    db.on("value", (snap) => {
      let CardFData = [];
      snap.forEach((child) => {
        CardFData.push({
          image: child.val().images,
        });
      });
      this.setState({
        CardData: CardFData,
      });
    });
  };

  getworkoutCardData = (db) => {
    db.on("value", (snap) => {
      let workoutCardFData = [];
      workoutCardFData = snap.val();
      this.setState({
        workoutCardData: workoutCardFData,
      });
    });
  };

  render() {
    return (
      <SafeAreaView>
        <Body>
          <Header>
            <Menu>
              <Icon name={"bars"} size={24} color="#444444" />
            </Menu>
            <ProfileView>
              <Profile></Profile>
            </ProfileView>
          </Header>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Slides data={this.state.CardData} />

            <Text
              style={{
                fontSize: hp("2.5"),
                color: "#444444",
                fontWeight: "bold",
                marginLeft: "2%",
                marginTop: "2%",
              }}
            >
              Hi, Moganesan
            </Text>
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "center",
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Board />
            </ScrollView>
            <View style={{ marginBottom: "10%" }}>
              <Text
                style={{
                  fontSize: hp("2.4"),
                  color: "#444444",
                  fontWeight: "bold",
                  marginLeft: "2%",
                  marginTop: "2%",
                }}
              >
                BEGINNER
              </Text>
              <Ripple
                rippleOpacity={1}
                rippleColor={"white"}
                rippleCentered={true}
                onPress={() => {
                  this.props.navigation.navigate("Workouts", {
                    title: "ABS BEGINNER",
                  });
                  console.log(this.state.workoutCardData);
                }}
              >
                <Cards
                  image={this.state.workoutCardData.absbeginner.image}
                  title={"ABS BEGINNER"}
                  title2={"16 workouts"}
                />
              </Ripple>
              <Ripple
                rippleOpacity={1}
                rippleColor={"white"}
                rippleCentered={true}
                onPress={() => {
                  this.props.navigation.navigate("Workouts", {
                    title: "CHEST BEGINNER",
                  });
                }}
              >
                <Cards
                  image={
                    "https://images.unsplash.com/photo-1565765228282-e0e7d98d2bb9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
                  }
                  title={"CHEST BEGINNER"}
                  title2={"16 workouts"}
                />
              </Ripple>
              <Ripple
                rippleOpacity={1}
                rippleColor={"white"}
                rippleCentered={true}
                onPress={() => {
                  this.props.navigation.navigate("Workouts", {
                    title: "ARM BEGINNER",
                  });
                }}
              >
                <Cards
                  image={
                    "https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?size=626&ext=jpg&ga=GA1.2.386794013.1604247532"
                  }
                  title={"ARM BEGINNER"}
                  title2={"16 workouts"}
                />
              </Ripple>

              <Ripple
                rippleOpacity={1}
                rippleColor={"white"}
                rippleCentered={true}
                onPress={() => {
                  this.props.navigation.navigate("Workouts", {
                    title: "LEG BEGINNER",
                  });
                }}
              >
                <Cards
                  image={
                    "https://image.freepik.com/free-photo/weights-exercise-weightlifter-strong-athletic_1139-709.jpg"
                  }
                  title={"LEG BEGINNER"}
                  title2={"16 workouts"}
                />
              </Ripple>

              <Ripple
                rippleOpacity={1}
                rippleColor={"white"}
                rippleCentered={true}
                onPress={() => {
                  this.props.navigation.navigate("Workouts", {
                    title: "SHOULDER & BACK BEGINNER",
                  });
                }}
              >
                <Cards
                  title={"SHOULDER & BACK BEGINNER"}
                  title2={"16 workouts"}
                  image={
                    "https://img.freepik.com/free-photo/muscular-young-man-lifting-weights-black-background_7502-5019.jpg?size=626&ext=jpg&ga=GA1.2.386794013.1604247532"
                  }
                />
              </Ripple>

              <Text
                style={{
                  fontSize: hp("2.4"),
                  color: "#444444",
                  fontWeight: "bold",
                  marginLeft: "2%",
                  marginTop: "2%",
                }}
              >
                INTERMEDIATE
              </Text>

              <Ripple
                rippleOpacity={1}
                rippleColor={"white"}
                rippleCentered={true}
                onPress={() => {
                  this.props.navigation.navigate("Workouts", {
                    title: "ABS INTERMEDIATE",
                  });
                }}
              >
                <Cards
                  title={"ABS INTERMEDIATE"}
                  title2={"16 workouts"}
                  image={
                    "https://image.freepik.com/free-photo/bodybuilder-showing-his-muscles_136403-5511.jpg"
                  }
                />
              </Ripple>

              <Ripple
                rippleOpacity={1}
                rippleColor={"white"}
                rippleCentered={true}
                onPress={() => {
                  this.props.navigation.navigate("Workouts", {
                    title: "CHEST INTERMEDIATE",
                  });
                }}
              >
                <Cards
                  title={"CHEST INTERMEDIATE"}
                  title2={"16 workouts"}
                  image={
                    "https://img.freepik.com/free-photo/attractive-male-body-builder_155003-9929.jpg?size=626&ext=jpg&ga=GA1.2.386794013.1604247532"
                  }
                />
              </Ripple>

              <Ripple
                rippleOpacity={1}
                rippleColor={"white"}
                rippleCentered={true}
                onPress={() => {
                  this.props.navigation.navigate("Workouts", {
                    title: "ARM INTERMEDIATE",
                  });
                }}
              >
                <Cards
                  title={"ARM INTERMEDIATE"}
                  title2={"16 workouts"}
                  image={
                    "https://img.freepik.com/free-photo/concentrated-muscular-man-doing-exercise-with-dumbbell_136403-5321.jpg?size=626&ext=jpg&ga=GA1.2.386794013.1604247532"
                  }
                />
              </Ripple>

              <Ripple
                rippleOpacity={1}
                rippleColor={"white"}
                rippleCentered={true}
                onPress={() => {
                  this.props.navigation.navigate("Workouts", {
                    title: "LEG INTERMEDIATE",
                  });
                }}
              >
                <Cards
                  title={"LEG INTERMEDIATE"}
                  title2={"16 workouts"}
                  image={
                    "https://img.freepik.com/free-photo/muscular-tattooed-bearded-male-exercising_136403-9397.jpg?size=626&ext=jpg&ga=GA1.2.386794013.1604247532"
                  }
                />
              </Ripple>

              <Ripple
                rippleOpacity={1}
                rippleColor={"white"}
                rippleCentered={true}
                onPress={() => {
                  this.props.navigation.navigate("Workouts", {
                    title: "SHOULDER & BACK INTERMEDIATE",
                  });
                }}
              >
                <Cards
                  title={"SHOULDER & BACK INTERMEDIATE"}
                  title2={"16 workouts"}
                  image={
                    "https://image.freepik.com/free-photo/sportsman-standing-showing-biceps_171337-7727.jpg"
                  }
                />
              </Ripple>
              <Text
                style={{
                  fontSize: hp("2.4"),
                  color: "#444444",
                  fontWeight: "bold",
                  marginLeft: "2%",
                  marginTop: "2%",
                }}
              >
                ADVANCED
              </Text>

              <Ripple
                rippleOpacity={1}
                rippleColor={"white"}
                rippleCentered={true}
                onPress={() => {
                  this.props.navigation.navigate("Workouts", {
                    title: "ABS ADVANCED",
                  });
                }}
              >
                <Cards
                  title={"ABS ADVANCED"}
                  title2={"16 workouts"}
                  image={"https://wallpapercave.com/wp/wp4107927.jpg"}
                />
              </Ripple>

              <Ripple
                rippleOpacity={1}
                rippleColor={"white"}
                rippleCentered={true}
                onPress={() => {
                  this.props.navigation.navigate("Workouts", {
                    title: "CHEST ADVANCED",
                  });
                }}
              >
                <Cards
                  title={"CHEST ADVANCED"}
                  title2={"16 workouts"}
                  image={
                    "https://img.freepik.com/free-photo/brutal-strong-bodybuilder-athletic-men-pumping-up-muscles-with-dumbbells_174475-671.jpg?size=626&ext=jpg&ga=GA1.2.386794013.1604247532"
                  }
                />
              </Ripple>

              <Ripple
                rippleOpacity={1}
                rippleColor={"white"}
                rippleCentered={true}
                onPress={() => {
                  this.props.navigation.navigate("Workouts", {
                    title: "ARM ADVANCED",
                  });
                }}
              >
                <Cards
                  title={"ARM ADVANCED"}
                  title2={"16 workouts"}
                  image={
                    "https://img.freepik.com/free-photo/muscular-man-lifting-barbell-gym_1163-3548.jpg?size=626&ext=jpg&ga=GA1.2.386794013.1604247532"
                  }
                />
              </Ripple>

              <Ripple
                rippleOpacity={1}
                rippleColor={"white"}
                rippleCentered={true}
                onPress={() => {
                  this.props.navigation.navigate("Workouts", {
                    title: "LEG ADVANCED",
                  });
                }}
              >
                <Cards
                  title={"LEG ADVANCED"}
                  title2={"16 workouts"}
                  image={
                    "https://www.bodybuilding.com/fun/images/2015/hd-high-volume-leg-workout-with-the-harrison-twins-graphics-3.jpg"
                  }
                />
              </Ripple>

              <Ripple
                rippleOpacity={1}
                rippleColor={"white"}
                rippleCentered={true}
                onPress={() => {
                  this.props.navigation.navigate("Workouts", {
                    title: "SHOULDER & BACK ADVANCED",
                  });
                }}
              >
                <Cards
                  title={"SHOULDER & BACK ADVANCED"}
                  title2={"16 workouts"}
                  image={
                    "https://img.freepik.com/free-photo/concept-power-strength-healthy-lifestyle-sport-powerful-attractive-muscular-man-gym_155003-4993.jpg?size=626&ext=jpg&ga=GA1.2.386794013.1604247532"
                  }
                />
              </Ripple>
            </View>
          </ScrollView>
        </Body>
      </SafeAreaView>
    );
  }
}

const Body = styled.View`
  background-color: white;
  height: ${hp("100%")};
  width: ${wp("100%")};
`;

const Header = styled.View`
  width: ${ScreenWidth};
  flex-direction: row;
  align-items: center;
  height: 60px;
`;

const Menu = styled.View`
  flex: 1;
  margin-left: 10px;
`;

const ProfileView = styled.View`
  margin-right: 10px;
`;

const Profile = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #c4c4c4;
`;
