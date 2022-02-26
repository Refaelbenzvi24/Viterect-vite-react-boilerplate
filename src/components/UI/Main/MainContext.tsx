import { createContext } from 'react'
import type { MainContextType, MainDataType } from './types'


export const defaultMainData: MainDataType = {
	sideBarState: false,
	sideBarOpts:  {
		width:       260,
		shrinkPoint: 1300,
	},
	overlayState: false,
	overlays:     [],
}

export const MainContext = createContext<MainContextType>({} as MainContextType)
