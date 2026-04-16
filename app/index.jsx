import React from 'react';
import { View, Text, ImageBackground, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const Home = () => {
  const featuredMovie = {
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6vCU6m9iuebhE.jpg",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  };

  return (
    <ScrollView className="flex-1 bg-black">
      {/* Hero Section */}
      <View className="h-[550px] w-full">
        <ImageBackground 
          source={{ uri: featuredMovie.image }} 
          className="flex-1"
        >
          {/* Standard View with an RGBA background to act as an overlay.
            'rgba(0,0,0,0.6)' provides 60% black darkness.
          */}
          <View 
            className="flex-1 justify-end p-6" 
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          >
            <Text className="text-white text-5xl font-black uppercase italic mb-2">
              {featuredMovie.title}
            </Text>
            
            <Text className="text-gray-300 text-sm mb-6" numberOfLines={2}>
              {featuredMovie.description}
            </Text>

            <View className="flex-row gap-4">
              <Pressable className="bg-red-700 flex-1 py-3 rounded-md items-center">
                <Text className="text-white font-bold text-lg">Play</Text>
              </Pressable>
              
              <Link href="/DisplayMovies" asChild>
                <Pressable className="bg-zinc-800 flex-1 py-3 rounded-md items-center">
                  <Text className="text-white font-bold text-lg">Browse All</Text>
                </Pressable>
              </Link>
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* Quick Links Section */}
      <View className="p-6">
        <Text className="text-white text-xl font-bold mb-4">Continue Watching</Text>
        <View className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 flex-row items-center">
            <View className="w-20 h-12 bg-zinc-700 rounded mr-4" />
            <View>
                <Text className="text-white font-bold">Inception</Text>
                <Text className="text-zinc-500 text-xs">Remaining: 45m</Text>
            </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;