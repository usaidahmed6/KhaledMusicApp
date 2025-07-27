 

import type React from "react"
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { Colors } from "../styles/colors"
import { BorderRadius, Spacing } from "../styles/spacing"

const { width } = Dimensions.get("window")

interface DashboardScreenProps {
  navigation: any
}

const DashboardScreen: React.FC<DashboardScreenProps> = ({ navigation }) => {
  const playlists = [
    {
      id: "1",
      title: "DARK",
      subtitle: "created Dec 2019",
      image: "https://picsum.photos/120/120?random=1",
    },
    {
      id: "2",
      title: "MY MIX",
      subtitle: "created Jan 2020",
      image: "https://picsum.photos/120/120?random=2",
    },
    {
      id: "3",
      title: "LAMAR",
      subtitle: "created Jul 2020",
      image: "https://picsum.photos/120/120?random=3",
    },
    {
      id: "4",
      title: "HUMBLE",
      subtitle: "created Jul 2020",
      image: "https://picsum.photos/120/120?random=4",
    },
  ]

  const recentlyPlayed = [
    {
      id: "1",
      title: "THE WEEKND",
      image: "https://picsum.photos/80/80?random=5",
    },
    {
      id: "2",
      title: "KENDRICK LAMAR",
      image: "https://picsum.photos/80/80?random=6",
    },
    {
      id: "3",
      title: "EMINEM",
      image: "https://picsum.photos/80/80?random=7",
    },
  ]

  const popularItems = [
    {
      id: "1",
      title: "FOLKLORE",
      subtitle: "2020",
      image: "https://picsum.photos/120/120?random=8",
    },
    {
      id: "2",
      title: "ROCKSTAR",
      subtitle: "2018",
      image: "https://picsum.photos/120/120?random=9",
    },
    {
      id: "3",
      title: "AFTER HOURS",
      subtitle: "2020",
      image: "https://picsum.photos/120/120?random=10",
    },
  ]

  const newReleases = [
    {
      id: "1",
      title: "Music To Be ...",
      image: "https://picsum.photos/100/100?random=11",
    },
    {
      id: "2",
      title: "Evermore",
      image: "https://picsum.photos/100/100?random=12",
    },
    {
      id: "3",
      title: "McCartney",
      image: "https://picsum.photos/100/100?random=13",
    },
  ]

  const renderPlaylistItem = ({ item }: any) => (
    <TouchableOpacity style={styles.playlistItem}>
      <Image source={{ uri: item.image }} style={styles.playlistImage} />
      <View style={styles.playlistInfo}>
        <Text style={styles.playlistTitle}>{item.title}</Text>
        <Text style={styles.playlistSubtitle}>{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  )

  const renderRecentItem = ({ item }: any) => (
    <TouchableOpacity style={styles.recentItem}>
      <Image source={{ uri: item.image }} style={styles.recentImage} />
      <Text style={styles.recentTitle}>{item.title}</Text>
    </TouchableOpacity>
  )

  const renderPopularItem = ({ item }: any) => (
    <TouchableOpacity style={styles.popularItem}>
      <Image source={{ uri: item.image }} style={styles.popularImage} />
      <Text style={styles.popularTitle}>{item.title}</Text>
      <Text style={styles.popularSubtitle}>{item.subtitle}</Text>
    </TouchableOpacity>
  )

  const renderNewReleaseItem = ({ item }: any) => (
    <TouchableOpacity style={styles.newReleaseItem}>
      <Image source={{ uri: item.image }} style={styles.newReleaseImage} />
      <Text style={styles.newReleaseTitle}>{item.title}</Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.greeting}>GOOD MORNING Rebecca!</Text>
          <TouchableOpacity style={styles.menuButton} onPress={() => navigation.openDrawer()}>
            <Icon name="menu" size={24} color={Colors.text} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Image
            source={{
              uri: "https://picsum.photos/40/40?random=14",
            }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* My Playlists */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>MY PLAYLISTS</Text>
          <FlatList
            data={playlists}
            renderItem={renderPlaylistItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
          />
        </View>

        {/* Explore Section */}
        <View style={styles.exploreSection}>
          <TouchableOpacity style={styles.exploreButton}>
            <Text style={styles.exploreText}>EXPLORE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchContainer} onPress={() => navigation.navigate("Search")}>
            <Icon name="search" size={20} color={Colors.textSecondary} />
            <Text style={styles.searchText}>Search your favorite song...</Text>
            <Icon name="mic" size={20} color={Colors.textSecondary} />
          </TouchableOpacity>
        </View>

        {/* Recently Played */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>RECENTLY PLAYED</Text>
          <FlatList
            data={recentlyPlayed}
            renderItem={renderRecentItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
          />
        </View>

        {/* 2021 Wrapped */}
        <View style={styles.wrappedSection}>
          <Text style={styles.sectionTitle}>2021 wrapped</Text>
          <View style={styles.wrappedCard}>
            <View style={styles.wrappedContent}>
              <Image
                source={{
                  uri: "https://picsum.photos/60/60?random=15",
                }}
                style={styles.wrappedImage}
              />
              <View style={styles.wrappedInfo}>
                <Text style={styles.wrappedSubtitle}>SEE WHO YOU LISTENED TO IN 2020</Text>
                <Text style={styles.wrappedDescription}>Your top artists and songs of the year and more.</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Popular */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>POPULAR</Text>
          <FlatList
            data={popularItems}
            renderItem={renderPopularItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
          />
        </View>

        {/* Featured */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>FEATURED</Text>
          <View style={styles.featuredCard}>
            <Image
              source={{
                uri: "https://picsum.photos/400/200?random=16",
              }}
              style={styles.featuredImage}
            />
            <TouchableOpacity style={styles.checkItOutButton}>
              <Text style={styles.checkItOutText}>CHECK IT OUT</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* New Releases */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>NEW RELEASES</Text>
          <FlatList
            data={newReleases}
            renderItem={renderNewReleaseItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2D3A",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.sm,
  },
  headerLeft: {
    flex: 1,
  },
  greeting: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
    fontWeight: "400",
  },
  menuButton: {
    alignSelf: "flex-start",
    padding: Spacing.xs,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing.md,
  },
  section: {
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: Spacing.md,
    letterSpacing: 0.5,
  },
  horizontalList: {
    paddingRight: Spacing.md,
  },
  playlistItem: {
    marginRight: Spacing.md,
    width: 120,
  },
  playlistImage: {
    width: 120,
    height: 120,
    borderRadius: BorderRadius.sm,
    backgroundColor: Colors.surface,
  },
  playlistInfo: {
    marginTop: Spacing.sm,
  },
  playlistTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.text,
  },
  playlistSubtitle: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  exploreSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Spacing.xl,
    gap: Spacing.md,
  },
  exploreButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.xl,
  },
  exploreText: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.text,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3A3D4A",
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.xl,
    gap: Spacing.sm,
  },
  searchText: {
    flex: 1,
    fontSize: 14,
    color: Colors.textSecondary,
  },
  recentItem: {
    alignItems: "center",
    marginRight: Spacing.md,
    width: 80,
  },
  recentImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.surface,
  },
  recentTitle: {
    fontSize: 12,
    marginTop: Spacing.sm,
    textAlign: "center",
    color: Colors.text,
    fontWeight: "500",
  },
  wrappedSection: {
    marginBottom: Spacing.xl,
  },
  wrappedCard: {
    backgroundColor: "#3A3D4A",
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
  },
  wrappedContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrappedImage: {
    width: 60,
    height: 60,
    borderRadius: BorderRadius.sm,
    backgroundColor: Colors.background,
  },
  wrappedInfo: {
    flex: 1,
    marginLeft: Spacing.md,
  },
  wrappedSubtitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  wrappedDescription: {
    fontSize: 12,
    lineHeight: 16,
    color: Colors.textSecondary,
  },
  popularItem: {
    marginRight: Spacing.md,
    width: 120,
    alignItems: "center",
  },
  popularImage: {
    width: 120,
    height: 120,
    borderRadius: BorderRadius.sm,
    backgroundColor: Colors.surface,
  },
  popularTitle: {
    fontSize: 12,
    marginTop: Spacing.sm,
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.text,
  },
  popularSubtitle: {
    fontSize: 10,
    textAlign: "center",
    color: Colors.textSecondary,
  },
  featuredCard: {
    position: "relative",
    borderRadius: BorderRadius.md,
    overflow: "hidden",
  },
  featuredImage: {
    width: "100%",
    height: 150,
    backgroundColor: Colors.surface,
  },
  checkItOutButton: {
    position: "absolute",
    bottom: Spacing.md,
    left: Spacing.md,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  checkItOutText: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.text,
  },
  newReleaseItem: {
    marginRight: Spacing.md,
    width: 100,
    alignItems: "center",
  },
  newReleaseImage: {
    width: 100,
    height: 100,
    borderRadius: BorderRadius.sm,
    backgroundColor: Colors.surface,
  },
  newReleaseTitle: {
    fontSize: 12,
    marginTop: Spacing.sm,
    textAlign: "center",
    color: Colors.text,
    fontWeight: "500",
  },
})

export default DashboardScreen
