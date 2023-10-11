import React from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const History = () => {
    return (
        <View contentContainerStyle={styles.container}>
        <ScrollView>
            <View style={styles.innerContainer}>
            </View>
            <Text style = {styles.clearHistory}>Clear History</Text>
        <View style={styles.clearHistoryLine}></View>

        <View style={styles.boxHistory}>
            <Image style={styles.foodImage} source = {require('../assets/Salad.png')}/>
            <View style={styles.foodDetail}>
                <Text style={styles.foodText}>Green Salad</Text>
                <Text style={styles.foodCategory}>Category: Dessert</Text>
            </View>

            <Text style={styles.dateHistory}>Jun 09, 2022</Text>         
        </View>

        </ScrollView>
      </View>
    )
}

export default History;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
    innerContainer: {
        flex: 1,
        marginTop: StatusBar,
        alignItems: 'center',
    },
    clearHistory: {
        textAlign: 'right',
        marginTop: "20%",
        marginRight: 10,
    },
    clearHistoryLine: {
        backgroundColor: '#60A129',
        borderWith: 1,
        alignItems: 'center',
        padding: 1,
        marginTop: 5,
    },
   
    boxHistory: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 5,
        marginTop: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        backgroundColor: 'white',
        elevation: 14,
      },
    foodImage:{
        width: '31%',
    },
    foodDetail: {
        flex: 1,
        marginLeft: 5,
    },
    foodText: {
        fontSize: 14,
        color: "#60A129",
    },
    foodCategory: {
        fontSize: 10,
    },
    dateHistory: {
        marginRight: 10,
    },
    
})