import type { ReactElement } from 'react'


export interface OverlayType {
	onClick?: () => void
}

export type OverlaysType = OverlayType[];

export interface OverlayContextType {
	overlays: OverlaysType;
	setOverlays: (data: OverlaysType) => void;
}

export interface OverlayProviderProps {
	children?: ReactElement;
}
