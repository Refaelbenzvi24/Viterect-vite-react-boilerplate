import type { ReactElement } from 'react'


export interface MainProviderOptions {
	children: ReactElement;
}

export interface MainDataType {
	sideBarState: boolean
	sideBarOpts: SideBarOptions
	overlayState: boolean
	overlays: OverlayType[]
}

export interface MainContextType extends MainDataType {
	setSideBarState: (data: boolean) => void;
	setSideBarOpts: (data: SideBarOptions) => void;
	setOverlayState: (data: boolean) => void;
	setOverlays: (overlays: OverlayType[]) => void;
}

export interface SideBarOptions {
	width?: number;
	shrinkPoint?: number;
}

export interface OverlayType {
	onClick: () => void;
}
