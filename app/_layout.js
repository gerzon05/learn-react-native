import { Pressable, View } from 'react-native';
import { Link, Stack } from 'expo-router';
import { CircleInfoIcon } from '../components/Icons.jsx';
import { Logo } from '../components/Logo.jsx';

export default function Layout() {
  return (
    <View className="flex-1 bg-black">
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitle: '',
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link href="/about" className="text-blue-500 w-10" asChild>
              <Pressable className="bg-red-600 p-2 w-fit rounded-md">
                <CircleInfoIcon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
