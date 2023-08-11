import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";
import { Image, View, Animated, Text } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import Ripple from "react-native-material-ripple";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class Waiting extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Demo>
          <Image source={require("../assets/Gif/waiting.png")} />
        </Demo>
        <Content>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Title>Ready To Go</Title>
            <Title2>Jumping Jacks</Title2>
            <Timer>
              <CountdownCircleTimer
                isPlaying
                size={Math.round(wp("35"))}
                onComplete={() => {
                  // this.props.navigation.navigate("Start");
                }}
                trailColor={"#2A3C44"}
                duration={10}
                colors={[["#C360E6"]]}
              >
                {({ remainingTime, animatedColor }) => (
                  <Animated.Text style={{ color: animatedColor }}>
                    <Text
                      style={{
                        fontSize: Math.round(hp("4%")),
                        color: "#000000",
                        fontWeight: "bold",
                      }}
                    >
                      {remainingTime}
                    </Text>
                  </Animated.Text>
                )}
              </CountdownCircleTimer>
            </Timer>
            <Ripple
              onPress={() => {
                this.props.navigation.navigate("Start");
              }}
              rippleOpacity={1}
              rippleColor={"white"}
            >
              <Button>
                <Text style={{ color: "white", fontSize: 15 }}>SKIP</Text>
              </Button>
            </Ripple>
          </View>
        </Content>
      </SafeAreaView>
    );
  }
}

const Demo = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  width: 100%;
  height: 40%;
`;

const Content = styled.View`
  width: 100%;
  background-color: white;
  height: 60%;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: ${hp("4%")};
  color: #9f00d7;
`;

const Title2 = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: ${hp("2.5")};
  margin-top: 1%;

  color: #444444;
`;

const Timer = styled.View`
  margin-top: ${Math.round(hp("5%"))};
`;

const Button = styled.View`
  width: ${Math.round(wp("50%"))};
  height: ${Math.round(hp("6%"))};
  align-items: center;
  text-align: center;
  align-self: center;
  justify-content: center;
  margin-top: ${Math.round(hp("5%"))};
  background-color: #ff384a;
  border-radius: 50px;
`;
