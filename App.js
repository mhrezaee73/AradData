import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
import { Mytext, TextAButt } from "./SRC/Components";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: true
    };
  }

  render() {
    return (
      <View style={{ flex: 18.5, backgroundColor: "white" }}>
        <View
          style={{
            flex: 1.8,
            justifyContent: "flex-end",
            flexDirection: "row-reverse",
            alignItems: "flex-end",
            paddingBottom: responsiveHeight(2)
          }}
        >
          <Text
            style={{
              color: "#191919",
              fontSize: responsiveFontSize(2),
              marginLeft: responsiveWidth(5),
              textAlign: "center",
              textAlignVertical: "center"
            }}
          >{` Holiday`}</Text>
          <Text
            style={{
              color: "#037aff",
              fontSize: responsiveFontSize(2),
              textAlign: "center",
              textAlignVertical: "center"
            }}
          >{` Collection List`}</Text>
          <Image
            source={require("./SRC/img/header/04.png")}
            style={{
              width: responsiveWidth(6),
              height: responsiveWidth(6),
              tintColor: "#037aff"
            }}
          />
        </View>
        <View
          style={{
            flex: 2.8,
            borderTopColor: "#cccccc",
            borderBottomColor: "#cccccc",
            borderWidth: responsiveWidth(0.2),
            justifyContent: "flex-end",
            flexDirection: "row-reverse",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: "#191919",
              fontSize: responsiveFontSize(2.5),
              marginLeft: responsiveWidth(3)
            }}
          >{` Holiday`}</Text>
          <View
            style={{
              width: responsiveWidth(12),
              height: responsiveWidth(12),
              borderRadius: 100,
              backgroundColor: "red",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: responsiveWidth(6)
            }}
          >
            <Image
              source={require("./SRC/img/firstSection/01.png")}
              style={{
                width: responsiveWidth(6),
                height: responsiveWidth(6),
                tintColor: "white"
              }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 13.9,
            flexDirection: "column",
            paddingTop: responsiveHeight(5)
          }}
        >
          <Text
            style={{
              color: "#91a2a7",
              fontSize: responsiveFontSize(1.4),
              textAlign: "left",
              marginLeft: responsiveWidth(7)
            }}
          >{`PEREFERRED METHOD OF RECEIVING REMINDERS`}</Text>

          <TextAButt test={true} />
          <TextAButt text="Email" />
          <Text
            style={{
              color: "#91a2a7",
              fontSize: responsiveFontSize(1.4),
              textAlign: "left",
              marginLeft: responsiveWidth(7),
              marginTop: responsiveHeight(6)
            }}
          >{`REMIND ME THIS AMOUNT IN ADVANCED`}</Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              marginTop: responsiveHeight(3)
            }}
          >
            <Mytext text="1 hour " />
            <Mytext
              text="12 hour "
              textcolor="#000000"
              linecolor="#084fb2"
              fontSize={responsiveFontSize(1.6)}
              fontWeight="bold"
            />
            <Mytext text="1 day " />
            <Mytext text="2 day " />
            <Mytext text="1 Week " />
          </View>
          <Text
            style={{
              color: "#91a2a7",
              fontSize: responsiveFontSize(1.6),
              textAlign: "left",
              marginLeft: responsiveWidth(7),
              marginTop: responsiveHeight(6)
            }}
          >{`REMIND ME`}</Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              marginTop: responsiveHeight(3)
            }}
          >
            <View
              style={{
                flex: 4
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: responsiveFontSize(1.5),
                  textAlign: "left",
                  marginLeft: responsiveWidth(7)
                }}
              >{`Every time`}</Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                marginRight: responsiveWidth(3)
              }}
            >
              <View
                style={{
                  width: responsiveWidth(10),
                  height: responsiveWidth(10),
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 100,
                  borderWidth: 2,
                  borderColor: this.state.selected ? "#084fb2" : "#d8e4e7",
                  backgroundColor: "white"
                }}
              >
                <TouchableOpacity
                  style={{
                    width: responsiveWidth(7),
                    height: responsiveWidth(7),
                    borderRadius: 100,
                    backgroundColor: this.state.selected ? "#084fb2" : "#d8e4e7"
                  }}
                  onPress={() => {
                    this.setState({
                      selected: !this.state.selected
                    });
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              marginTop: responsiveHeight(2),
              justifyContent: "center"
            }}
          >
            <View
              style={{
                flex: 4
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: responsiveFontSize(1.5),
                  textAlign: "left",
                  textAlignVertical: "center",
                  marginLeft: responsiveWidth(7)
                }}
              >{`Only when there are holidays changes`}</Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                marginRight: responsiveWidth(3),
                justifyContent: "center"
              }}
            >
              <View
                style={{
                  width: responsiveWidth(10),
                  height: responsiveWidth(10),
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 100,
                  borderWidth: 2,
                  borderColor: this.state.selected ? "#d8e4e7" : "#084fb2",
                  backgroundColor: "white"
                }}
              >
                <TouchableOpacity
                  style={{
                    width: responsiveWidth(8),
                    height: responsiveWidth(8),
                    borderRadius: 100,
                    backgroundColor: this.state.selected ? "#d8e4e7" : "#084fb2"
                  }}
                  onPress={() => {
                    this.setState({
                      selected: !this.state.selected
                    });
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
