import { FC, ReactElement, useContext } from "react"
import ThemeProvider from "../components/UI/Theme/ThemeProvider"
import MainProvider from "../components/UI/Main/MainProvider"
import CombineComponents from "./CombineComponents"
import { ThemeContext } from "../components/UI/Theme/ThemeContext"
import { MainContext } from "../components/UI/Main/MainContext"


export interface ProvidersProps {
	children: ReactElement;
}

const providers = [
	ThemeProvider,
	MainProvider
]

export const AppContextProvider = CombineComponents(...providers as FC[])

const Providers = (props: ProvidersProps) => {
	return (
		<AppContextProvider>
			{props.children}
		</AppContextProvider>
	)
}

export const useTheme = () => useContext(ThemeContext)

export const useMain = () => useContext(MainContext)

export const useThemeValue = () => useTheme().theme

export default Providers
