import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View, TouchableOpacity, Text, FlatList } from 'react-native';
import LapList from '../Components/LapList';
import { connect } from 'react-redux';
import { addLap} from './HomeScreenAction';


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            min: 0,
            sec: 0,
            msec: 0,

            isDisabled: true,
            isStarted: false,
        }

        this.interval = null;
    }
    lapArr = [];
    onStop = () => {
        this.setState(
            {
                isStarted: !this.state.isStarted
            },
            () => this.onStart()
        );
    };

    handleLap = (min, sec, msec) => {
        // this.lapArr({min,sec,msec});
        this.lapArr = [
            { min, sec, msec },
            ...this.lapArr,
        ]
    };

    onStart = () => {
        if (this.state.isStarted) {
            this.interval = setInterval(() => {
                if (this.state.msec !== 99) {
                    this.setState({
                        msec: this.state.msec + 1
                    });
                } else if (this.state.sec !== 59) {
                    this.setState({
                        msec: 0,
                        sec: ++this.state.sec
                    });
                } else {
                    this.setState({
                        msec: 0,
                        sec: 0,
                        min: ++this.state.min
                    });
                }
            }, 1);

        } else {
            this.handleLap(this.state.min,this.state.sec,this.state.msec);
            this.setState({
                msec: 0,
                sec: 0,
                min: 0,
            });
            clearInterval(this.interval);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        const { isStarted, min, sec, msec } = this.state;
        return (
            <View style={styles.mainContainer}>
                <View style={styles.timeContainer}>
                    <Text style={styles.time}>{`${min}:`}</Text>
                    <Text style={styles.time}>{`${sec}:`}</Text>
                    <Text style={styles.time}>{`${msec}`}</Text>
                </View>
                <LapList list={this.lapArr} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.onStop}>
                        <Text style={styles.buttonTextStyle}>{isStarted ? 'Stop' : 'Start'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => this.handleLap(min, sec, msec)} disabled={!isStarted}>
                        <Text style={styles.buttonTextStyle}>{'Lap'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    timeContainer: {
        marginTop: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0ffff',
        padding: 20,
        marginHorizontal: 50,
        marginVertical: 30,
        borderColor: 'rgb(37, 150, 190)',
        borderRadius: 15,
        borderWidth: 4,
    },
    time: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    buttonContainer: {
        paddingHorizontal: 20,
        bottom: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute'
    },
    buttonStyle: {
        backgroundColor: 'grey',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        padding: 20,
        width: 150,
    },
    buttonTextStyle: {
        fontSize: 40,
        fontWeight: '800',
        alignSelf: 'center'
    }
});
// const mapStateToProps = (state) => {
//     // Redux Store --> Component
//     return {
//       lapArr: state.HomeScreen.lapArr,
//     };
//   };
  
  
  
//   export default connect(mapStateToProps, {addLap})(HomeScreen);
  export default HomeScreen;