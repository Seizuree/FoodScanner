import React from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar, TextInput, selectedOption, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { RadioButton } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TermsAndCondition = () => {
    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();

    const handleTerimaSyarat = () => {
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
                        <Text style={styles.termsAndConditionText}>Syarat dan Ketentuan</Text>
                </View>

                <Text style={styles.headerTermsAndCondition}>Persetujuan Pengguna</Text>

                <Text style={styles.paragraphOne}>Dengan mengunduh, menginstal, atau menggunakan aplikasi seluler CamScanner, 
                Anda secara tegas menyetujui dan menerima syarat dan ketentuan yang tercantum di bawah ini. Jika Anda tidak setuju dengan syarat dan ketentuan ini, 
                harap segera hentikan penggunaan Aplikasi ini.</Text>
                
                <Text style={styles.paragraphTwo}>a. Kebijakan Privasi: Penggunaan Aplikasi tunduk pada Kebijakan Privasi kami, yang dapat Anda akses di www.FoodScanner.com . Dengan menggunakan Aplikasi ini, Anda juga menyetujui Kebijakan Privasi kami.
                {"\n"}
                b. Batasan Penggunaan: Anda menyetujui untuk tidak menggunakan Aplikasi ini untuk tujuan yang melanggar hukum atau merugikan pihak ketiga. Anda juga setuju untuk tidak mencoba mengakses atau merusak sistem atau data Aplikasi kami.
                {"\n"}
                c. Akun Pengguna: Jika Aplikasi memerlukan pendaftaran atau pembuatan akun, Anda bertanggung jawab atas menjaga kerahasiaan informasi akun Anda dan berbagai aktivitas yang terjadi di bawah akun tersebut.</Text>
            
                <Text style={styles.paragraphThree}>
                Syarat dan ketentuan ini diatur oleh dan diinterpretasikan sesuai dengan hukum yang berlaku di Indonesia. Setiap perselisihan yang timbul dari atau sehubungan dengan 
                penggunaan aplikasi ini akan diatur oleh Makamah Agung.
                </Text>

                <TouchableOpacity style={styles.textBoxTerimaSyarat} onPress={handleTerimaSyarat}>
                    <Text style={styles.buttonTextTerimaSyarat}>Terima Syarat</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>

    );
}

export default TermsAndCondition;


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
    termsAndConditionText:{
        fontSize: 16,
    },

    headerTermsAndCondition: {
        fontSize: 14, 
        marginLeft: 30,
        marginTop: "10%"
    },
    paragraphOne: {
        marginTop: "5%",
        fontSize: 13,
        marginLeft: 30,
        marginRight: 30,
    },
    paragraphTwo: {
        marginTop: "5%",
        fontSize: 13,
        marginLeft: 30,
        marginRight: 30,
    },
    paragraphThree:{
        marginTop: "5%",
        fontSize: 13,
        marginLeft: 30,
        marginRight: 30,
    },
    textBoxTerimaSyarat: {
        backgroundColor: '#60A129',
        borderWith: 1,
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        marginTop: 40,
        marginLeft: 50,
        marginRight: 50,
      },
      buttonTextTerimaSyarat: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
      }
});