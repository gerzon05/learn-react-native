import { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';

export function GameCard({ games }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: games.image }} style={styles.image} />
      <Text style={styles.title}>{games.title}</Text>
      <Text style={styles.score}>{games.score}</Text>
      <Text style={styles.description}>{games.description}</Text>
    </View>
  );
}

export function AnimatedGameCard({ games, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard games={games} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: '#eee',
    fontSize: 12,
  },
  score: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
