import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView,
  Dimensions,
  Image,
  TouchableHighlight,
  Alert
} from "react-native";
import { LinearGradient } from "expo";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const SLIDES = [
  {
    shoeImage: require("../assets/shoe1.png"),
    planPrice: 1299,
    shoeName: "Classic",
    shoeDescription:
      "From the Flymesh upper to the triple-density foam midsole, the Nike Air Zoom Structure 19 Men’s Running Shoe offers plenty of support and the response you need for a smooth, stable ride that feels ultra fast.",
    shoeCategory: "One year validity",
    shoePhrase: "Air",
    backgroundColor: "#8850FF",
    touchableBackgroundColor: "#CAB1FF",
    gradients: {
      gradient1: "#F72648",
      gradient2: "#FCCC3C"
    }
  },
  {
    shoeImage: require("../assets/shoe2.png"),
    planPrice: 2199,
    shoeName: "Classic Plus",
    shoeDescription:
      "The Nike Air Solstice draws inspiration from the swoosh's classic running shoes of the 1980's updating the style with premium materials and impressive production quality.",
    shoeCategory: "2 years validity",
    shoePhrase: "Class",
    backgroundColor: "#FFBA00",
    touchableBackgroundColor: "#FFDB79",
    gradients: {
      gradient1: "#3CA3FC",
      gradient2: "#FFD300"
    }
  },
  {
    shoeImage: require("../assets/shoe3.png"),
    planPrice: 3199,
    shoeName: "Executive",
    shoeDescription:
      "The Nike Air Huarache Utility Men's Shoe toughens up a famous running shoe with a nylon upper, fused mudguard and vibrant detail.",
    shoeCategory: "4 years validity",
    shoePhrase: "Safar",
    backgroundColor: "#4054FF",
    touchableBackgroundColor: "#9EA8FF",
    gradients: {
      gradient1: "#26C9F7",
      gradient2: "#DFFC3C"
    }
  }
];

export default class App extends Component {
  scrollX = new Animated.Value(0);

  expandCard() {
    Alert.alert("🔥 added to ya wishlist 🔥", "", [{ text: "whatever" }]);
  }

