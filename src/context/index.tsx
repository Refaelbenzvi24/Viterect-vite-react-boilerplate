import { FC, ReactElement } from "react"
import ThemeProvider from "../components/UI/Theme/ThemeProvider"
import MainProvider from "../components/UI/Main/MainProvider"
import CombineComponents from "./CombineComponents"


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

export default Providers
