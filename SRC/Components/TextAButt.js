import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
import ToggleSwitch from "toggle-switch-react-native";

class TextAButt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: this.props.test
    };
  }

  render() {
    return (
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          marginTop: responsiveHeight(3)
        }}
      >
        <View
          style={{
            flex: 1
          }}
        >
          <Text
            style={{
              color: "#000000",
              fontSize: responsiveFontSize(2),
              textAlign: "left",
              marginLeft: responsiveWidth(7)
            }}
          >
            {this.props.text || `Push notification`}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            marginRight: responsiveWidth(3)
          }}
        >
          <ToggleSwitch
            isOn={this.state.test}
            onColor="#084fb1"
            offColor="#b9c1c6"
            //  label="Push notification"
            //labelStyle={{ color: "black", marginRight: responsiveWidth(55) }}
            size="large"
            onToggle={() => this.setState({ test: !this.state.test })}
          />
        </View>
      </View>
    );
  }
}

export { TextAButt };
