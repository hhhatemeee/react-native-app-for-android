import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions, PixelRatio, Animated } from 'react-native';
import Lines from './components/Lines.js';
import { useEffect, useRef } from 'react';

export default function App() {

  const animatedValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    animatedValue.setValue(deviceWidth)
    return startAnimate()
  })

  const startAnimate = () => {
    animatedValue.setValue(0)
    Animated.timing(animatedValue, {
      toValue: -deviceWidth,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => startAnimate())
  }


  const animatedStyle = { transform: [{ translateX: animatedValue },] }
  console.log(animatedStyle.transform);
  return (
    <Animated.View style={[animatedStyle]}>
      <View style={styles.container}>
        {list.map(i => {
          if (i % 2) {
            return <Lines key={i} />
          } else {
            return <View key={i} style={styles.fullLine}></View>
          }
        })}
        <View style={styles.fullLine} />
      </View>
    </Animated.View>
  );
}


const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

let list = [];
for (let i = 0; i < 9; i++) {
  list.push(i);
}
console.log(list.length)

const px = PixelRatio.get()
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    color: 'red',
    width: deviceWidth * 2,
    height: deviceHeight,
  },
  fullLine: {
    width: deviceWidth,
    backgroundColor: 'black',
    height: deviceHeight * 0.08
  },
});






