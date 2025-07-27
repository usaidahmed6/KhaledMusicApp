import type React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { Colors } from "../styles/colors"
import { Spacing } from "../styles/spacing"

interface DrawerContentProps {
  navigation: any
}

const DrawerContent: React.FC<DrawerContentProps> = ({ navigation }) => {
  const menuItems = [
    { id: "1", title: "Home", icon: "home-outline", active: false },
    { id: "2", title: "My Card", icon: "card-outline", active: false },
    { id: "3", title: "My Shop", icon: "bag-outline", active: false },
    { id: "4", title: "My Downloads", icon: "download-outline", active: false },
    { id: "5", title: "Help", icon: "help-circle-outline", active: false },
    { id: "6", title: "Settings", icon: "settings-outline", active: false },
    { id: "7", title: "Suggest Us", icon: "bulb-outline", active: false },
    { id: "8", title: "Log Out", icon: "log-out-outline", active: false },
  ]

  const handleMenuPress = (item: any) => {
    if (item.title === "Log Out") {
      navigation.navigate("SignIn")
    } else {
      navigation.closeDrawer()
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Rebecca Spade!</Text>
        <Text style={styles.headerSubtitle}>Good Morning</Text>

        {/* Profile Section */}
        <TouchableOpacity style={styles.profileSection}>
          <Image source={{ uri: "https://picsum.photos/40/40?random=20" }} style={styles.profileImage} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Rebecca</Text>
            <Text style={styles.profileEmail}>rebecca@gmail.com</Text>
          </View>
          <Icon name="chevron-forward" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Menu Items */}
      <ScrollView style={styles.menuContainer} showsVerticalScrollIndicator={false}>
        {menuItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.menuItem} onPress={() => handleMenuPress(item)}>
            <Icon name={item.icon} size={22} color={Colors.primary} />
            <Text style={styles.menuText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E272E",
  },
  header: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.lg,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: Spacing.xl,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.tertiary,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    borderRadius: 12,
    marginBottom: Spacing.md,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.surface,
  },
  profileInfo: {
    flex: 1,
    marginLeft: Spacing.md,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  profileEmail: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  menuText: {
    fontSize: 16,
    color: Colors.text,
    marginLeft: Spacing.lg,
    fontWeight: "500",
  },
})

export default DrawerContent
