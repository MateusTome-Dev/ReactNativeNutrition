import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const diets = [
  { name: 'Low Carb', color: '#9f631e', image: require('../assets/img/lowcarb.png') },
  { name: 'Reeducação Alimentar', color: '#b88040', image: require('../assets/img/lowcarb.png') },
  { name: 'Hipercalórica', color: '#9f631e', image: require('../assets/img/lowcarb.png') },
  { name: 'Nórdica', color: '#b88040', image: require('../assets/img/lowcarb.png') },
  { name: 'Vegana', color: '#9f631e', image: require('../assets/img/lowcarb.png') },
];

export default function CardMenu() {
  return (
    <View>
      {diets.map((diet, index) => (
        <TouchableOpacity key={index} style={[styles.card, { backgroundColor: diet.color }]}>
          <Text style={styles.cardText}>{diet.name}</Text>
          <Image source={diet.image} style={styles.cardImage} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    opacity: 0.7,
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
