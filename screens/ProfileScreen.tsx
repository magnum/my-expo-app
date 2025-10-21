import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ScreenContent } from '../components/ScreenContent';

export const ProfileScreen = ({ navigation }: any) => {
  return (
    <ScreenContent title="Profile" path="screens/ProfileScreen.tsx">
      <Text className="text-gray-600 text-center mb-4">
        Welcome to your profile screen!
      </Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="bg-blue-500 px-6 py-3 rounded-lg mt-4"
      >
        <Text className="text-white font-semibold">Go Back</Text>
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
