import type React from "react"
import { TouchableOpacity, View, Text, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { Spacing } from "../styles/spacing"
import { Typography } from "../styles/typography"
import { Colors } from "../styles/colors"

interface CustomCheckboxProps {
    checked: boolean
    onPress: () => void
    label?: string
    disabled?: boolean
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, onPress, label, disabled = false }) => {
    return (
        <TouchableOpacity
            style={[styles.container, disabled && styles.disabled]}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.7}
        >
            <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
                {checked && <Icon name="checkmark" size={16} color={Colors.text} />}
            </View>
            {label && <Text style={styles.label}>{label}</Text>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    disabled: {
        opacity: 0.6,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: Colors.borderSecondary,
        backgroundColor: Colors.transparent,
        alignItems: "center",
        justifyContent: "center",
    },
    checkboxChecked: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },
    label: {
        ...Typography.subhead,
        color: Colors.text,
        marginLeft: Spacing.sm,
    },
})

export default CustomCheckbox
