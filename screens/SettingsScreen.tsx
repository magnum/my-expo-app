import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ScreenContent } from '../components/ScreenContent';

export const SettingsScreen = ({ navigation }: any) => {
  return (
    <ScreenContent title="Settings" path="screens/SettingsScreen.tsx">
      <Text className="text-gray-600 text-center mb-4">
        Configure your app settings here.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="bg-blue-500 px-6 py-3 rounded-lg mt-4"
      >
        <Text className="text-white font-semibold">Go Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        className="bg-green-500 px-6 py-3 rounded-lg mt-2"
      >
        <Text className="text-white font-semibold">Go to Home</Text>
      </TouchableOpacity>
    </ScreenContent>
  );
};
