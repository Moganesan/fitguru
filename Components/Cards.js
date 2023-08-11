import React from "react";
import styled from "styled-components";
import { View, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class Cards extends React.Component {
  render() {
    return (
      <View>
        <Container>
          <Image
            style={{ width: "100%", height: "100%", position: "absolute" }}
            source={{
              uri: this.props.image,
            }}
          />
          <Title>{this.props.title}</Title>
          <Title2>{this.props.title2 + " " + "Workouts"}</Title2>
          <Levels>
            <Icon name={"star"} style={{ color: "white" }} size={wp("3.5")} />
            <Icon
              name={"star"}
              style={{ color: "white", paddingLeft: 5 }}
              size={wp("3.5")}
            />
            <Icon
              name={"star"}
              style={{ color: "white", paddingLeft: 5 }}
              size={wp("3.5")}
            />
          </Levels>
        </Container>
      </View>
    );
  }
}

const Container = styled.View`
  width: 95%;
  height: 172px;
  align-self: center;
  margin-top: 2%;
  padding-left: 2%;
  overflow: hidden;
  background-color: black;
  border-radius: 10px;
`;

const Title = styled.Text`
  color: white;
  margin-top: 2%;
  justify-content: flex-end;
  font-size: ${hp("2.5")};
  font-weight: bold;
`;

const Title2 = styled.Text`
  color: #c2c2c2;
  font-size: ${hp("1.5")};
  font-weight: bold;
`;

const Levels = styled.View`
  height: 15%;
  position: absolute;
  left: 10px;
  bottom: 0;
  flex-direction: row;
`;
