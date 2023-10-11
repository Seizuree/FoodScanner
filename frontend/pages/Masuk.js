import React from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Masuk = () => {
    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();

    const handleDaftar = () =>{
        navigation.navigate('Daftar');
    }

    const handleMasuk = () => {
        navigation.navigate('MainApp');
    }

    return (
        <View contentContainerStyle={styles.container}>
        <ScrollView>
            <View style={styles.innerContainer}>
                <View style={styles.tittleContainer}>
                    <Image style={styles.masukImage} source={require('../assets/logoFoodScanner.png')} resizeMode="contain" />
                    <Text style={styles.masukTittle}>Food Scanner</Text>
                </View>  
            </View>
            <Text style = {styles.masukTittle2}>Mulailah makan sehat</Text>
            <Text style = {styles.masukIsi}>Menggunakan aplikasi ini dapat menimbulkan dampak positif kepada tubuh anda, mari kita mulai!!</Text>

            <View style = {styles.email}>
                <Text style={styles.emailText}>Email</Text>
                <View style={styles.emailBox}>
                <TextInput
                    label="Email"
                    placeholder="Email"
                    textAlign='left' 
                />
                </View>
            </View>

            <View style = {styles.kataSandi}>
                <Text style={styles.kataSandiText}>Kata Sandi</Text>
                <View style={styles.kataSandiBox}>
                    <TextInput
                        label="Kata Sandi"
                        placeholder = "Kata Sandi"
                        textAlign='left'
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.textBoxMasuk} onPress ={handleMasuk}>
              <Text style={styles.buttonTextMasuk}>Masuk</Text>
            </TouchableOpacity>

            <Text style={styles.lupaKataSandi}>Lupa kata sandi kamu?</Text>
            <View style={styles.belumPunyaAkun}>
                <Text style={styles.belumPunyaAkuns}>Belum Punya Akun? </Text>
                <TouchableOpacity onPress = {handleDaftar}>
                    <Text style={styles.daftar}>Daftar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.googleAndFacebook}>
                <Image style={styles.googleImage} source={require('../assets/Google.png')}/>
                <Image style={styles.FacebookImage} source={require('../assets/Facebook.png')}/>
            </View>

        </ScrollView>
      </View>
    )
}

export default Masuk;

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
    tittleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        marginTop: 50,
    },
    masukTittle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    masukTittle2: {
        marginTop: 40,
        marginLeft: 30,
        fontSize: 17,
        color: '#60A129',
        fontWeight: 'bold',
    },
    masukIsi: {
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        fontSize: 15,
    },
    email:{
        marginTop: 60,
    },
    emailText: {
        marginLeft: 30,
    },
    emailBox:{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 5,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 5, 
    },
    kataSandi:{
        marginTop: 20,
    },
    kataSandiText: {
        marginLeft: 30,
    },
    kataSandiBox:{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 5,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 5, 
    },
    textBoxMasuk: {
        backgroundColor: '#60A129',
        borderWith: 1,
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        marginTop: 40,
        marginLeft: 50,
        marginRight: 50,
      },
      buttonTextMasuk: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
      },
      lupaKataSandi:{
          marginTop: 50,
          fontSize: 12,
          fontWeight: 'bold',
          textAlign: 'center',
      },
      belumPunyaAkun: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center', 
      },
      belumPunyaAkuns: {
        fontSize: 12,
        marginTop: 10,
      },
      daftar:{
          color: '#60A129',
          fontSize: 12,
          marginTop: 10,
      },
      googleAndFacebook:{
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent:'center',
          marginTop: 20,
      },
      googleImage:{
          marginRight: 30,
      }


});