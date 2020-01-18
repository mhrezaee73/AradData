import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";

class Mytext extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: this.props.linecolor || "#eeeeee",
          marginLeft: responsiveWidth(7)
        }}
      >
        <Text
          style={{
            color: this.props.textcolor || "#777777",
            fontSize: this.props.fontSize || responsiveFontSize(1.5),
            textAlign: "center",
            fontWeight: this.props.fontWeight || null
          }}
        >
          {this.props.text || `1 day`}
        </Text>
      </View>
    );
  }
}

export { Mytext };
