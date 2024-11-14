import React from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import Footer from '../components/Footer';
export default function UserScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.containerImage}>
        <Image source={require('../assets/img/avatarProfile.png')} style={styles.image}/>
        </View>
        <View style={styles.inputContainer}>
        <View style={styles.inputContent}>
          <Ionicons name="person-outline" size={24} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.inputContent}>
          <Ionicons name="mail-outline" size={24} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#fff"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContent}>
          <Ionicons name="lock-closed-outline" size={24} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#fff"
            secureTextEntry
          />
        </View>
        </View>
        </ScrollView>
        <Footer/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"black"
  },
  containerImage:{
    alignItems: 'center',
    justifyContent:"center",
    backgroundColor:"#7a501f",
    paddingTop:75,
    paddingBottom:75,
    borderBottomColor:"white",
    borderWidth:1,
  },
  image:{
    height:200,
    width:200,
    borderRadius: 100,
    backgroundColor:"black"
  },
  inputContainer:{
    paddingTop:60,
    justifyContent:"center",
    alignItems:"center"
  },
  inputContent: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    width: '100%',
    borderColor:"white",
    borderWidth:1
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    color: '#fff',
  },
  button: {
    backgroundColor: '#d3d3d3',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginVertical: 20,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotText: {
    color: '#fff',
    fontSize:14,
    marginBottom: 20,
    fontWeight:"600",
    textDecorationLine: 'underline'
  },
  signUpText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

