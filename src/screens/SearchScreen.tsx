 

import type React from "react"
import { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, FlatList } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { Colors } from "../styles/colors"
import { BorderRadius, Spacing } from "../styles/spacing"
import { Typography } from "../styles/typography"

interface SearchScreenProps {
  navigation: any
}

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("")

  const recentSearches = ["Music to be murdered by Side B", "Billie Eilish", "Nate", "Kamikaze", "Post Malone"]

  const suggestions = ["Hello", "Hello", "Hellos"]

  const renderRecentItem = ({ item }: { item: string }) => (
    <View style={styles.recentItem}>
      <Icon name="time-outline" size={20} color={Colors.textSecondary} />
      <Text style={styles.recentText}>{item}</Text>
      <TouchableOpacity style={styles.removeButton}>
        <Icon name="close" size={16} color={Colors.textSecondary} />
      </TouchableOpacity>
    </View>
  )

  const renderSuggestionItem = ({ item }: { item: string }) => (
    <TouchableOpacity style={styles.suggestionItem}>
      <Text style={styles.suggestionText}>{item}</Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.greeting}>GOOD MORNING Rebecca!</Text>
        </View>
        <View style={styles.headerBottom}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={24} color={Colors.text} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>SEARCH</Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Icon name="search" size={20} color={Colors.textSecondary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor={Colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Icon name="search" size={20} color={Colors.text} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        {searchQuery === "" ? (
          <FlatList
            data={recentSearches}
            renderItem={renderRecentItem}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.suggestionsContainer}>
            <FlatList
              data={suggestions}
              renderItem={renderSuggestionItem}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.suggestionsList}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  headerTop: {
    marginBottom: Spacing.sm,
  },
  greeting: {
    ...Typography.caption1,
    color: Colors.textSecondary,
  },
  headerBottom: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    padding: Spacing.sm,
    marginRight: Spacing.sm,
  },
  headerTitle: {
    ...Typography.title3,
    fontSize: 18,
    fontWeight: "bold",
  },
  searchContainer: {
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.lg,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.xl,
    paddingHorizontal: Spacing.md,
    height: 50,
  },
  searchInput: {
    flex: 1,
    ...Typography.body,
    color: Colors.text,
    marginLeft: Spacing.sm,
  },
  searchButton: {
    padding: Spacing.sm,
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing.md,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  recentText: {
    ...Typography.body,
    flex: 1,
    marginLeft: Spacing.md,
  },
  removeButton: {
    padding: Spacing.sm,
  },
  suggestionsContainer: {
    marginTop: Spacing.md,
  },
  suggestionsList: {
    paddingRight: Spacing.md,
  },
  suggestionItem: {
    backgroundColor: Colors.surface,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.xl,
    marginRight: Spacing.sm,
  },
  suggestionText: {
    ...Typography.callout,
    fontSize: 14,
  },
})

export default SearchScreen
