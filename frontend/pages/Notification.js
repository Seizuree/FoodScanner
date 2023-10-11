import React, { useState }from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar, TextInput, selectedOption, Dimensions, Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Notification = () => {
    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
      setIsEnabled((previousState) => !previousState);
    };

    const handleBack = () => {
        navigation.navigate('Account');
    }

    return (
        <View contentContainerStyle={styles.container}>
            <ScrollView>

                <View style = {styles.backContainer}>
                    <TouchableOpacity onPress = {handleBack}>
                        <Image style={styles.back} source = {require('../assets/arrow-left.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.notificationText}>Notifikasi</Text>
                </View>

                <View style={styles.notificationContainer}>
                    <Text style={styles.stopNotification}>Hentikan Notifikasi</Text>
                    <Switch
                    trackColor={{ false: '#767577', true: '#60A129' }}
                    thumbColor={isEnabled ? '#ADC698' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    />
                </View>
            </ScrollView>
      </View>

    );

}

export default Notification;


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
    label: {
        fontSize: 18,
        marginBottom: 10,
      },
    status: {
        fontSize: 16,
        marginTop: 10,
      },
    backContainer:{
        marginTop: "20%",
        flexDirection: 'row',
        marginLeft: 30,
    },
    back:{
        marginRight: "20%",
    },
    notificationText:{
        fontSize: 16,
    },
    notificationContainer: {
        marginTop: "10%",
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginLeft: 30,
        marginRight: 30,
      },
      stopNotification: {
        fontSize: 16,
      },
      switchContainer: {
        marginLeft: 'auto', 
      },
})