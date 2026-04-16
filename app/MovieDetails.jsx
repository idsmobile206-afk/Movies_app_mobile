import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const MovieDetails = () => {
  const movie = useLocalSearchParams();
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-black">
      {/* Header Image */}
      <View className="relative h-96">
        <Image source={{ uri: movie.bgImg }} className="w-full h-full" />
        <Pressable 
          onPress={() => router.back()} 
          className="absolute top-12 left-5 bg-black/50 p-2 rounded-full"
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </Pressable>
      </View>

      {/* Details */}
      <View className="p-5">
        <Text className="text-white text-3xl font-bold">{movie.title}</Text>
        <View className="flex-row items-center my-2">
          <Text className="text-red-600 font-bold mr-4">{movie.year}</Text>
          <Text className="text-zinc-400 bg-zinc-800 px-2 py-1 rounded text-xs">HD</Text>
        </View>
        
        <Pressable className="bg-white w-full py-3 rounded-md flex-row justify-center items-center my-4">
          <Ionicons name="play" size={20} color="black" />
          <Text className="text-black font-bold ml-2">Play</Text>
        </Pressable>

        <Text className="text-zinc-300 leading-6 text-base">
          {movie.description || "No description available for this title."}
        </Text>
      </View>
    </ScrollView>
  );
};

export default MovieDetails;