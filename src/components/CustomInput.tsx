 

import type React from "react"
import { useState } from "react"
import { View, TextInput, Text, TouchableOpacity, StyleSheet, type TextInputProps, type ViewStyle } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { BorderRadius, Spacing } from "../styles/spacing"
import { Typography } from "../styles/typography"
import { Colors } from "../styles/colors"

interface CustomInputProps extends TextInputProps {
  label?: string
  placeholder: string
  value: string
  onChangeText: (text: string) => void
  secureTextEntry?: boolean
  leftIcon?: string
  rightIcon?: string
  onRightIconPress?: () => void
  error?: string
  containerStyle?: ViewStyle
  inputStyle?: ViewStyle
  showPasswordToggle?: boolean
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  leftIcon,
  rightIcon,
  onRightIconPress,
  error,
  containerStyle,
  inputStyle,
  showPasswordToggle = false,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const handleRightIconPress = () => {
    if (showPasswordToggle) {
      togglePasswordVisibility()
    } else if (onRightIconPress) {
      onRightIconPress()
    }
  }

  const getRightIconName = () => {
    if (showPasswordToggle) {
      return secureTextEntry && !isPasswordVisible ? "eye-off-outline" : "eye-outline"
    }
    return rightIcon || ""
  }

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[styles.inputContainer, isFocused && styles.inputContainerFocused, error && styles.inputContainerError]}
      >
        {leftIcon && <Icon name={leftIcon} size={20} color={Colors.tertiary} style={styles.leftIcon} />}
        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={Colors.textSecondary}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {(rightIcon || showPasswordToggle) && (
          <TouchableOpacity onPress={handleRightIconPress} style={styles.rightIconContainer}>
            <Icon name={getRightIconName()} size={20} color={Colors.textSecondary} />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.md,
  },
  label: {
    ...Typography.subhead,
    color: Colors.text,
    marginBottom: Spacing.xs,
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.inputbg,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md,
    minHeight: 50,
    borderWidth: 1,
    borderColor: Colors.transparent,
  },
  inputContainerFocused: {
    borderColor: Colors.primary,
    backgroundColor: Colors.surfaceLight,
  },
  inputContainerError: {
    borderColor: Colors.error,
  },
  leftIcon: {
    marginRight: Spacing.sm,
  },
  input: {
    flex: 1,
    ...Typography.body,
    color: Colors.text,
    paddingVertical: Spacing.sm,
  },
  rightIconContainer: {
    padding: Spacing.xs,
    marginLeft: Spacing.xs,
  },
  errorText: {
    ...Typography.caption1,
    color: Colors.error,
    marginTop: Spacing.xs,
  },
})

export default CustomInput
