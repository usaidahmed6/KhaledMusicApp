import type React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { BorderRadius, Spacing } from "../styles/spacing"
import { Typography } from "../styles/typography"
import { Colors } from "../styles/colors"

interface SocialButtonProps {
  provider: "facebook" | "google"
  onPress: () => void
  disabled?: boolean
}

const SocialButton: React.FC<SocialButtonProps> = ({ provider, onPress, disabled = false }) => {
  const getProviderConfig = () => {
    switch (provider) {
      case "facebook":
        return {
          icon: "logo-facebook",
          text: "Facebook",
          backgroundColor: Colors.surfaceDark,
        }
      case "google":
        return {
          icon: "logo-google",
          text: "Google",
          backgroundColor: Colors.surfaceDark,
        }
      default:
        return {
          icon: "logo-facebook",
          text: "Facebook",
          backgroundColor: Colors.surface,
        }
    }
  }

  const config = getProviderConfig()

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: config.backgroundColor }, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Icon name={config.icon} size={20} color={Colors.text} />
      <Text style={styles.text}>{config.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.md,
    minHeight: 48,
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    ...Typography.callout,
    marginLeft: Spacing.sm,
    fontWeight: "500",
  },
})

export default SocialButton
