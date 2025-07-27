 
import type React from "react"
import { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"
import CustomCheckbox from "../components/CustomCheckbox"
import SocialButton from "../components/SocialButton"
import Svg, { Circle, Rect } from "react-native-svg"
import { Colors } from "../styles/colors"
import { Spacing } from "../styles/spacing"
import { Typography } from "../styles/typography"

interface SignInScreenProps {
  navigation: any
}

const BackgroundPattern = () => (
  <Svg style={StyleSheet.absoluteFillObject} width="100%" height="100%">
    {/* Large circles */}
    <Circle cx="50" cy="100" r="80" fill="rgba(255,255,255,0.03)" />
    <Circle cx="300" cy="200" r="60" fill="rgba(255,255,255,0.02)" />

    {/* Dot pattern in top right */}
    {Array.from({ length: 15 }, (_, i) => (
      <Circle key={i} cx={250 + (i % 5) * 15} cy={120 + Math.floor(i / 5) * 15} r="2" fill="rgba(255,255,255,0.1)" />
    ))}

    {/* Additional geometric shapes */}
    <Rect x="320" y="300" width="40" height="40" rx="8" fill="rgba(255,255,255,0.02)" />
    <Circle cx="80" cy="400" r="25" fill="rgba(255,255,255,0.02)" />
  </Svg>
)

const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSignIn = () => {
    navigation.navigate("Main")
  }

  return (
    <SafeAreaView style={styles.container}>
      <BackgroundPattern />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sign In</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.mainContentContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome!</Text>
          </View>

          <View style={styles.formContainer}>
            <CustomInput
              label="Email"
              placeholder="Enter your Email"
              value={email}
              onChangeText={setEmail}
              leftIcon="mail-outline"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <CustomInput
              label="Password"
              placeholder="••••••••"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              leftIcon="lock-closed-outline"
              showPasswordToggle
            />

            <View style={styles.optionsContainer}>
              <CustomCheckbox checked={rememberMe} onPress={() => setRememberMe(!rememberMe)} label="Remember me" />
              <TouchableOpacity>
                <Text style={styles.forgotText}>Forget password?</Text>
              </TouchableOpacity>
            </View>

            <CustomButton
              title="Sign In"
              onPress={handleSignIn}
              variant="primary"
              size="medium"
              fullWidth
              style={styles.signInButton}
            />

            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.divider} />
            </View>

            <Text style={styles.socialText}>Sign in with</Text>

            <View style={styles.socialContainer}>
              <SocialButton provider="facebook" onPress={() => console.log("Facebook login")} />
              <View style={styles.socialGap} />
              <SocialButton provider="google" onPress={() => console.log("Google login")} />
            </View>

            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.signUpLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    paddingTop: Spacing.lg,
  },
  backButton: {
    padding: Spacing.sm,
  },
  headerTitle: {
    ...Typography.title3,
    color: Colors.text,
    fontSize: 18,
    fontWeight: "600",
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 0, // Remove horizontal padding since it's now in mainContentContainer
  },
  welcomeContainer: {
    alignItems: "center",
    marginBottom: Spacing.xl,
  },
  formContainer: {
    flex: 1,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Spacing.xl,
    marginTop: Spacing.sm,
  },
  forgotText: {
    fontSize: 14,
    color: Colors.tertiary,
    fontWeight: "400",
  },
  signInButton: {
    marginBottom: Spacing.xl,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Spacing.lg,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.textSecondary,
    opacity: 0.3,
  },
  dividerText: {
    fontSize: 14,
    color: Colors.tertiary,
    marginHorizontal: Spacing.md,
    fontWeight: "400",
  },
  socialText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: Spacing.md,
    color: Colors.text,
    fontWeight: "400",
  },
  socialContainer: {
    flexDirection: "row",
    marginBottom: Spacing.xl,
  },
  socialGap: {
    width: Spacing.md,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Spacing.xl,
    marginTop: Spacing.lg,
  },
  signUpText: {
    fontSize: 16,
    color: Colors.textSecondary,
    fontWeight: "400",
  },
  signUpLink: {
    fontSize: 16,
    color: Colors.tertiary,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "700",
    color: Colors.text,
    textAlign: "center",
  },
  mainContentContainer: {
    backgroundColor: "#373F45",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: Spacing.lg,
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.xxl,
    minHeight: "80%",
  },
})

export default SignInScreen