  render() {
    return (
      <View style={styles.container}>
        {SLIDES.map((slide, index) => {
          return (
            <Animated.View
              key={index}
              shouldRasterizeIOS
              renderToHardwareTextureAndroid
              style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: slide.backgroundColor,
                zIndex: -index,
                elevation: -index,
                opacity: this.scrollX.interpolate({
                  inputRange: [
                    deviceWidth * (index - 1),
                    deviceWidth * index,
                    deviceWidth * (index + 1)
                  ],
                  outputRange: [0, 1, 0],
                  extrapolate: "clamp"
                })
              }}
            />
          );
        })}
        <Animated.ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: this.scrollX } } }],
            { useNativeDriver: true }
          )}
        >
          {SLIDES.map((slide, index) => {
            return (
              <View key={index} style={styles.cardContainer}>
                <Animated.View style={styles.card}>
                  <View style={styles.cardTopContainer}>
                    <LinearGradient
                      shouldRasterizeIOS
                      renderToHardwareTextureAndroid
                      style={styles.gradient}
                      colors={[
                        slide.gradients.gradient1,
                        slide.gradients.gradient2
                      ]}
                    >
                      <Animated.View
                        shouldRasterizeIOS
                        renderToHardwareTextureAndroid
                        style={[
                          styles.nikeImageContainer,
                          {
                            transform: [
                              {
                                translateX: this.scrollX.interpolate({
                                  inputRange: [
                                    deviceWidth * (index - 1),
                                    deviceWidth * index,
                                    deviceWidth * (index + 1)
                                  ],
                                  outputRange: [
                                    deviceWidth * 0.2,
                                    0,
                                    -deviceWidth * 0.2
                                  ],
                                  extrapolate: "clamp"
                                })
                              }
                            ]
                          }
                        ]}
                      >
                        <Image
                          style={styles.nikeImage}
                          source={require("../assets/logo.png")}
                        />
                        <Text style={styles.planPriceText}>
                          ₹{slide.planPrice}
                        </Text>
                      </Animated.View>
                      <Animated.View
                        shouldRasterizeIOS
                        renderToHardwareTextureAndroid
                        style={{
                          marginBottom: 8,
                          transform: [
                            {
                              translateX: this.scrollX.interpolate({
                                inputRange: [
                                  deviceWidth * (index - 1),
                                  deviceWidth * index,
                                  deviceWidth * (index + 1)
                                ],
                                outputRange: [
                                  deviceWidth * 0.4,
                                  0,
                                  -deviceWidth * 0.4
                                ],
                                extrapolate: "clamp"
                              })
                            }
                          ]
                        }}
                      >
                        <Text style={styles.shoeNameText}>
                          {slide.shoeName.toUpperCase()}
                        </Text>
                      </Animated.View>
                      <Animated.View
                        shouldRasterizeIOS
                        renderToHardwareTextureAndroid
                        style={{
                          transform: [
                            {
                              translateX: this.scrollX.interpolate({
                                inputRange: [
                                  deviceWidth * (index - 1),
                                  deviceWidth * index,
                                  deviceWidth * (index + 1)
                                ],
                                outputRange: [
                                  deviceWidth * 0.6,
                                  0,
                                  -deviceWidth * 0.6
                                ],
                                extrapolate: "clamp"
                              })
                            }
                          ]
                        }}
                      >
                        <Text style={styles.shoeDescriptionText}>
                          {slide.shoeDescription}
                        </Text>
                      </Animated.View>
                      <Text style={styles.shoePhraseText}>
                        {slide.shoePhrase.toUpperCase()}
                      </Text>
                      <View />
                    </LinearGradient>
                  </View>
                  <Animated.View
                    shouldRasterizeIOS
                    renderToHardwareTextureAndroid
                    style={[
                      styles.buttonContainer,
                      {
                        transform: [
                          {
                            translateX: this.scrollX.interpolate({
                              inputRange: [
                                deviceWidth * (index - 1),
                                deviceWidth * index,
                                deviceWidth * (index + 1)
                              ],
                              outputRange: [
                                deviceWidth * 0.2,
                                0,
                                -deviceWidth * 0.2
                              ],
                              extrapolate: "clamp"
                            })
                          }
                        ]
                      }
                    ]}
                  >
                    <TouchableHighlight
                      underlayColor={slide.touchableBackgroundColor}
                      onPress={() => this.expandCard()}
                      style={[
                        styles.button,
                        { borderColor: slide.backgroundColor }
                      ]}
                    >
                      <Text
                        style={[
                          styles.buttonText,
                          { color: slide.backgroundColor }
                        ]}
                      >
                        Subscribe 
                      </Text>
                    </TouchableHighlight>
                    <Text style={styles.shoeCategoryText}>
                      {slide.shoeCategory.toUpperCase()}
                    </Text>
                  </Animated.View>
                </Animated.View>
                <Animated.View
                  pointerEvents="none"
                  shouldRasterizeIOS
                  renderToHardwareTextureAndroid
                  style={[
                    styles.shoeImageContainer,
                    {
                      transform: [
                        {
                          translateX: this.scrollX.interpolate({
                            inputRange: [
                              deviceWidth * (index - 1),
                              deviceWidth * index,
                              deviceWidth * (index + 1)
                            ],
                            outputRange: [deviceWidth, 0, -deviceWidth],
                            extrapolate: "clamp"
                          })
                        }
                      ]
                    }
                  ]}
                >
                  <Image style={styles.shoeImage} source={slide.shoeImage} />
                </Animated.View>
              </View>
            );
          })}
        </Animated.ScrollView>
        <View style={styles.pageIndicatorContainer}>
          <View style={styles.inActivePageIndicator} />
          <View style={styles.inActivePageIndicator} />
          <View style={styles.inActivePageIndicator} />
          <Animated.View
            shouldRasterizeIOS
            renderToHardwareTextureAndroid
            style={[
              styles.activePageIndicator,
              {
                transform: [
                  {
                    translateX: this.scrollX.interpolate({
                      inputRange: [0, deviceWidth, deviceWidth * 2],
                      outputRange: [0, 24, 48],
                      extrapolate: "clamp"
                    })
                  },
                  {
                    scaleX: this.scrollX.interpolate({
                      inputRange: [
                        0,
                        deviceWidth * 0.5,
                        deviceWidth,
                        deviceWidth * 1.5,
                        deviceWidth * 2
                      ],
                      outputRange: [1, 1.5, 1, 1.5, 1],
                      extrapolate: "clamp"
                    })
                  }
                ]
              }
            ]}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    width: deviceWidth,
    height: deviceHeight,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    width: deviceWidth - 64,
    height: deviceHeight * 0.8,
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 15
    },
    shadowRadius: 25
  },
  cardTopContainer: {
    flex: 3,
    overflow: "hidden",
    padding: 28,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "transparent"
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    padding: 28,
    backgroundColor: "transparent",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  nikeImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 40
  },
  nikeImage: {
    width: 40,
    resizeMode: "contain"
  },
  planPriceText: {
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 0.38,
    color: "white"
  },
  shoeNameText: {
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 1.5,
    color: "white"
  },
  shoeDescriptionText: {
    fontSize: 11,
    letterSpacing: 0.07,
    lineHeight: 13,
    color: "white"
  },
  shoePhraseText: {
    position: "absolute",
    bottom: 0,
    left: -32,
    width: deviceWidth * 2,
    fontSize: deviceWidth / 2,
    fontWeight: "900",
    letterSpacing: 20,
    color: "rgba(0,0,0,0.3)"
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    marginBottom: 12,
    paddingVertical: 15,
    paddingHorizontal: 64,
    borderWidth: 1.5,
    borderRadius: 40
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 1.5
  },
  shoeCategoryText: {
    fontSize: 12,
    color: "#AEAEAE"
  },
  shoeImageContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center"
  },
  shoeImage: {
    top: 64,
    width: deviceWidth,
    resizeMode: "contain"
  },
  pageIndicatorContainer: {
    position: "absolute",
    bottom: 24,
    width: 64,
    height: 3,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    borderRadius: 1.5
  },
  inActivePageIndicator: {
    width: 16,
    height: 3,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 1.5
  },
  activePageIndicator: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 16,
    height: 3,
    backgroundColor: "white",
    borderRadius: 1.5
  }
});
