import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ScreenContent } from '../components/ScreenContent';

export const HomeScreen = ({ navigation }: any) => {
  return (
    <ScreenContent title="Home" path="screens/HomeScreen.tsx">
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        className="bg-blue-500 px-6 py-3 rounded-lg mt-4"
      >
        <Text className="text-white font-semibold">Go to Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Settings')}
        className="bg-gray-500 px-6 py-3 rounded-lg mt-2"
      >
        <Text className="text-white font-semibold">Go to Settings</Text>
      </TouchableOpacity>
    </ScreenContent>
  );
};
