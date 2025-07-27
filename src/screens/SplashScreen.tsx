 
import type React from "react"
import { useEffect } from "react"
import { View, StyleSheet, Dimensions, Text } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import MusicLogo from "../assets/svgs/MusicLogo"
const { width, height } = Dimensions.get("window")

interface SplashScreenProps {
  navigation: any
}

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Intro")
    }, 3000)
    return () => clearTimeout(timer)
  }, [navigation])



  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#F46D1F", "#9250A6"]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <MusicLogo width={222} height={135} />
          </View>
          <Text style={styles.brandText}>Khaled Music</Text>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    width,
    height,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  brandText: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    fontFamily: "Poppins",
  },
})

export default SplashScreen
