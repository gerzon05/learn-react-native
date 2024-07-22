import { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import { Score } from './Score';

export function GameCard({ games }) {
  return (
    <View
      className="mb-10 p-4 flex-row rounded-xl items-stretch gap-4"
      key={games.slug}
    >
      <Image source={{ uri: games.image }} style={styles.image} />
      <View>
        <Text style={styles.title}>{games.title}</Text>
        <Score score={games.score} maxScore={100} />
        <Text style={styles.description}>
          {games.description.slice(0, 100)}...
        </Text>
      </View>
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
