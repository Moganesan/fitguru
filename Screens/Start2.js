import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";
import {
  Image,
  View,
  Animated,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import Ripple from "react-native-material-ripple";
import AlertBox from "./AlertBox";
import Icon from "react-native-vector-icons/FontAwesome5";
import CountDown from "react-native-countdown-component";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function mapStateToProps(state) {
  return {
    alert: state.alert,
    timer: state.timer,
    restart: state.restart,
    quit: state.quit,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openAlert: () => {
      dispatch({
        type: "open",
      });
    },
  };
}

class Start extends React.Component {
  componentDidUpdate() {
    if (this.props.restart == true) {
      this.props.navigation.navigate("Workouts");
    }
    if (this.props.quit == true) {
      this.props.navigation.navigate("Home");
    }
  }
  render() {
    return (
      <SafeAreaView>
        <View style={{ width: "100%", height: "100%" }}>
          <Demo>
            <Image source={require("../assets/Gif/waiting.png")} />
          </Demo>
          <Content>
            <Title>Ready To Go</Title>
            <Title2>Jumping Jacks</Title2>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: hp("5"),
                justifyContent: "center",
              }}
            >
              <Icon
                style={{ fontWeight: "bold", marginTop: 3, marginRight: 2 }}
                size={20}
                name={"times"}
              />
              <Text style={{ fontSize: hp("4"), fontWeight: "bold" }}>12</Text>
            </View>
            <Ripple
              onPress={() => this.props.navigation.navigate("Completed")}
              rippleOpacity={1}
              rippleColor={"white"}
            >
              <Button>
                <Text style={{ color: "white", fontSize: wp("4") }}>Done</Text>
              </Button>
            </Ripple>

            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                height: hp("1"),
                marginTop: hp("8"),
              }}
            >
              <Ripple
                rippleOpacity={1}
                rippleColor={"#595959"}
                rippleCentered={true}
                rippleSize={140}
                rippleContainerBorderRadius={20}
              >
                <View
                  style={{
                    flexDirection: "row",
                    width: "90%",
                    height: 50,

                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    style={{ marginRight: 5 }}
                    name={"fast-backward"}
                    color={"#595959"}
                    size={wp("5")}
                  />
                  <Previous>Previous</Previous>
                </View>
              </Ripple>
              <Ripple
                rippleOpacity={1}
                rippleColor={"#595959"}
                rippleCentered={true}
                onPress={() => this.props.navigation.navigate("Completed")}
                rippleSize={140}
                rippleContainerBorderRadius={20}
                style={{ marginLeft: "20%" }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    width: "80%",
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Skip>Skip</Skip>
                  <Icon
                    style={{ marginLeft: 5 }}
                    name={"fast-forward"}
                    color={"#595959"}
                    size={wp("5")}
                  />
                </View>
              </Ripple>
            </View>
          </Content>
          <AlertBox />
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Start);

const Demo = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 50%;
  background-color: #fafafa;
`;

const Content = styled.View`
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 50%;
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

const Button = styled.View`
  width: ${Math.round(wp("50%"))};
  height: ${Math.round(hp("6%"))};
  align-items: center;
  text-align: center;
  align-self: center;
  justify-content: center;
  margin-top: ${Math.round(hp("5%"))};
  background-color: #ff384a;
  box-shadow: 0px 4px 20px rgba(255, 56, 74, 0.5);
  border-radius: 50px;
`;

const Previous = styled.Text`
  font-weight: bold;
  font-size: ${hp("2.5")};
  color: #595959;
`;

const Skip = styled.Text`
  font-weight: bold;
  font-size: ${hp("2.5")};
  color: #595959;
`;
