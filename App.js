import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import AsyncStorage from '@react-native-community/async-storage';
// import {store,persistor} from './app/src/config/store';
import HomeScreen from './app/src/HomeScreen/HomeScreen';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
console.disableYellowBox = true;

class App extends Component {
    render() {
        return (
            // <Provider store = {store}>
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <HomeScreen />
            </SafeAreaView>
            // </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d3d3d3',
    },
});

export default App;
