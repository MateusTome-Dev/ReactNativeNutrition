import { Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const diets = [
  { name: 'Low Carb', color: '#9f631e', image: require('../assets/img/lowcarb.png') },
  { name: 'Reeducação Alimentar', color: '#b88040', image: require('../assets/img/lowcarb.png') },
  { name: 'Hipercalórica', color: '#9f631e', image: require('../assets/img/lowcarb.png') },
  { name: 'Nórdica', color: '#b88040', image: require('../assets/img/lowcarb.png') },
  { name: 'Vegana', color: '#9f631e', image: require('../assets/img/lowcarb.png') },
  { name: 'Vegetariana', color: '#b88040', image: require('../assets/img/lowcarb.png') },
];
 import React from 'react'
 
 export default function MenuScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dieta Exclusivas</Text>
      <Text style={styles.subtitle}>Escolha seu objetivo{`\n`}As melhores dietas para atingir seu objetivo</Text>
      {diets.map((diet, index) => (
        <TouchableOpacity key={index} style={[styles.card, { backgroundColor: diet.color }]}>
          <Text style={styles.cardText}>{diet.name}</Text>
          <Image source={diet.image} style={styles.cardImage} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFF',
    flex:1,
    justifyContent: 'center',
     backgroundColor: '#0f0f0f'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#d6d6d6',
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    opacity:0.7
  },
  cardText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
