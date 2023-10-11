import React from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar, TextInput, TouchableWithoutFeedback,Dimensions, ImageBackground, rgba} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Account = () => {

    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();


    const handleAccountSetting = () => {
        navigation.navigate('AccountSetting');
    }

    const handleReportProblem = () => {
        navigation.navigate('ReportProblem');
    }

    const handleTermsAndCondition = () => {
        navigation.navigate('TermsAndCondition');
    }

    const handleNotification = () => {
        navigation.navigate('Notification');
    }


    return (
        <View contentContainerStyle={styles.container}>
        <ScrollView>
            <View style={styles.innerContainer}>
            </View>
            <View style={styles.logoutContainer}>
                <Image style={styles.logout} source = {require('../assets/logout.png')}/>
            </View>

            <View style={styles.container}>
               <ImageBackground
                    source={require('../assets/profileBackground.png')}
                    style={styles.profileBackground}
                    resizeMode="cover"
                >
                <View style={styles.overlayContainer}>
                    <View style={styles.profilePictureContainer}>
                        <Image style={styles.profilePicture} source={require('../assets/profilePicture.png')} />
                    </View>
                    <View style={styles.overlayTextContainer}>
                        <Text style={styles.overlayText}>Devin</Text>
                    </View>
                </View>
                </ImageBackground>
            </View>

            <TouchableOpacity style ={styles.accountSetting} onPress = {handleAccountSetting}>
                <View style={styles.accountSettingContainer}>
                    <Image style={styles.accountSettingPicture} source={require('../assets/accountSetting.png')} />
                </View>
                <View style={styles.accountSettingContainer}>
                    <Text style={styles.accountSettingText}>
                        Pengaturan Akun
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style ={styles.reportProblem} onPress = {handleReportProblem}>
                <View style={styles.reportProblemContainer}>
                    <Image style={styles.reportProblemPicture} source={require('../assets/reportProblem.png')} />
                </View>
                <View style={styles.reportProblemContainer}>
                    <Text style={styles.reportProblemText}>
                        Laporkan Masalah
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style ={styles.termsAndCondition} onPress = {handleTermsAndCondition}>
                <View style={styles.termsAndConditionContainer}>
                    <Image style={styles.termsAndConditionPicture} source={require('../assets/termsAndCondition.png')} />
                </View>
                <View style={styles.termsAndConditionContainer}>
                    <Text style={styles.termsAndConditionText}>
                        Syarat dan Ketentuan
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style ={styles.notification} onPress = {handleNotification}>
                <View style={styles.notificationContainer}>
                    <Image style={styles.notificationPicture} source={require('../assets/notification.png')} />
                </View>
                <View style={styles.notificationContainer}>
                    <Text style={styles.notificationText}>
                        Notifikasi
                    </Text>
                </View>
            </TouchableOpacity>

            </ScrollView>
        </View>
        )
}

export default Account;
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        marginTop: StatusBar,
        alignItems: 'center',
    },
    logoutContainer:{
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginTop: "20%",
        marginRight: 30, 
    },
    imageContainer:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "5%",
      },
      profileBackground: {
        width: '95%',
        height: '100%',
      },
      overlayContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 20,
      },
      profilePictureContainer: {
        marginRight: "10%",
      },
      profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
      },
      overlayText: {
        color: 'black',
        fontSize: 18,
      },
      accountSetting: {
        marginTop: "8%",
        flexDirection: 'row',
        borderWidth: 1, 
        borderColor: 'transparent',
        backgroundColor: 'rgba(96, 161, 41, 0.05)',
        width: '80%',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        height: height * 0.06,
      },
      accountSettingContainer:{
        marginRight: 30,
        marginLeft: 10,
      },
    reportProblem: {
        marginTop: "8%",
        flexDirection: 'row',
        borderWidth: 1, 
        borderColor: 'transparent',
        backgroundColor: 'rgba(96, 161, 41, 0.05)',
        width: '80%',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        height: height * 0.06,
      },
      reportProblemContainer:{
        marginRight: 30,
        marginLeft: 10,
      },
      termsAndCondition: {
        marginTop: "8%",
        flexDirection: 'row',
        borderWidth: 1, 
        borderColor: 'transparent',
        backgroundColor: 'rgba(96, 161, 41, 0.05)',
        width: '80%',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        height: height * 0.06,
      },
      termsAndConditionContainer:{
        marginRight: 30,
        marginLeft: 10,
      },
    notification: {
        marginTop: "8%",
        flexDirection: 'row',
        borderWidth: 1, 
        borderColor: 'transparent',
        backgroundColor: 'rgba(96, 161, 41, 0.05)',
        width: '80%',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        height: height * 0.06,
      },
    notificationContainer:{
        marginRight: 30,
        marginLeft: 10,
      },
})