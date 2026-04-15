import React from 'react';
import { Image, Text, View, ScrollView, TextInput } from 'react-native';
import moviesData from './movies';

const DisplayMovies = () => {
  const genres = ['Fantasy', 'Action', 'Adventure', 'Comedy', 'Crime', 'Drama', 'Thriller'];

  return (
    <View className="flex-1 pt-20 pl-2 bg-black">
      {/* Search Input */}
      <View className="px-3 mb-6">
        <TextInput
          className="h-10 border border-red-700 rounded-full text-gray-400 px-5 py-2"
          placeholder="Search"
          placeholderTextColor="gray"
        />
      </View>

      {/* Genres - Scrollable for better UX */}
      <View className="mb-8">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {genres.map((genre, i) => (
            <View key={i} className="bg-red-700 px-6 py-2 rounded-full mx-2">
              <Text className="text-white font-bold">{genre}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Movies List */}
      <ScrollView>
        <View className="flex-row flex-wrap justify-around">
          {moviesData.map((movie, index) => (
            <View 
              key={index} 
              className="border border-red-700 p-2 mb-4 w-[45%] items-center rounded-lg"
            >
              <Image 
                source={{ uri: movie.bgImg }} 
                className="w-full h-48 rounded-md"
                resizeMode="cover"
              />
              <View className="mt-2 items-start w-full">
                <Text className="text-red-600 font-bold text-lg" numberOfLines={1}>
                  {movie.title}
                </Text>
                <Text className="text-red-500 text-xs">{movie.year}</Text>
                <Text className="text-red-500 text-xs">{movie.date}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DisplayMovies;