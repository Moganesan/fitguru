import React from "react";
import { StatusBar, View, Text, Image } from "react-native";
import CountDown from "react-native-countdown-component";
import styled from "styled-components";
import Ripple from "react-native-material-ripple";
import LottieView from "lottie-react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class Completed extends React.Component {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor={"#6600B7"} barStyle={"light-content"} />
        <Body>
          <View
            style={{
              width: "100%",
              height: "100%",
              marginBottom: "30%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LottieView
              style={{ position: "absolute", marginTop: "10%" }}
              autoPlay
              source={require("../assets/animations/blast.json")}
            />
            <LottieView
              style={{
                position: "absolute",
                marginBottom: hp("10"),
                width: wp("100%"),
                height: hp("60"),
              }}
              autoPlay
              loop={false}
              source={require("../assets/animations/trophi.json")}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: hp("5"),
                color: "white",
                marginTop: "88%",
              }}
            >
              COMPLETED
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: hp("5"),
                width: "100%",
                height: "20%",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  width: wp("30"),
                  height: hp("20"),
                }}
              >
                <Title style={{ fontSize: hp("5") }}>19</Title>
                <Title>Excercises</Title>
              </View>
              <View
                style={{
                  alignItems: "center",
                  width: wp("30"),
                  height: hp("20"),
                }}
              >
                <Title style={{ fontSize: hp("5") }}>19</Title>
                <Title>Kcal</Title>
              </View>
              <View
                style={{
                  alignItems: "center",
                  width: wp("30"),
                  height: hp("20"),
                }}
              >
                <Title style={{ fontSize: hp("5") }}>19</Title>
                <Title>Duration</Title>
              </View>
            </View>
          </View>
        </Body>
        <Content></Content>
      </Container>
    );
  }
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Body = styled.View`
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;
  background-color: #6600b7;
`;

const Title = styled.Text`
  color: white;
  font-size: ${hp("3")};
  font-style: normal;
  font-weight: bold;

  color: #ffffff;
`;

const Content = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  padding: 10%;
`;
