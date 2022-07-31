import { useThemeValue } from "../../context"


export const isDark: () => boolean = () => useThemeValue() === 'dark'
