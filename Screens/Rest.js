import React from "react";
import { StatusBar, View, Text, Image } from "react-native";
import CountDown from "react-native-countdown-component";
import styled from "styled-components";
import Ripple from "react-native-material-ripple";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class Rest extends React.Component {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor={"#6600B7"} barStyle={"light-content"} />
        <Body>
          <Title>REST</Title>
          <CountDown
            id={"true"}
            until={0 * 10 + 60}
            size={hp("4")}
            running={this.props.timer}
            onFinish={() => {}}
            digitStyle={{ backgroundColor: null }}
            digitTxtStyle={{ color: "#FFFFFF" }}
            timeToShow={["M", "S"]}
            showSeparator
            separatorStyle={{ color: "#FFFFFF" }}
            timeLabels={false}
          />
          <Ripple
            onPress={() => this.props.navigation.navigate("Start2")}
            rippleOpacity={1}
            rippleSize={180}
            rippleContainerBorderRadius={10}
            rippleColor={"#696969"}
          >
            <Button>
              <Text
                style={{ color: "#6600b7", fontWeight: "bold", fontSize: 15 }}
              >
                Skip
              </Text>
            </Button>
          </Ripple>
        </Body>
        <Content>
          <View>
            <Text
              style={{
                fontSize: hp("4"),
                fontWeight: "bold",
                color: "#7B7979",
              }}
            >
              Next
              <Text> </Text>
              <Text style={{ color: "#6600b7", fontSize: hp("2") }}>2/17</Text>
            </Text>
            <Text
              style={{
                fontSize: hp("3"),
                fontWeight: "bold",
                color: "#2C2C2C",
                marginTop: "1%",
              }}
            >
              Squats
            </Text>
            <Text
              style={{
                fontSize: hp("3"),
                fontWeight: "500",
                color: "#7B7979",
                marginTop: "1%",
              }}
            >
              <Text style={{ fontSize: hp("2") }}>X</Text> 12
            </Text>
          </View>
          <View style={{ marginLeft: "50%" }}>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/Gif/workout.gif")}
            />
          </View>
        </Content>
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
  height: 80%;
  align-items: center;
  justify-content: center;
  background-color: #6600b7;
`;

const Title = styled.Text`
  color: white;
  font-size: ${hp("4")};
  font-style: normal;
  font-weight: bold;

  color: #ffffff;
`;

const Button = styled.View`
  width: ${wp("15")};
  height: ${hp("5")};
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 50px;
`;

const Content = styled.View`
  width: 100%;
  height: 20%;
  flex-direction: row;
  align-items: center;
  padding: 5%;
`;
