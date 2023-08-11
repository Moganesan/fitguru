import React from "react";
import styled from "styled-components";
import { Animated, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ripple from "react-native-material-ripple";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { alert: state.alert };
}

function mapDispatchToProps(dispatch) {
  return {
    closeAlert: () =>
      dispatch({
        type: "close",
      }),
    restart: () =>
      dispatch({
        type: "restart",
      }),
    quit: () =>
      dispatch({
        type: "quit",
      }),
  };
}

const Screenheight = Dimensions.get("window").height;

class AlertBox extends React.Component {
  state = {
    top: new Animated.Value(Screenheight),
  };
  componentDidUpdate() {
    if (this.props.alert == true) {
      Animated.spring(this.state.top, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
    if (this.props.alert == false) {
      Animated.spring(this.state.top, {
        toValue: 900,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }
  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <BlackScreen />
        <Box>
          <Title>Pause</Title>
          <View
            style={{
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Ripple
              onPress={this.props.restart}
              rippleOpacity={1}
              rippleColor={"white"}
            >
              <Button>
                <Text>RESTART</Text>
              </Button>
            </Ripple>
            <Ripple
              onPress={this.props.quit}
              rippleOpacity={1}
              rippleColor={"white"}
            >
              <Button>
                <Text>QUIT</Text>
              </Button>
            </Ripple>
            <Ripple
              onPress={this.props.closeAlert}
              rippleOpacity={1}
              rippleColor={"white"}
            >
              <Button>
                <Text>RESUME</Text>
              </Button>
            </Ripple>
          </View>
        </Box>
      </AnimatedContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertBox);

const Container = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;

  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const BlackScreen = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;

  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Box = styled.View`
  width: 359px;
  height: 280px;
  background-color: white;

  border-radius: 10px;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #444444;
  margin: 10px;
  margin-left: 20px;
  margin-bottom: 10px;
`;

const Button = styled.View`
  width: 300px;
  height: 60px;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;

  background: #b200f0;
  border-radius: 15px;
`;

const Text = styled.Text`
  font-size: 20px;
  color: white;
`;
