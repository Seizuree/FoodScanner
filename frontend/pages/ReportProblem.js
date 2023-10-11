import React from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar, TextInput, selectedOption, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const ReportProblem = () => {
    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();

    const ReportProblem = () => {
        navigation.navigate('MainApp');
    };
    
    const handleLaporkan = () => {
        navigation.navigate('Account');
    }

    const handleBack = () => {
        navigation.navigate ('Account');
    }

    return (
        <View contentContainerStyle={styles.container}>
            <ScrollView>
                <View style = {styles.backContainer}>
                    <TouchableOpacity onPress = {handleBack}>
                        <Image style={styles.back} source = {require('../assets/arrow-left.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.reportProblemText}>Laporkan Masalah</Text>
                </View>

                <View style={styles.reportProblemInput}>
                <TextInput
                    placeholder="Tuliskan masalahmu disini..."
                    textAlign='left' 
                />
                </View>

                <View style={styles.reportImage}>
                    <Image style={styles.plus} source = {require('../assets/plus.png')}/>
                </View>

                <TouchableOpacity style={styles.textBoxLaporkan} onPress={handleLaporkan}>
                    <Text style={styles.buttonTextLaporkan}>Laporkan</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>

        
    );
}

export default ReportProblem;
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },

    backContainer:{
        marginTop: "20%",
        flexDirection: 'row',
        marginLeft: 30,
    },
    back:{
        marginRight: "20%",
    },
    reportProblemText:{
        fontSize: 16,
    },
    reportProblemInput:{
        padding: 5,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 5, 
    },
    reportImage:{
        marginTop: "15%",
        width: "40%",
        borderWidth: 1, 
        marginLeft: 30,
        marginRight: 30, 
        height: height * 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderColor: "#60A129"
    },
    textBoxLaporkan: {
        backgroundColor: '#60A129',
        borderWith: 1,
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        marginTop: 40,
        marginLeft: 50,
        marginRight: 50,
      },
      buttonTextLaporkan: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
      }

})