import React from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar, TextInput, TouchableWithoutFeedback,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Recipe = () => {
    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();
  
    const handleDiet = () => {
      navigation.navigate('RecipeDiet');
    };

    const handleRecipeDetailHealty = () => {
        navigation.navigate('RecipeDetailHealty');
    };

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

        <TouchableOpacity style={styles.boxRecipe} onPress = {handleRecipeDetailHealty} >
            <Image style={styles.recipeImage} source = {require('../assets/Salad.png')}/>
            <View style={styles.recipeDetail}>
                <Text style={styles.recipeText}>Green Salad</Text>
                <Text style={styles.recipeCategory}>Dessert</Text>
                <Text style={styles.recipeLevel}>Beginner</Text>
            </View>
            <Image style={styles.recipeArrow} source = {require('../assets/arrow.png')}/>           
        </TouchableOpacity>
        </ScrollView>
      </View>
    )
}

export default Recipe;

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
    boxRecipe: {
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
    recipeContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    recipeDetail: {
        flex: 1,
        marginLeft: 5,
    },
    recipeText: {
        fontSize: 14,
        color: "#60A129",
    },
    recipeCategory: {
        fontSize: 10,
    },
    recipeLevel: {
        fontSize: 12,
        color: "#60A129",
        marginTop: 10,
    },
    recipeArrow: {
        marginRight: 10,
        width: 18,
        height: 18,
    },
})