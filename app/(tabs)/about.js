import { ScrollView, Text } from 'react-native';
import Screen from '../../components/Screen';

export default function About() {
  return (
    <Screen className="bg-black flex-1">
      <ScrollView>
        <Text className="text-white text-center text-2xl font-bold">About</Text>
        <Text className="text-white/70 text-justify px-2 mt-4 text-base">
          This is a simple example of a tabbed application using Expo Router. It
          showcases the basic structure of a tabbed application and how to
          navigate between different screens using Expo Router. lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Text>
        <Text className="text-white/70 text-justify px-2 mt-4 text-base">
          This is a simple example of a tabbed application using Expo Router. It
          showcases the basic structure of a tabbed application and how to
          navigate between different screens using Expo Router. lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Text>
        <Text className="text-white/70 text-justify px-2 mt-4 text-base">
          This is a simple example of a tabbed application using Expo Router. It
          showcases the basic structure of a tabbed application and how to
          navigate between different screens using Expo Router. lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Text>
      </ScrollView>
    </Screen>
  );
}
