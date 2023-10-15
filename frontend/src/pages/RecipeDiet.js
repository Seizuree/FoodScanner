import React from "react";
import {
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const RecipeDiet = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();

  const handleDiet = () => {
    navigation.navigate("MainApp");
  };

  const handleRecipeDetailDiet = () => {
    navigation.navigate("RecipeDetailDiet");
  };

  const handleRecipe = () => {
    navigation.navigate("Recipe");
  };

  return (
    <View contentContainerStyle={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}></View>
        <View style={styles.boxContainer}>
          <TouchableOpacity style={styles.healtyBox} onPress={handleRecipe}>
            <Text style={styles.healty}>Healty</Text>
          </TouchableOpacity>
          <View style={styles.dietBox} onPress={handleDiet}>
            <Text style={styles.diet}>Diet</Text>
          </View>
        </View>
        <View style={styles.recipeLine}></View>

        {/* menu 1 */}
        {/* ============================== */}
        <TouchableOpacity
          style={styles.boxRecipe}
          onPress={handleRecipeDetailDiet}
        >
          <Image
            style={styles.recipeImage}
            source={require("../../assets/Salad.png")}
          />
          <View style={styles.recipeDetail}>
            <Text style={styles.recipeText}>Green Salad</Text>
            <Text style={styles.recipeCategory}>Dessert</Text>
            <Text style={styles.recipeLevel}>Beginner</Text>
          </View>
          <Image
            style={styles.recipeArrow}
            source={require("../../assets/arrow.png")}
          />
        </TouchableOpacity>

        {/* menu2 */}
        {/* =============================== */}
        <TouchableOpacity
          style={styles.boxRecipe}
          onPress={handleRecipeDetailDiet}
        >
          <Image
            style={styles.recipeImage}
            source={require("../../assets/menuDiet2.png")}
          />
          <View style={styles.recipeDetail}>
            <Text style={styles.recipeText}>Avocado Toast</Text>
            <Text style={styles.recipeCategory}>Breakfast</Text>
            <Text style={styles.recipeLevel}>Beginner</Text>
          </View>
          <Image
            style={styles.recipeArrow}
            source={require("../../assets/arrow.png")}
          />
        </TouchableOpacity>

        {/* menu 3 */}
        {/* ========================================== */}

        <TouchableOpacity
          style={styles.boxRecipe}
          onPress={handleRecipeDetailDiet}
        >
          <Image
            style={styles.recipeImage}
            source={require("../../assets/menuDiet3.png")}
          />
          <View style={styles.recipeDetail}>
            <Text style={styles.recipeText}>Spanich Salad</Text>
            <Text style={styles.recipeCategory}>Snack</Text>
            <Text style={styles.recipeLevel}>Medium</Text>
          </View>
          <Image
            style={styles.recipeArrow}
            source={require("../../assets/arrow.png")}
          />
        </TouchableOpacity>

          {/* menu 4
          ========================================== */}
             <TouchableOpacity
          style={styles.boxRecipe}
          onPress={handleRecipeDetailDiet}
        >
          <Image
            style={styles.recipeImage}
            source={require("../../assets/menuDiet4.png")}
          />
          <View style={styles.recipeDetail}>
            <Text style={styles.recipeText}>Fruit Smoothie</Text>
            <Text style={styles.recipeCategory}>Dessert</Text>
            <Text style={styles.recipeLevel}>Beginner</Text>
          </View>
          <Image
            style={styles.recipeArrow}
            source={require("../../assets/arrow.png")}
          />
        </TouchableOpacity>

        {/* Menu 5
        ============================================== */}

           <TouchableOpacity
          style={styles.boxRecipe}
          onPress={handleRecipeDetailDiet}
        >
          <Image
            style={styles.recipeImage}
            source={require("../../assets/menuDiet5.png")}
          />
          <View style={styles.recipeDetail}>
            <Text style={styles.recipeText}>Greek Yogurt Parfait</Text>
            <Text style={styles.recipeCategory}>Dessert</Text>
            <Text style={styles.recipeLevel}>Beginner</Text>
          </View>
          <Image
            style={styles.recipeArrow}
            source={require("../../assets/arrow.png")}
          />
        </TouchableOpacity>

        {/* Menu 6
        ================================================ */}
         <TouchableOpacity
          style={styles.boxRecipe}
          onPress={handleRecipeDetailDiet}
        >
          <Image
            style={styles.recipeImage}
            source={require("../../assets/menuDiet6.png")}
          />
          <View style={styles.recipeDetail}>
            <Text style={styles.recipeText}>Hummus and Carrot Sticks</Text>
            <Text style={styles.recipeCategory}>Lunch</Text>
            <Text style={styles.recipeLevel}>Medium</Text>
          </View>
          <Image
            style={styles.recipeArrow}
            source={require("../../assets/arrow.png")}
          />
        </TouchableOpacity>

        {/* Menu 7
        =================================================== */}
         <TouchableOpacity
          style={styles.boxRecipe}
          onPress={handleRecipeDetailDiet}
        >
          <Image
            style={styles.recipeImage}
            source={require("../../assets/menuDiet7.png")}
          />
          <View style={styles.recipeDetail}>
            <Text style={styles.recipeText}>Kale Smoothie</Text>
            <Text style={styles.recipeCategory}>Breakfast</Text>
            <Text style={styles.recipeLevel}>Beginner</Text>
          </View>
          <Image
            style={styles.recipeArrow}
            source={require("../../assets/arrow.png")}
          />
        </TouchableOpacity>

        {/* Menu 8
        ========================================================== */}
         <TouchableOpacity
          style={styles.boxRecipe}
          onPress={handleRecipeDetailDiet}
        >
          <Image
            style={styles.recipeImage}
            source={require("../../assets/menuDiet8.png")}
          />
          <View style={styles.recipeDetail}>
            <Text style={styles.recipeText}>Mixed Berry Salad</Text>
            <Text style={styles.recipeCategory}>Dessert</Text>
            <Text style={styles.recipeLevel}>Medium</Text>
          </View>
          <Image
            style={styles.recipeArrow}
            source={require("../../assets/arrow.png")}
          />
        </TouchableOpacity>

        {/* Menu 9
        ========================================================= */}
         <TouchableOpacity
          style={styles.boxRecipe}
          onPress={handleRecipeDetailDiet}
        >
          <Image
            style={styles.recipeImage}
            source={require("../../assets/menuDiet9.png")}
          />
          <View style={styles.recipeDetail}>
            <Text style={styles.recipeText}>Cauiliflower Fried Rice</Text>
            <Text style={styles.recipeCategory}>Dinner</Text>
            <Text style={styles.recipeLevel}>Beginner</Text>
          </View>
          <Image
            style={styles.recipeArrow}
            source={require("../../assets/arrow.png")}
          />
        </TouchableOpacity>


      </ScrollView>
    </View>
  );
};

export default RecipeDiet;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  innerContainer: {
    flex: 1,
    marginTop: StatusBar,
    alignItems: "center",
  },
  boxContainer: {
    marginTop: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
  },
  dietBox: {
    borderWidth: 1,
    backgroundColor: "#60A129",
    borderColor: "transparent",
    borderRadius: 10,
    width: "15%",
  },
  diet: {
    color: "white",
    textAlign: "center",
  },
  healtyBox: {
    borderWidth: 1,
    backgroundColor: "#ADC698",
    borderColor: "transparent",
    borderRadius: 10,
    width: "15%",
    justifyContent: "center",
  },
  healty: {
    color: "white",
    textAlign: "center",
  },
  recipeLine: {
    backgroundColor: "#60A129",
    borderWith: 1,
    alignItems: "center",
    padding: 1,
    marginTop: 5,
  },
  boxRecipe: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 5,
    marginTop: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: "white",
    elevation: 14,
  },
  foodImage: {
    width: "31%",
  },
  recipeContent: {
    flexDirection: "row",
    alignItems: "center",
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
});