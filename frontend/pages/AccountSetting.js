import React from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar, TextInput, selectedOption, Touchable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const AccountSetting = () => {

    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();

    const handleAccountSetting = () => {
        navigation.navigate('MainApp');
    }

    const handleSimpan = () => {
        navigation.navigate('Account');
    }

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
                <Text style={styles.accountSettingText}>Pengaturan Akun</Text>
            </View>
            
            <View style={styles.profilePictureContainer}>
                <Image style={styles.profilePicture} source={require('../assets/profilePicture.png')} />
            </View>
            

            <Text style={styles.profilePictureChange}>Ganti foto atau avatar</Text>

            <View style = {styles.namaPengguna}>
                <Text style={styles.namaPenggunaText}>Nama Pengguna</Text>
                <View style={styles.namaPenggunaBox}>
                <TextInput
                />
                </View>
            </View>

            <View style = {styles.nomorTelepon}>
                <Text style={styles.nomorTeleponText}>Nomor Telepon</Text>
                <View style={styles.nomorTeleponBox}>
                <TextInput
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

            <View style = {styles.email}>
                <Text style={styles.emailText}>Email</Text>
                <View style={styles.emailBox}>
                <TextInput
                />
                </View>
            </View>

            <View style = {styles.kataSandi}>
                <Text style={styles.kataSandiText}>Kata Sandi</Text>
                <View style={styles.kataSandiBox}>
                <TextInput
                />
                </View>
            </View>

            <View style = {styles.konfirmasiKataSandi}>
                <Text style={styles.konfirmasiKataSandiText}>Konfirmasi Kata Sandi</Text>
                <View style={styles.konfirmasiKataSandiBox}>
                <TextInput
                />
                </View>
            </View>

            <TouchableOpacity style={styles.textBoxSimpan} onPress={handleSimpan}>
            {/* <View style={styles.textBoxDaftar}> */}
              <Text style={styles.buttonTextSimpan}>Simpan</Text>
            </TouchableOpacity>





        </ScrollView>
    </View>
    )

}

export default AccountSetting;

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
    accountSettingText:{
        fontSize: 16,
    },
    profilePictureContainer:{
        marginTop: "10%",
        alignSelf: 'center',
    },
    profilePictureChange:{
        textAlign: 'center',
        color: "#60A129",
        marginTop: "4%",

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
    textBoxSimpan: {
        backgroundColor: '#60A129',
        borderWith: 1,
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        marginTop: 40,
        marginLeft: 50,
        marginRight: 50,
      },
      buttonTextSimpan: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
      }
})