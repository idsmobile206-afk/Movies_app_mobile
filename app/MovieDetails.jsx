import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const MovieDetails = () => {
  const movie = useLocalSearchParams();
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-black">
      <View className="relative h-[450px]">
        <Image source={{ uri: movie.bgImg }} className="w-full h-full" resizeMode="cover" />
        <Pressable 
          onPress={() => router.back()} 
          className="absolute top-12 left-5 bg-black/60 p-2 rounded-full"
        >
          <Ionicons name="chevron-back" size={28} color="white" />
        </Pressable>
      </View>

      <View className="p-6 -mt-10 bg-black rounded-t-3xl">
        <Text className="text-white text-4xl font-black">{movie.title}</Text>
        <View className="flex-row items-center my-3">
          <Text className="text-red-600 font-bold mr-4 italic">{movie.year}</Text>
          <View className="bg-zinc-800 px-2 py-1 rounded">
            <Text className="text-zinc-400 text-[10px] font-bold">4K ULTRA HD</Text>
          </View>
        </View>
        
        <Pressable className="bg-white w-full py-4 rounded-xl flex-row justify-center items-center my-4">
          <Ionicons name="play" size={24} color="black" />
          <Text className="text-black font-black text-lg ml-2">WATCH NOW</Text>
        </Pressable>

        <Text className="text-zinc-400 leading-6 text-base mt-2">
          {movie.description || "In a world where destiny and danger collide, one hero must rise to save the future of humanity."}
        </Text>
      </View>
    </ScrollView>
  );
};

export default MovieDetails;