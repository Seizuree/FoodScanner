import React, {useState} from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar, TextInput, TouchableWithoutFeedback,Dimensions } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const RecipeDetailDiet = () => {

    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();

    const handleRecipeDetailHealty = () => {
        navigation.navigate('MainApp');
    };

    const handleDiet = () => {
        navigation.navigate('RecipeDiet');
    }

    const handleRecipeHowToDiet= () => {
        navigation.navigate('RecipeHowToDiet')
    }

    const handleHealty = () => {
        navigation.navigate('Recipe');
    }

    return (
        <View contentContainerStyle={styles.container}>
            <ScrollView>
                <View style={styles.innerContainer}>
                </View>
                <View style={styles.boxContainer}>
                    <TouchableOpacity style={styles.healtyBox} onPress ={handleHealty}>
                        <Text style={styles.healty}>Healty</Text>
                    </TouchableOpacity>
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
                <View style = {styles.boxDetail}>
                    <Text style = {styles.detailText}>Detail</Text>
                </View>
                <TouchableOpacity style ={styles.boxHowTo} onPress = {handleRecipeHowToDiet}>
                    <Text style = {styles.howToText}>How To</Text>
                </TouchableOpacity>
            </View>
            
            <Text style= {styles.foodName}>Green Salad</Text>
            <Text style={styles.foodCategory}>Dessert</Text>
            <Text style={styles.foodDesc}>Green Salad adalah makanan yang berasal dari Italia. Green Salad mempunyai 
            kandungan yang sangat sehat yang terdiri dari berbagai macam sayuran-sayuran, buah-buahan serta saus-saus yang sangat menarik. </Text>

            <Text style={styles.mainIngredientText}>Bahan Utama</Text>
            <View style={styles.mainIngredient}>
                <Text style={styles.mainIngredientLeft}>
                    - Tomat 
                    {"\n"}
                    - Timun
                </Text>
                <Text style={styles.mainIngredientRight}>
                    2 buah
                    {"\n"}
                    2 buah
                </Text>
            </View>

            <Text style={styles.spiceText}>Bumbu</Text>
            <View style={styles.spice}>
                <Text style={styles.spiceLeft}>
                    - Garam
                    {"\n"}
                    - Gula
                </Text>
                <Text style={styles.spiceRight}>
                    2 sdm
                    {"\n"}
                    2sdm
                </Text>
            </View>

            <Text style={styles.sauceText}>Sauce</Text>
            <View style={styles.sauce}>
                <Text style={styles.sauceLeft}>
                    - Mayonaise
                    {"\n"}
                    - Minyak Bawang
                </Text>
                <Text style={styles.sauceRight}>
                    2sdm
                    {"\n"}
                    3sdm
                </Text>
            </View>
            </ScrollView>
        </View>
    )

}

export default RecipeDetailDiet;

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
        backgroundColor: '#ADC698',
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
        backgroundColor: '#60A129',
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
        backgroundColor: '#60A129',
        borderColor: 'transparent',
        marginRight: 5, 
        height: height * 0.03,
      },
      boxHowTo: {
        flex: 1, 
        borderRadius: 10,
        backgroundColor: '#ADC698',
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
    mainIngredient:{
        flexDirection: 'row',
        flex: 1,
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
    foodDesc:{
        marginLeft: 30,
        marginRight: 30,
        fontSize: 14, 
        marginTop: "2%",
    },
    mainIngredientText:{
        fontSize: 16,
        color: "#60A129",
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: "5%",
    },
    mainIngredientLeft: {
        alignContent: 'flex-start',
        flex: 1,
        marginLeft: 30,
    },
    mainIngredientRight:{
        alignContent: 'flex-end',
        marginRight: 30,
        color: "#60A129",
    },
    spiceText: {
        color: "#60A129",
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: "5%",
    },
    spice:{
        flexDirection: 'row',
    },
    spiceLeft:{
        flex: 1,
        alignContent: 'flex-start',
        marginLeft: 30,
    },
    spiceRight:{
        alignContent: 'flex-end',
        marginRight: 30,
        color: "#60A129",
    },
    sauceText: {
        color: "#60A129",
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: "5%",
    },
    sauce:{
        flexDirection: 'row',
    },
    sauceLeft:{
        flex: 1,
        alignContent: 'flex-start',
        marginLeft: 30,
    },
    sauceRight:{
        alignContent: 'flex-end',
        marginRight: 30,
        color: "#60A129",
    },
})