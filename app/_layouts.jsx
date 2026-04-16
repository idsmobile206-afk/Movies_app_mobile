import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import "../global.css";

export default function Layout() {
  return (
    <Tabs screenOptions={{ 
      tabBarStyle: { 
        backgroundColor: '#000', 
        borderTopWidth: 1,
        borderTopColor: '#333',
        height: 60,
        paddingBottom: 8
      },
      tabBarActiveTintColor: '#E50914', // Netflix Red
      tabBarInactiveTintColor: 'gray',
      headerShown: false 
    }}>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="DisplayMovies" 
        options={{ 
          title: 'Browse',
          tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />
        }} 
      />
      {/* This hides the details page from the actual bottom bar menu */}
      <Tabs.Screen 
        name="MovieDetails" 
        options={{ 
          href: null,
          tabBarButton: () => null 
        }} 
      />
    </Tabs>
  );
}