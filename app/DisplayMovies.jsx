import React from 'react';
import { Image, Text, View, ScrollView, TextInput, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import moviesData from './movies.js' ; // Ensure path is correct

const DisplayMovies = () => {
  const router = useRouter();
  const genres = ['Fantasy', 'Action', 'Adventure', 'Comedy', 'Crime', 'Drama', 'Thriller'];

  return (
    <View className="flex-1 pt-12 bg-black">
      <View className="px-4 mb-4">
        <Text className="text-white text-3xl font-bold mb-4">Discover</Text>
        <TextInput
          className="h-12 bg-zinc-900 border border-zinc-800 rounded-xl text-white px-5"
          placeholder="Search movies..."
          placeholderTextColor="gray"
        />
      </View>

      <View className="mb-6 h-10">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-4">
          {genres.map((genre, i) => (
            <Pressable key={i} className="bg-red-700 px-5 py-2 rounded-full mr-3 h-10 justify-center">
              <Text className="text-white font-semibold">{genre}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }}>
        <View className="flex-row flex-wrap justify-between">
          {moviesData.map((movie, index) => (
            <Pressable 
              key={index} 
              onPress={() => router.push({ pathname: '/MovieDetails', params: movie })}
              className="mb-6 w-[48%]"
            >
              <Image 
                source={{ uri: movie.bgImg }} 
                className="w-full h-64 rounded-xl"
                resizeMode="cover"
              />
              <Text className="text-white font-bold mt-2 text-md" numberOfLines={1}>
                {movie.title}
              </Text>
              <Text className="text-zinc-500 text-xs">{movie.year} • {movie.genre}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DisplayMovies;