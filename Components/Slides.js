import React from "react";
import { View, Dimensions, Image } from "react-native";
import styled from "styled-components";
import Carousel from "react-native-snap-carousel";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const width = Dimensions.get("window").width;

export default class Slides extends React.Component {
  _renderItem({ item, index }) {
    return (
      <View
        style={{
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Image
          source={{
            uri: item.image,
          }}
          style={{
            width: "100%",
            height: 230,
          }}
        />
      </View>
    );
  }
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={this.props.data}
          renderItem={this._renderItem}
          sliderWidth={width}
          itemWidth={wp("85")}
          inactiveSlideScale={0.9}
          inactiveSlideOpacity={1}
          enableMomentum={true}
          loop={true}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={2000}
          contentContainerCustomStyle={{
            height: 230,
          }}
        />
      </View>
    );
  }
}
