import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { HomeIcon } from '../components/Icons';

export default function About() {
  return (
    <View>
      <Text className="text-white">About</Text>
      <Link href="/" className="text-blue-500 w-10" asChild>
        <Pressable className="bg-red-600 p-2 w-fit rounded-md">
          <HomeIcon />
          {/* <Text className="text-white">ir al home</Text> */}
        </Pressable>
      </Link>
    </View>
  );
}
