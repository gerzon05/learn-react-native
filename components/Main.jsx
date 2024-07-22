import { useEffect, useState } from 'react';

import {
  FlatList,
  View,
  ActivityIndicator,
  StyleSheet,
  Pressable,
} from 'react-native';
import { getLatestGames } from '../lib/metacritic';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedGameCard } from './GameCard';
import { Logo } from './Logo';
import { Link } from 'expo-router';
import { CircleInfoIcon } from './Icons';

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <Link href="/about" className="text-blue-500 w-10" asChild>
        <Pressable className="bg-red-600 p-2 w-fit rounded-md">
          <CircleInfoIcon />
        </Pressable>
      </Link>
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
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    paddingVertical: 20,
  },
});
