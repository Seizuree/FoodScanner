import React from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

StatusBar.setBarStyle('light-content');



<StatusBar backgroundColor="transparent" translucent />

const LandingPage = () => {
  const navigation = useNavigation(); 

  const handleSignIn = () => {
    const email = 'email_pengguna'; 
    const password = 'password_pengguna'; 
    console.log('Login dengan email:', email, 'dan password:', password);
    navigation.navigate('Masuk');
  };

  const handleSignUp = () => {
    const email = 'email_pengguna'; 
    const password = 'password_pengguna'; 
    navigation.navigate('Daftar');
    console.log('Registrasi dengan email:', email, 'dan password:', password);
  };

  return (
    <View contentContainerStyle={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <Image style={styles.landingImage} source={require('../assets/landingPage.png')} resizeMode="contain" />
          <Text style={styles.titleLanding}>Selamat Datang!</Text>

          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <View style={styles.textBoxMasuk}>
              <Text style={styles.buttonTextMasuk}>Masuk</Text>
            </View>
          </TouchableOpacity>

          <View style={{ marginVertical: 10 }} />

          <TouchableOpacity style={styles.buttonSignIn} onPress={handleSignUp}>
            <View style={styles.textBoxDaftar}>
              <Text style={styles.buttonTextDaftar}>Daftar</Text>
            </View>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
}

export default LandingPage;

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
  landingImage: {
    justifyContent: 'center',
    maxWidth: 320,
  },
  titleLanding: {
    fontSize: 32,
    color: '#60A129',
    marginTop: -50,
    marginBottom: 50,
    fontWeight: 'bold',
  },
  textBoxMasuk: {
    backgroundColor: '#60A129',
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonTextMasuk: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  textBoxDaftar: {
    backgroundColor: 'white',
    width: 250,
    height: 50,
    borderColor: '#60A129',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonTextDaftar: {
    color: '#60A129',
    fontSize: 20,
    textAlign: 'center',
  }
});
