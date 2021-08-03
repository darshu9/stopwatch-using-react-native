import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';

const LapList = (props) => {
    const itemList = (item, index) => {
        return (
            <View style={styles.timeContainer}>
                <Text style={styles.time}>{`#${index}:   `}</Text>
                <Text style={styles.time}>{`${item.min}:${item.sec}:${item.msec}`}</Text>
            </View>
        )
    }
    const newList = props.list ? props.list : [];
    return (
        <ScrollView style={{ marginBottom: 130 }}>
            {newList.map((item, index) => { return itemList(item, index) })}
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    timeContainer: {
        marginVertical: 10,
        marginHorizontal: 40,
        backgroundColor: '#f08080',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#20b2aa',
        borderRadius: 15,
        borderWidth: 3,
        padding: 10,
    },
    time: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        width: 100
    }
});


export default LapList;
