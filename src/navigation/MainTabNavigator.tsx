import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { View, StyleSheet, Text } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import LinearGradient from "react-native-linear-gradient"
import DashboardScreen from "../screens/DashboardScreen"
import SearchScreen from "../screens/SearchScreen"
import { Colors } from "../styles/colors"
import DrawerContent from "../components/DrawerContent"

const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const CustomTabBarIcon = ({ focused, iconName, label }: { focused: boolean; iconName: string; label: string }) => {
  if (focused) {
    return (
      <View style={styles.activeTabContainer}>
        <LinearGradient
          colors={[Colors.gradientStart, Colors.gradientEnd]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.activeTabGradient}
        >
          <Icon name={iconName} size={24} color={Colors.text} />
          <Text style={styles.activeTabLabel}>{label}</Text>
        </LinearGradient>
      </View>
    )
  }

  return (
    <View style={styles.inactiveTabContainer}>
      <Icon name={iconName} size={24} color={Colors.text} />
      <Text style={styles.inactiveTabLabel}>{label}</Text>
    </View>
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#2A2D3A",
          borderTopWidth: 0,
          height: 90,
          paddingBottom: 20,
          paddingTop: 25,
          paddingHorizontal: 10,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let iconName = ""
          let label = ""

          if (route.name === "Home") {
            iconName = "home"
            label = "HOME"
          } else if (route.name === "Search") {
            iconName = "search"
            label = "SEARCH"
          } else if (route.name === "Library") {
            iconName = "apps"
            label = "LIBRARY"
          } else if (route.name === "Profile") {
            iconName = "person-circle-outline"
            label = "PROFILE"
          } else if (route.name === "Shop") {
            iconName = "bag-outline"
            label = "SHOP"
          }

          return <CustomTabBarIcon focused={focused} iconName={iconName} label={label} />
        },
      })}
    >
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Library" component={DashboardScreen} />
      <Tab.Screen name="Profile" component={DashboardScreen} />
      <Tab.Screen name="Shop" component={DashboardScreen} />
    </Tab.Navigator>
  )
}

const MainTabNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: Colors.background,
          width: 280,
        },
      }}
    >
      <Drawer.Screen name="Tabs" component={TabNavigator} />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  activeTabContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  activeTabGradient: {
    width: 65,
    height: 65,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    paddingVertical: 8,
  },
  activeTabLabel: {
    fontSize: 9,
    fontWeight: "700",
    color: Colors.text,
    textAlign: "center",
    marginTop: 2,
    letterSpacing: 0.5,
  },
  inactiveTabContainer: {
    width: 70,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  inactiveTabLabel: {
    fontSize: 9,
    fontWeight: "600",
    color: Colors.text,
    textAlign: "center",
    marginTop: 4,
    letterSpacing: 0.5,
  },
})

export default MainTabNavigator
