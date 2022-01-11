import React from 'react'
import { StyleSheet, View, Dimensions, PixelRatio } from 'react-native';

export default function Lines() {
    return (
        <View style={{ display: 'flex', flexDirection: 'row' }}>
            {arr.map(i => {
                if (i % 2) {
                    return <View key={i} style={styles.whiteColumn}></View>
                } else {
                    return <View key={i} style={styles.blackColumn}></View>
                }
            })}
        </View>
    )
}
const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
const px = PixelRatio.get()

// const test = PixelRatio.getPixelSizeForLayoutSize(deviceWidth);
// console.log(test);

let arr = []
for (let i = 0; i < Math.floor(deviceWidth * px) * 2; i++) {
    arr.push(i)
}

const styles = StyleSheet.create({
    whiteColumn: {
        width: 1 / px,
        height: deviceHeight * 0.13,
        backgroundColor: 'white'
    },
    blackColumn: {
        width: 1 / px,
        height: deviceHeight * 0.13,
        backgroundColor: 'black',
    }
});

