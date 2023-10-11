import React, {useState} from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar, TextInput, TouchableWithoutFeedback,Dimensions } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const RecipeHowToHealty = () => {

    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();

    const handleRecipeDetailHealty = () => {
        navigation.navigate('RecipeDetailHealty');
    };

    const handleDiet = () => {
        navigation.navigate('RecipeDiet');
    }

    const handleRecipeHowToHealty = () => {
        navigation.navigate('MainApp');
    }

    return (
        <View contentContainerStyle={styles.container}>
            <ScrollView>
                <View style={styles.innerContainer}>
                </View>
                <View style={styles.boxContainer}>
                    <View style={styles.healtyBox}>
                        <Text style={styles.healty}>Healty</Text>
                    </View>
                    <TouchableOpacity style={styles.dietBox} onPress={handleDiet}>
                        <Text style={styles.diet}>Diet</Text>
                    </TouchableOpacity>
                </View>
            <View style={styles.recipeLine}></View>

            <View style = {styles.containers}>
                <View style = {styles.imageContainer}>
                    <Image style={styles.recipeDetailImage} source = {require('../assets/Salad1.png')}/>
                </View>
            </View>

            <View style = {styles.textContainer}>
                <TouchableOpacity style = {styles.boxDetail} onPress = {handleRecipeDetailHealty}>
                    <Text style = {styles.detailText}>Detail</Text>
                </TouchableOpacity>
                <View style ={styles.boxHowTo} onPress = {handleRecipeHowToHealty}>
                    <Text style = {styles.howToText}>How To</Text>
                </View>
            </View>
            
            <Text style= {styles.foodName}>Green Salad</Text>
            <Text style={styles.foodCategory}>Dessert</Text>
            <Text style={styles.stepsText}>Langkah-langkah</Text>
            <Text style={styles.steps}>
                - Siapkan buah-buahan yang akan dipakai, lalu potong dadu masing-masing buah.
                {"\n"}
                - Panaskan susu cair full cream, lalu tambahkan susu kental manis.
                {"\n"}
                - Setelah tercampur, tambahkan tepung maizena lalu aduk sampai mengental.
                {"\n"}
                - Setelah dingin, tambahkan yoghurt, aduk, lalu campurkan ke dalam buah-buahan yang sudah dipotong-potong.
                {"\n"}
                - Tambahkan parutan keju di atasnya, lalu dinginkan ke dalam kulkas.
                {"\n"}
                - Setelah dingin, salad buah pun siap disajikan.
            </Text>
         
            </ScrollView>
        </View>
    )

}

export default RecipeHowToHealty;

const { height, width } = Dimensions.get('window');

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
    boxContainer:{
        marginTop: "20%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
    },
    healtyBox:{
        borderWidth: 1,
        backgroundColor: '#60A129',
        borderColor: 'transparent',
        borderRadius: 10,
        width: '15%'
    },
    healty:{
        color: 'white',
        textAlign: 'center',
    },
    dietBox:{
        borderWidth: 1,
        backgroundColor: '#ADC698',
        borderColor: 'transparent',
        borderRadius: 10,
        width: '15%',
        justifyContent: 'center',
    },
    diet:{
        color: 'white',
        textAlign: 'center',
    },
    recipeLine: {
        backgroundColor: '#60A129',
        borderWith: 1,
        alignItems: 'center',
        padding: 1,
        marginTop: 5,
    },
    recipeDetailImage: {
        justifyContent: 'center'
    },
    imageContainer: {
        marginTop: "10%",
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        resizeMode: 'cover',
    },
    containers : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        borderWidth: 1,
        width: '50%',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderColor: 'transparent',
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 10,
        height: height * 0.05,
      },
      boxDetail: {
        flex: 1, 
        borderRadius: 10,
        backgroundColor: '#ADC698',
        borderColor: 'transparent',
        marginRight: 5, 
        height: height * 0.03,
      },
      boxHowTo: {
        flex: 1, 
        borderRadius: 10,
        backgroundColor: '#60A129',
        borderColor: 'transparent',
        marginLeft: 5, 
        height: height * 0.03,
      },
    detailText: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',

    },
    howToText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    foodName:{
        color: "#60A129",
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: "5%",
        fontSize: 16,
    },
    
    foodCategory:{
        marginLeft: 30,
        fontSize: 12,
        marginTop: "2%",
    },
    stepsText:{
        color: "#60A129",
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: "5%",
        fontSize: 16,
    },
    steps:{
        fontSize: 13,
        marginLeft: 30,
        marginRight: 30,
    }
})