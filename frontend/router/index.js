import React from "react";
import { Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LandingPage from "../src/pages/LandingPage";
import History from "../src/pages/History";
import Recipe from "../src/pages/Recipe";
import Account from "../src/pages/Account";
import Daftar from "../src/pages/Daftar";
import Masuk from "../src/pages/Masuk";
import RecipeDiet from "../src/pages/RecipeDiet";
import RecipeDetailHealty from "../src/pages/RecipeDetailHealty";
import RecipeHowToHealty from "../src/pages/RecipeHowToHealty";
import RecipeDetailDiet from "../src/pages/RecipeDetailDiet";
import RecipeHowToDiet from "../src/pages/RecipeHowToDiet";
import AccountSetting from "../src/pages/AccountSetting";
import ReportProblem from "../src/pages/ReportProblem";
import TermsAndCondition from "../src/pages/TermsAndCondition";
import Notification from "../src/pages/Notification";
import OpenCamera from "../src/pages/OpenCamera";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RecipeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Recipe"
        component={Recipe}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecipeDiet"
        component={RecipeDiet}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecipeDetailHealty"
        component={RecipeDetailHealty}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecipeHowToHealty"
        component={RecipeHowToHealty}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecipeDetailDiet"
        component={RecipeDetailDiet}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecipeHowToDiet"
        component={RecipeHowToDiet}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AccountSetting"
        component={AccountSetting}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReportProblem"
        component={ReportProblem}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="TermsAndCondition"
        component={TermsAndCondition}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Camera"
        component={OpenCamera}
        options={{
          tabBarIcon: () => <Image source={require("../assets/Camera.png")} />,
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: () => <Image source={require("../assets/History.png")} />,
          tabBarLabel: "",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Recipe"
        component={RecipeStack}
        options={{
          tabBarIcon: () => <Image source={require("../assets/Recipe.png")} />,
          tabBarLabel: "",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStack}
        options={{
          tabBarIcon: () => <Image source={require("../assets/Account.png")} />,
          tabBarLabel: "",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Masuk"
        component={Masuk}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Daftar"
        component={Daftar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecipeDiet"
        component={RecipeDiet}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecipeDetailHealty"
        component={RecipeDetailHealty}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecipeHowToHealty"
        component={RecipeHowToHealty}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecipeDetailDiet"
        component={RecipeDetailDiet}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecipeHowToDiet"
        component={RecipeHowToDiet}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccountSetting"
        component={AccountSetting}
        option={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReportProblem"
        component={ReportProblem}
        option={{ headerShown: false }}
      />
      <Stack.Screen
        name="TermsAndCondition"
        component={TermsAndCondition}
        option={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        option={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
