import React from "react"
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  type ViewStyle,
  type TextStyle,
  type StyleProp,
} from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { BorderRadius, Spacing } from "../styles/spacing"
import { Typography } from "../styles/typography"
import { Colors } from "../styles/colors"

interface CustomButtonProps {
  title: string
  onPress: () => void
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "small" | "medium" | "large"
  disabled?: boolean
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  fullWidth?: boolean
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  disabled = false,
  style,
  textStyle,
  fullWidth = false,
}) => {
  const getButtonStyle = (): StyleProp<ViewStyle>[] => {
    const baseStyle: ViewStyle = {
      borderRadius: BorderRadius.xl,
      alignItems: "center",
      justifyContent: "center",
      opacity: disabled ? 0.6 : 1,
    }

    const sizeStyles: Record<string, ViewStyle> = {
      small: {
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.md,
        minHeight: 36,
      },
      medium: {
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.lg,
        minHeight: 48,
      },
      large: {
        paddingVertical: Spacing.lg,
        paddingHorizontal: Spacing.xl,
        minHeight: 56,
      },
    }

    return [baseStyle, sizeStyles[size], fullWidth && { width: "100%" }, style].filter(Boolean) as StyleProp<ViewStyle>[]
  }

  const getTextStyle = (): StyleProp<TextStyle>[] => {
    const baseTextStyle: TextStyle = Typography.button

    const variantTextStyles: Record<string, TextStyle> = {
      primary: { color: Colors.text },
      secondary: { color: Colors.text },
      outline: { color: Colors.tertiary },
      ghost: { color: Colors.primary },
    }

    return [baseTextStyle, variantTextStyles[variant], textStyle].filter(Boolean) as StyleProp<TextStyle>[]
  }

  const variantStyles: Record<string, ViewStyle> = {
    secondary: {
      backgroundColor: Colors.surface,
    },
    outline: {
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.tertiary,
    },
    ghost: {
      backgroundColor: Colors.transparent,
    },
  }

  if (variant === "primary") {
    return (
      <TouchableOpacity style={getButtonStyle()} onPress={onPress} disabled={disabled} activeOpacity={0.8}>
        <LinearGradient
          colors={[Colors.gradientStart, Colors.gradientEnd]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[StyleSheet.absoluteFill, { borderRadius: BorderRadius.xl }]}
        />
        <Text style={getTextStyle()}>{title}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity
      style={[...getButtonStyle(), variantStyles[variant]]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
