import { useState } from 'react'
import type { ReactElement } from 'react'
import { defaultMainData, MainContext } from './MainContext'
import type { MainProviderOptions } from './types'

const {
	      sideBarState: defaultSideBarState,
	      sideBarOpts:  defaultSideBarOptions,
	      overlayState: defaultOverlayState,
      } = defaultMainData


const MainProvider = (props: MainProviderOptions): ReactElement => {
	const { children } = props

	const [sideBarState, setSideBarState]     = useState(defaultSideBarState)
	const [overlayState, setOverlayState]     = useState(defaultOverlayState)
	const [sideBarOptions, setSideBarOptions] = useState(defaultSideBarOptions)
	const [disableAnimations, setDisableAnimations] = useState(false)


	return (
		<MainContext.Provider value={
			// eslint-disable-next-line react/jsx-no-constructed-context-values -- should be re-rendered every time that values are changed - this has effect on whole contained items perspective
			{
				sideBarState,
				setSideBarState,
				sideBarOpts:    sideBarOptions,
				setSideBarOpts: setSideBarOptions,
				overlayState,
				setOverlayState,
				disableAnimations,
				setDisableAnimations,
			}
		}>
			{children}
		</MainContext.Provider>
	)
}

export default MainProvider
