import { useEffect, useState } from 'react';

import { FlatList, View, ActivityIndicator, StyleSheet } from 'react-native';
import { getLatestGames } from '../lib/metacritic';
import { AnimatedGameCard } from './GameCard';
import Screen from './Screen';

export function Main() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <Screen>
      {games.length === 0 ? (
        <ActivityIndicator color={'#fff'} size={'large'} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard games={item} index={index} />
          )}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    paddingVertical: 20,
  },
});
