import React from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar, TextInput, selectedOption} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Daftar = () => {
    const Tab = createBottomTabNavigator();
    const navigation = useNavigation(); 

    const handleSignUp = () => {
        navigation.navigate('MainApp');
      };

    return (
        <View contentContainerStyle={styles.container}>
        <ScrollView>
            <View style={styles.innerContainer}>
                <View style={styles.tittleContainer}>
                    <Image style={styles.daftarImage} source={require('../assets/logoFoodScanner.png')} resizeMode="contain" />
                    <Text style={styles.daftarTittle}>Food Scanner</Text>
                </View>  
            </View>

            <Text style={styles.daftarTittle2}>Hello!</Text>

            <View style = {styles.namaLengkap}>
                <Text style={styles.namaLengkapText}>Nama Lengkap</Text>
                <View style={styles.namaLengkapBox}>
                <TextInput
                    label="Nama Lengkap"
                    placeholder="Nama Lengkap"
                    textAlign='left' 
                />
                </View>
            </View>

            <View style = {styles.namaPengguna}>
                <Text style={styles.namaPenggunaText}>Nama Pengguna</Text>
                <View style={styles.namaPenggunaBox}>
                <TextInput
                    label="Nama Pengguna"
                    placeholder="Nama Pengguna"
                    textAlign='left' 
                />
                </View>
            </View>

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
                    placeholder="Kata Sandi"
                    textAlign='left' 
                />
                </View>
            </View>

            <View style = {styles.konfirmasiKataSandi}>
                <Text style={styles.konfirmasiKataSandiText}>Konfirmasi Kata Sandi</Text>
                <View style={styles.konfirmasiKataSandiBox}>
                <TextInput
                    label="Konfirmasi Kata Sandi"
                    placeholder="Konfirmasi Kata Sandi"
                    textAlign='left' 
                />
                </View>
            </View>

            <View style = {styles.nomorTelepon}>
                <Text style={styles.nomorTeleponText}>Nomor Telepon</Text>
                <View style={styles.nomorTeleponBox}>
                <TextInput
                    label="Nomor Telepon"
                    placeholder="Nomor Telepon"
                    textAlign='left' 
                />
                </View>
            </View>

            <View style ={styles.gender}>
                <Text style={styles.genderText}>Gender</Text>
                <View style ={styles.genderRow}>
                    <RadioButton style={styles.radioButtons}>
                        value="option1"
                        status={selectedOption === 'option1' ? 'checked' : 'unchecked'}
                    </RadioButton>     
                    <Text style= {styles.textMale}>Male</Text>

                    <RadioButton style={styles.radioButtons}>
                        value="option2"
                        status={selectedOption === 'option2' ? 'checked' : 'unchecked'}
                    </RadioButton>   
                    <Text style={styles.textFemale}>Female</Text>   
   
                </View>
            </View>

            <TouchableOpacity style={styles.textBoxDaftar} onPress={handleSignUp}>
            {/* <View style={styles.textBoxDaftar}> */}
              <Text style={styles.buttonTextDaftar}>Daftar</Text>
            </TouchableOpacity>

            <View style={styles.sudahPunyaAkun}>
                <Text style={styles.sudahPunyaAkuns}>Sudah memiliki akun? </Text>
                <Text style={styles.daftar}>Masuk</Text>
            </View>

        </ScrollView>
      </View>
    )
}

export default Daftar;

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
    daftarTittle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    daftarTittle2: {
        marginTop: 40,
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#60A129',
    },
    namaLengkap:{
        marginTop: 60,
    },
    namaLengkapText: {
        marginLeft: 30,
    },
    namaLengkapBox:{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 5,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 5, 
    },
    namaPengguna:{
        marginTop: 20,
    },
    namaPenggunaText: {
        marginLeft: 30,
    },
    namaPenggunaBox:{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 5,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 5, 
    },
    email:{
        marginTop: 20,
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
    konfirmasiKataSandi:{
        marginTop: 20,
    },
    konfirmasiKataSandiText: {
        marginLeft: 30,
    },
    konfirmasiKataSandiBox:{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 5,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 5, 
    },
    nomorTelepon:{
        marginTop: 20,
    },
    nomorTeleponText: {
        marginLeft: 30,
    },
    nomorTeleponBox:{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 5,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 5, 
    },
    genderText: {
        marginTop: 20,
        marginLeft: 30,
    },
    genderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 25,
    },
    radioButtons: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    textBoxDaftar: {
        backgroundColor: '#60A129',
        borderWith: 1,
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        marginTop: 40,
        marginLeft: 50,
        marginRight: 50,
      },
      buttonTextDaftar: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
      },
      sudahPunyaAkun: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center', 
      },
      sudahPunyaAkuns: {
        marginTop: 10,
      },
      daftar:{
          color: '#60A129',
          marginTop: 10,
      }
})