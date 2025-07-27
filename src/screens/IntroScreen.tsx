import type React from "react"
import { View, Text, StyleSheet, Dimensions, ImageBackground, SafeAreaView } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import CustomButton from "../components/CustomButton"
import { Colors } from "../styles/colors"
import { Spacing } from "../styles/spacing"
import { Typography } from "../styles/typography"
import MusicLogo from "../assets/svgs/MusicLogo"

const { width, height } = Dimensions.get("window")

interface IntroScreenProps {
  navigation: any
}

const IntroScreen: React.FC<IntroScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/intro-img.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.content}>
            <View style={styles.logoContainer}>
              {/* <View style={styles.logoIcon}>
                <Icon name="play" size={40} color={Colors.text} />
              </View> */}

              <MusicLogo width={222} height={135} />
              <Text style={styles.logoText}>Khaled Music</Text>
            </View>

            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tempor invidunt
                ut labore
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              <CustomButton
                title="Sign In"
                onPress={() => navigation.navigate("SignIn")}
                variant="primary"
                size="medium"
                fullWidth
              />

              <CustomButton
                title="Sign Up"
                onPress={() => navigation.navigate("SignUp")}
                variant="outline"
                size="medium"
                fullWidth
                style={styles.signUpButton}
              />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  backgroundImage: {
    width,
    height,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.overlay,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.xxxl,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  logoIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Spacing.md,
  },
  logoText: {
    ...Typography.largeTitle,
    textAlign: "center",
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: Spacing.md,
  },
  description: {
    ...Typography.body,
    textAlign: "center",
    lineHeight: 24,
    color: Colors.textSecondary,
  },
  buttonContainer: {
    gap: Spacing.md,
    marginHorizontal: Spacing.md
  },
  signUpButton: {
    marginTop: Spacing.sm,
  },
})

export default IntroScreen
