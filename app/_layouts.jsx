import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import "../global.css";

export default function Layout() {
  return (
    <Tabs screenOptions={{ 
      tabBarStyle: { backgroundColor: '#000', borderTopColor: '#b91c1c' },
      tabBarActiveTintColor: '#b91c1c',
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
        name="movies" 
        options={{ 
          title: 'Browse',
          tabBarIcon: ({ color }) => <Ionicons name="film" size={24} color={color} />
        }} 
      />
      {/* Hide MovieDetails from the Navbar */}
      <Tabs.Screen 
        name="MovieDetails" 
        options={{ href: null }} 
      />
    </Tabs>
  );
}