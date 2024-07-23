import { Stack, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import Screen from '../components/Screen';
import { useEffect, useState } from 'react';
import { getGameDetails } from '../lib/metacritic';
import { Score } from '../components/Score';

export default function Details() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGameInfo);
    }
  }, [id]);
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitle: 'The Legend of Zelda: Breath of the Wild',
          headerLeft: () => {},
          headerRight: () => {},
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={'#fff'} size={'large'} />
        ) : (
          <ScrollView>
            <View className="items-center">
              <Image
                source={{ uri: gameInfo.img }}
                style={{ width: 110, height: 150 }}
                className="rounded-lg mb-4"
              />
              <Score maxScore={100} score={gameInfo.score} />
              <Text className="text-white text-center font-bold text-xl my-3">
                {gameInfo.title}
              </Text>
              <Text className="text-white/70 text-justify px-2 mt-4 mb-8 text-base">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
