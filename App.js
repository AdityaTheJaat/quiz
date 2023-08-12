import 'react-native-gesture-handler';
import Home from './component/Home/Home';
import SearchPage from './component/Search/SearchPage';
import RankingPage from './component/Ranking/RankingPage';
import ProfilePage from './component/Profile/ProfilePage';
import { NavigationContainer } from '@react-navigation/native';
import home from './images/home.png'
import search from './images/search.png'
import ranking from './images/ranking.png'
import profile from './images/profile.png'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: () => (
                <Image source={home} style={{width:40, height:40}} />
              ),
              headerShown: false
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchPage}
            options={{
              tabBarIcon: () => (
                <Image source={search} style={{width:40, height:40}} />
              ),
              tabBarBadge: 3,
              headerShown: false
            }}
          />
          <Tab.Screen
            name="Ranking"
            component={RankingPage}
            options={{
              tabBarIcon: () => (
                <Image source={ranking} style={{width:40, height:40}} />
              ),
              tabBarBadge: 3,
              headerShown: false
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfilePage}
            options={{
              tabBarIcon: () => (
                <Image source={profile} style={{width:40, height:40}} />
              ),
              headerShown: false
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
