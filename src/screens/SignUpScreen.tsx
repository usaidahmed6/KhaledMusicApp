 

import type React from "react"
import { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"
import { Colors } from "../styles/colors"
import { Spacing } from "../styles/spacing"
import { Typography } from "../styles/typography"
import SocialButton from "../components/SocialButton"

interface SignUpScreenProps {
  navigation: any
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = () => {
    navigation.navigate("Main")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sign Up</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.mainContentContainer}>

          <View style={styles.profileContainer}>
            <View style={styles.profileImageContainer}>
              <Image source={{ uri: "/placeholder.svg?height=100&width=100&text=Profile" }} style={styles.profileImage} />
              <TouchableOpacity style={styles.addPhotoButton}>
                <Icon name="add" size={20} color={Colors.text} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.formContainer}>
            <CustomInput
              label="First Name*"
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
              leftIcon="person-outline"
            />

            <CustomInput
              label="Last Name*"
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
              leftIcon="person-outline"
            />

            <CustomInput
              label="Phone"
              placeholder="Enter your Phone"
              value={phone}
              onChangeText={setPhone}
              leftIcon="call-outline"
              keyboardType="phone-pad"
            />

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

            <CustomButton
              title="Sign Up"
              onPress={handleSignUp}
              variant="primary"
              size="medium"
              fullWidth
              style={styles.signUpButton}
            />
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.divider} />
            </View>


            <Text style={styles.socialText}>Sign Up with</Text>

            <View style={styles.socialContainer}>
              <SocialButton provider="facebook" onPress={() => console.log("Facebook login")} />
              <View style={styles.socialGap} />
              <SocialButton provider="google" onPress={() => console.log("Google login")} />
            </View>

            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                <Text style={styles.signUpLink}>Sign In</Text>
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
  },
  backButton: {
    padding: Spacing.sm,
  },
  headerTitle: {
    ...Typography.title3,
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  profileContainer: {
    alignItems: "center",
    marginVertical: Spacing.xl,
  },
  profileImageContainer: {
    position: "relative",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.surface,
  },
  addPhotoButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: Colors.primary,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: Colors.background,
  },
  formContainer: {
    flex: 1,
  },
  signUpButton: {
    marginTop: Spacing.md,
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

export default SignUpScreen
